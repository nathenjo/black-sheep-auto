import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props){

    const {className} = props;


   return(
    <footer className='footer'>
        <div className='footer__social-heading'>
            Be sure to check us out on social media and follow to stay up to date!
        </div>
        <div className='footer__socials'>
            <a href='https://facebook.com' target="_blank" className='footer__socials__facebook'>
                <i className="fab fa-facebook-square"></i>
                <div className='footer__socials__label'>Facebook</div>
            </a>
            <a href='https://twitter.com' target="_blank" className='footer__socials__twitter'>
                <i className="fab fa-twitter-square"></i>
                <div className='footer__socials__label'>Twitter</div>
            </a>
            <a href='https://instagram.com' target="_blank" className='footer__socials__instagram'>
                <i className="fab fa-instagram"></i>
                <div className='footer__socials__label'>Instagram</div>
            </a>
        </div>
    </footer>
   );
}