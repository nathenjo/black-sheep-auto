import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

export default function NavBar(props){

   const { adminLogin, setAdminLogin } = props;

   const location = useLocation();

   const handleLogout = () => {
      setAdminLogin(false);
   }

   return(
    <nav className='navbar'>
        {location.pathname != "/" && <Link className='navbar__link' to="/">Home</Link>}
        <Link className='navbar__link' to="/contact">Contact</Link>
        <Link className='navbar__link' to='/appointments'>Appointments</Link>
        <Link className='navbar__link' to='/merch'>Merch</Link>
        {adminLogin && <button className='navbar__logout' onClick={handleLogout}>Logout</button>}
     </nav>
   );
}