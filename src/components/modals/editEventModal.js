import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import LoadingIcon from '../loadingIcon';

Modal.setAppElement('.app-wrapper');

export default function EditEventModal(props){

    const {setEventChanged, selectedItem, setEditModal, editModal} = props;
    const [loading, setLoading] = useState(false);

    const customStyle = {
        content: {
            display: 'grid'
        }
    }

    const [titleValue, setTitleValue] = useState(selectedItem.title);
    const [descriptionValue, setDescriptionValue] = useState(selectedItem.description);
    const [imageUrlValue, setImageUrlValue] = useState(selectedItem.imageUrl);
    const [dateValue, setDateValue] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [locationValue, setLocationValue] = useState(selectedItem.location);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleCloseModal = () => {
        setEditModal(false);
    }

    function customGetMonth(month) {
        var monthNum = month;
        if (monthNum < 10) {
            return `0${monthNum}`
        } else {
            return `${monthNum}`
        }
    }

    useEffect(() => {
        const selectedItemNewDate = new Date(selectedItem.date)
        let selectedItemTime = `${selectedItemNewDate.getHours()}:${selectedItemNewDate.getMinutes()}`
        let selectedItemDate = `${selectedItemNewDate.getFullYear()}-${customGetMonth(selectedItemNewDate.getMonth())}-${customGetMonth(selectedItemNewDate.getDate())}`
        setDateValue(selectedItemDate)
        setTimeValue(selectedItemTime)
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        await axios.patch(`http://localhost:5050/events/${selectedItem._id}`, {
            title: titleValue,
            description: descriptionValue,
            imageUrl: imageUrlValue,
            date: new Date(dateValue.concat('T', timeValue)).toJSON(),
            location: locationValue
        }).then(response => {
            if (response.data.message == 'Event has been successfully updated') {
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
    <div className='edit-event-modal'>
       <Modal
            preventScroll={true}
            style={customStyle} 
            isOpen={editModal}
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
            <button type='submit'>Update</button>
        </form>
        {loading && <LoadingIcon />}
        {submitSuccess && <div className='add-event-modal__success'>Event successfully changed!</div>}
        {submitError && <div className='add-event-modal__error'>Error updating event, try again</div>}
        <button className='add-event-modal__button' onClick={handleCloseModal}>Close</button>   
       </Modal>
    </div>
   );
}