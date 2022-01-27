import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('.app-wrapper');

export default function DeleteEventModal(props){

    const {deleteModal, setDeleteModal, selectedItem} = props;

    const [item, setItem] = useState(selectedItem);

    const customStyle = {
        content: {
            display: 'grid',
            justifyItems: 'center',
            alignItems: 'center'
        }
    }

    const handleCloseModal = () => {
        setDeleteModal(false);
    }

    const handleDeleteEvent = () => {
        axios.delete(`http://localhost5050/${item._id}`)
    }

   return(
    <div className='delete-event-modal'>
       <Modal
            preventScroll={true}
            style={customStyle} 
            isOpen={deleteModal}
            onRequestClose={handleCloseModal}
       >
        <div className='delete-event-modal__confirmation'>
            <div className='delete-event'>
                <div className='delete-event__question'>Are you sure you want to delete this event?</div>
                <div className='delete-event__item'>{item.title}</div>
                <button className='delete-event__confirm' onClick={handleDeleteEvent}>Yes</button>
                <button className='delete-event__cancel' onClick={handleCloseModal}>No</button>
            </div>
        </div>
       </Modal>
    </div>
   );
}