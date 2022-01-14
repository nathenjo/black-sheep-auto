import React, { useState, useEffect } from 'react';

import HeaderLogo from '../headerLogo';
import Events from '../events'; 

export default function Home(props){

    const {adminLogin} = props;

   return(
    <div className='home'>
        <HeaderLogo className='home__logo' />
        <a target="_blank" href="https://www.google.com/maps/place/Darlington+Dragway/@34.2657879,-79.9530829,13z/data=!4m5!3m4!1s0x885570c47a9e7931:0x2ad63a1a25efef8d!8m2!3d34.3066406!4d-79.9939575" className='home__address'>123 Shop Location St, Hartsville, SC 29550</a>
        <Events adminLogin={adminLogin} />
    </div>
   );
}