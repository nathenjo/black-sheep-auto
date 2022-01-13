import React, { useState, useEffect } from 'react';

import HeaderLogo from '../headerLogo';

export default function Home(props){

   return(
    <div className='home'>
        <HeaderLogo className='home__logo' />
    </div>
   );
}