import React, { useState } from 'react';

export default function EventDashboard(props){
    return(
        <div className='events__event-dashboard'>
            <div className='events__event-dashboard__add-event'>Add Event</div>
            <div className='events__event-dashboard__delete-event'>Delete Event</div>
            <div className='events__event-dashboard__update-event'>Update Event</div>
        </div>
    );
}