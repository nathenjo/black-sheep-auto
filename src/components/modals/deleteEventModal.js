import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('.app-wrapper');

export default function DeleteEventModal(props){

    const {deleteModal, setDeleteModal, item} = props;

    const customStyle = {
        content: {
            display: 'grid',
            width: "50%"
        }
    }

    const handleCloseModal = () => {
        setDeleteModal(false);
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