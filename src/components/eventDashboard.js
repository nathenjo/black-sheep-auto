import React, { useState } from 'react';

export default function EventDashboard(props){

    const {className} = props;

    return(
        <div className={`event-dashboard ${className}`}>
            <button className='event-dashboard__add-event'>Add Event<i className="fas fa-plus-square"></i></button>
            <button className='event-dashboard__delete-event'>Delete Event<i class="fas fa-trash-alt"></i></button>
            <button className='event-dashboard__update-event'>Update Event<i class="fas fa-edit"></i></button>
        </div>
    );
}