import React, { useEffect, useState } from 'react';
import EventDashboard from './eventDashboard';

export default function Events(props){

    const {adminLogin} = props;

    const [events, setEvents] = useState([]);

    var eventList = [
        {img: "https://ak.picdn.net/shutterstock/videos/278746/thumb/6.jpg", title: "Shop Opening Event", description: "Come on out to the Shop for the grand opening of Black Sheep Auto Performance"},
        {img: "https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp", title: "Drag Race Event", description: "Come on out to the Darlington Drag Strip to test your car and racing skills!"},
        {img: "https://www.eustis.org/files/assets/public/events-amp-tourism/images/car-shows/classic-car-show.2.jpg?w=1200", title: "Car Meet Up", description: "Meet up at the Shop to meet up with local racers and hang out"},
        {img: "https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp", title: "Drag Race Event", description: "Come on out to the Darlington Drag Strip to test your car and racing skills!"},
        {img: "https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp", title: "Drag Race Event", description: "Come on out to the Darlington Drag Strip to test your car and racing skills!"},
        {img: "https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp", title: "Drag Race Event", description: "Come on out to the Darlington Drag Strip to test your car and racing skills!"},
        {img: "https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp", title: "Drag Race Event", description: "Come on out to the Darlington Drag Strip to test your car and racing skills!"},
        {img: "https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp", title: "Drag Race Event", description: "Come on out to the Darlington Drag Strip to test your car and racing skills!"},
        {img: "https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp", title: "Drag Race Event", description: "Come on out to the Darlington Drag Strip to test your car and racing skills!"},
        {img: "https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp", title: "Drag Race Event", description: "Come on out to the Darlington Drag Strip to test your car and racing skills!"},
    ]

    useEffect(() => {
        setEvents(events.concat(eventList))
    }, [])

   return(
    <div className='events'>
        {adminLogin ? <EventDashboard /> : null}
        {events.map((item, index) => {
           return (
               <div key={index} className='events__event'>
                   <img
                        className='events__event__img'
                        src={item.img}
                        width={400}
                    />
                <div className='events__event__text'>
                    <div className='events__event__text__title'>{item.title}</div>
                    <div className='events__event__text__description'>{item.description}</div>
                </div>
               </div>
           )
       })}
     </div>
   );
}