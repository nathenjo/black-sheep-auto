import React, { useState } from 'react';

export default function Footer(props){

    const {className} = props;

   return(
    <footer className='footer'>
        <div className='footer__social-heading'>
            Be sure to check us out on social media and follow to stay up to date!
        </div>
        <div className='footer__socials'>
            <div className='footer__socials__facebook'>
                <i className="fab fa-facebook-square"></i>
                <label className='footer__socials__label'>Facebook</label>
            </div>
            <div className='footer__socials__twitter'>
                <i className="fab fa-twitter-square"></i>
                <label className='footer__socials__label'>Twitter</label>
            </div>
            <div className='footer__socials__instagram'>
                <i className="fab fa-instagram"></i>
                <label className='footer__socials__label'>Instagram</label>
            </div>
        </div>
    </footer>
   );
}