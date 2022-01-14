import React, { useState, useEffect } from 'react';

import HeaderLogo from '../headerLogo';
import Events from '../events'; 

export default function Home(props){

   return(
    <div className='home'>
        <HeaderLogo className='home__logo' />
        <div className='event-wrapper'>
            <Events />
        </div>
    </div>
   );
}