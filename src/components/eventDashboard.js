import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import AddEventModal from './modals/addEventModal';

Modal.setAppElement('.app-wrapper');

export default function EventDashboard(props){

    const {className} = props;

    const [addEventModal, setAddEventModal] = useState(false);
    const [deleteEventModal, setDeleteEventModal] = useState(false);
    const [updateEventModal, setUpdateEventModal] = useState(false);

    const handleCloseModal = () => {
        setAddEventModal(false)
    }

    return(
        <div className={`event-dashboard ${className}`}>
            <button
                onClick={() => setAddEventModal(true)}
                className='event-dashboard__add-event'
            >Add Event<i className="fas fa-plus-square"></i>
            </button>
            {addEventModal ? <AddEventModal addEventModal={addEventModal} setAddEventModal={setAddEventModal} /> : null}
            <button className='event-dashboard__delete-event'>Delete Event<i className="fas fa-trash-alt"></i></button>
            <button className='event-dashboard__update-event'>Update Event<i className="fas fa-edit"></i></button>
        </div>
    );
}