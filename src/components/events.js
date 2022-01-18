import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EventDashboard from './eventDashboard';
import LoadingIcon from './loadingIcon';

export default function Events(props){

    const {adminLogin} = props;

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5050/events')
        .then(response => {
            setEvents(events.concat(response.data));
            setLoading(false);
        }).catch(error => {
            setEvents(events.concat([{title: "Check out social media for events!"}]));
            setLoading(false);
        })
    }, [])

   return(
    <div className='events'>
        {adminLogin ? <EventDashboard className='events__event-dashboard' /> : null}
        {events.map((item, index) => {
           return (
               <div key={index} className='events__event'>
                   <img
                        className='events__event__img'
                        src={item.imageUrl}
                        width={400}
                    />
                <div className='events__event__text'>
                    <div className='events__event__text__title'>{item.title}</div>
                    <div className='events__event__text__description'>{item.description}</div>
                </div>
               </div>
           )
       })}
       {loading ? <LoadingIcon className='events__loading-icon' /> : null}
     </div>
   );
}