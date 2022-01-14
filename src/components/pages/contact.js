import React, { useState } from 'react';
import HeaderLogo from '../headerLogo';

export default function Contact(props){
   return(
    <div className='contact'>
      <HeaderLogo className='contact__header-logo' />
      <a target="_blank" href="https://www.google.com/maps/place/Darlington+Dragway/@34.2657879,-79.9530829,13z/data=!4m5!3m4!1s0x885570c47a9e7931:0x2ad63a1a25efef8d!8m2!3d34.3066406!4d-79.9939575" className='home__address contact__address'>123 Shop Location St, Hartsville, SC 29550</a>
      <a href="mailto: cassidycade0@gmail.com" className='contact__email'>cadeemailforshop@email.com</a>
      <div className='contact__phone'><span>(843)409-5414</span></div>
      <iframe className='contact__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.630430968396!2d-79.99998402290736!3d34.3062172968896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885570c47a9e7931%3A0x2ad63a1a25efef8d!2sDarlington%20Dragway!5e0!3m2!1sen!2sus!4v1642175766423!5m2!1sen!2sus" height={450} style={{border: "0"}} allowFullScreen="" loading={"lazy"} />
    </div>
   );
}