import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('.app-wrapper');

export default function DeleteEventModal(props){

    const {deleteModal, setDeleteModal, item, events, selectedModal} = props;

    const customStyle = {
        content: {
            display: 'grid'
        }
    }

    useEffect(() => {
        events.filter(item => item._id == selectedModal)
    }, [])

    const handleCloseModal = () => {
        setDeleteModal('');
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
            <div>{item.title}</div>
        </div>
       </Modal>
    </div>
   );
}