import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import AddEventModal from './modals/addEventModal';

Modal.setAppElement('.app-wrapper');

export default function EventDashboard(props){

    const {className, setEventChanged} = props;

    const [addEventModal, setAddEventModal] = useState(false);

    useEffect(() => {
        
    }, [addEventModal])

    return(
        <div className={`event-dashboard ${className}`}>
            <button
                onClick={() => setAddEventModal(true)}
                className='event-dashboard__add-event'
            >Add Event<i className="fas fa-plus-square"></i>
            </button>
            {addEventModal ? <AddEventModal setEventChanged={setEventChanged} addEventModal={addEventModal} setAddEventModal={setAddEventModal} /> : null}
        </div>
    );
}