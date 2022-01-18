import React, { useEffect, useState } from 'react';

import { YellowLogo } from "../../static/assets/logos/drive-download-20220111T233455Z-001/1.png";
import { Link, useLocation } from 'react-router-dom';

export default function NavBar(props){

   const { adminLogin } = props;

   const location = useLocation();

   return(
    <nav className='navbar'>
        {location.pathname != "/" ? <Link className='navbar__link' to="/">Home</Link> : null}
        <Link className='navbar__link' to="/contact">Contact</Link>
        <Link className='navbar__link' to='/appointments'>Appointments</Link>
        <Link className='navbar__link' to='/merch'>Merch</Link>
     </nav>
   );
}