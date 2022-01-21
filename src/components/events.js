import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EventDashboard from './eventDashboard';
import LoadingIcon from './loadingIcon';
import DeleteEventModal from './modals/deleteEventModal';

export default function Events(props){

    const {adminLogin} = props;

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [eventChanged, setEventChanged] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    
    useEffect(() => {
        setLoading(true)
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5050/events')
        .then(response => {
            setEvents(response.data);
            setLoading(false);
        }).catch(error => {
            setEvents(events.concat([{title: "Check out social media for events!"}]));
            setLoading(false);
        })
    }, [eventChanged])

   return(
    <div className='events'>
        {adminLogin ? <EventDashboard setEventChanged={setEventChanged} className='events__event-dashboard' /> : null}
        {events.map((item, index) => {
            let dateOptions = {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}
            let itemDate = new Date(item.date).toLocaleString("en-US", {timeZone: "America/New_York", dateStyle: 'short', timeStyle: 'short'})
           return (
               <div key={index} className='events__event'>
                   <img
                        className='events__event__img'
                        src={item.imageUrl}
                        width={400}
                    />
                    <div className='events__event__text'>
                        <div className='events__event__text__title'>
                            {item.title}
                            {adminLogin ? <i onClick={() => setDeleteModal(true)} className=" events__event__text__delete fas fa-trash-alt"></i> : null}
                            {adminLogin ? <i className=" events__event__text__edit far fa-edit"></i> : null}
                        </div>

                        <div className='events__event__text__description'>{item.description}</div>
                        <div className='events__event__text__description'>{itemDate}</div>
                    </div>
                    {deleteModal ? <DeleteEventModal item={item} deleteModal={deleteModal} setDeleteModal={setDeleteModal} /> : null}
               </div>
           )
       })}
       {loading ? <LoadingIcon className='events__loading-icon' /> : null}
     </div>
   );
}