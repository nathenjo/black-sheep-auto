import React, { useState, useEffect } from 'react';

import HeaderLogo from '../headerLogo';
import Events from '../events'; 

export default function Home(props){

    const {adminLogin} = props;

   return(
    <div className='home'>
        <HeaderLogo className='home__logo' />
        <Events adminLogin={adminLogin} />
    </div>
   );
}