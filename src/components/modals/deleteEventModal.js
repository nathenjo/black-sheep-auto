import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import LoadingIcon from '../loadingIcon';

Modal.setAppElement('.app-wrapper');

export default function DeleteEventModal(props){

    const {deleteModal, setDeleteModal, selectedItem, setEventChanged} = props;

    const [item, setItem] = useState(selectedItem);
    const [loading, setLoading] = useState(false);
    const [deleteState, setDeleteState] = useState({
        success: false,
        error: false
    });

    useEffect(() => {
        setDeleteState({success: false, error: false})
    }, [])

    const customStyle = {
        content: {
            display: 'grid',
            justifyItems: 'center',
            alignItems: 'center',
            top: '50%',
            left: '50%',
            marginRight: '50%',
            width: '70vw',
            right: 'auto',
            transform: 'translate(-50%, -50%',
            height: '50vh'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }
    }

    const handleCloseModal = () => {
        setDeleteModal(false);
    }

    async function handleDeleteEvent(e) {
        e.preventDefault();
        setLoading(true)
        await axios.delete(`http://localhost:5050/events/${item._id}`).then(response => {
            console.log(response);
            setLoading(false);
            setDeleteState({success: true});
            setEventChanged(true);
        }).catch(error => {
            console.log(error);
            setLoading(false)
            setDeleteState({error: true});
        })
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
        {loading ? <LoadingIcon /> : null}
        {deleteState.success ? <div className='delete-event__success'>Event successfully deleted!</div> : null}
        {deleteState.error ? <div className='delete-event__error'>Error deleting event, try again</div> : null}
       </Modal>
    </div>
   );
}