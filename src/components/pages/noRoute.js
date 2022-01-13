import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import HeaderLogo from '../headerLogo';

export default function NoRoute(props){
   return(
    <div className='no-route'>
      <HeaderLogo className='no-route__logo' />
      <h3 className="no-route__message">Sorry! This page does not exist or there is an issue with the server, navigate back to the homepage and go from there!</h3>
      <Link className="no-route__link" to='/'>Back to Home</Link>
    </div>
   );
}
