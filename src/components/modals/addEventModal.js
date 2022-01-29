import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import LoadingIcon from '../loadingIcon';

Modal.setAppElement('.app-wrapper');

export default function AddEventModal(props){

    const {addEventModal, setAddEventModal, setEventChanged} = props;
    const [loading, setLoading] = useState(false);

    const customStyle = {
        content: {
            display: 'grid'
        }
    }

    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [imageUrlValue, setImageUrlValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleCloseModal = () => {
        setAddEventModal(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        await axios.post("http://localhost:5050/events", {
            title: titleValue,
            description: descriptionValue,
            imageUrl: imageUrlValue,
            date: new Date(dateValue.concat('T', timeValue)).toJSON(),
            location: locationValue
        }).then(response => {
            if (response.data.message == 'Event has been submitted') {
                setSubmitSuccess(true)
                setLoading(false)
                setEventChanged(true)
            } else {
                setSubmitError(true)
                setLoading(false)
            }
        }).catch(error => {
            setSubmitError(true)
        })
    }

   return(
    <div className='add-event-modal'>
       <Modal
            preventScroll={true}
            style={customStyle} 
            isOpen={addEventModal}
            onRequestClose={handleCloseModal}
       >
        <form onSubmit={handleSubmit} className='add-event-modal__form'>
            <label className='add-event-modal__form__label'>Event Name</label>
            <input
                className='add-event-modal__form__input'
                type='text'
                placeholder='Title'
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
            />
            <label className='add-event-modal__form__label'>Description</label>
            <textarea
                className='add-event-modal__form__textarea'
                type='text'
                placeholder='Description'
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
            />
            <label className='add-event-modal__form__label'>Image for Background</label>
            <input
                className='add-event-modal__form__file'
                type='url'
                placeholder='Image URL'
                value={imageUrlValue}
                onChange={(e) => setImageUrlValue(e.target.value)}
            />
            <label className='add-event-modal__form__label'>Date</label>
            <input
                className='add-event-modal__form__input'
                type='date'
                placeholder='Title'
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
            />
            <label className='add-event-modal__form__label'>Time</label>
            <input
                className='add-event-modal__form__input'
                type='time'
                placeholder='Time'
                value={timeValue}
                onChange={(e) => setTimeValue(e.target.value)}
            />
            <label className='add-event-modal__form__label'>Location</label>
            <input
                className='add-event-modal__form__input'
                type='address'
                placeholder='Location'
                value={locationValue}
                onChange={(e) => setLocationValue(e.target.value)}
            />
            <button type='submit'>Create</button>
        </form>
        {loading && <LoadingIcon />}
        {submitSuccess && <div className='add-event-modal__success'>Event successfully added!</div>}
        {submitError && <div className='add-event-modal__error'>Error adding event, try again</div>}
        <button className='add-event-modal__button' onClick={handleCloseModal}>Close</button>
       </Modal>
    </div>
   );
}