import React, { useState } from 'react';

export default function NavBar(props){

   const { adminLogin } = props;

   return(
    <nav className='navbar'>
        <div className='navbar__link' onClick={() => console.log("Link clicked")}>Contact</div>
        <div className='navbar__link' onClick={() => console.log("Link clicked")}>Appointments</div>
        <div className='navbar__link' onClick={() => console.log("Link clicked")}>Merch</div>
        {adminLogin ? <div className='navbar__link' onClick={() => console.log("Link clicked")}>Add Events</div> : null}
     </nav>
   );
}