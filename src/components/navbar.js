import React, { useState } from 'react';

export default function NavBar(props){
   return(
    <nav className='navbar'>
        <div className='navbar__link' onClick={() => console.log("Link clicked")}>Contact</div>
        <div className='navbar__link' onClick={() => console.log("Link clicked")}>Appointments</div>
        <div className='navbar__link' onClick={() => console.log("Link clicked")}>Merch</div>
     </nav>
   );
}