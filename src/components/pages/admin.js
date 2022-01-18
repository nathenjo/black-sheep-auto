import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as credentials from '../../adminCredentials';

export default function Admin(props){
  const navigate = useNavigate();
  const {adminUsername, adminPassword} = credentials;
  const {setAdminLogin} = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setFormSubmitted(false);
  }, [])

  useEffect(() => {
    setUsernameError(false);
    setPasswordError(false);
  }, [username, password])

  const resetUsernameValue = () => {
    if (formSubmitted) {
      setUsername('')
    }
  }

  const resetPasswordValue = () => {
    if (formSubmitted) {
      setPassword('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (adminUsername === username && adminPassword === password) {
      setAdminLogin(true);
      navigate('/');
    } else if(adminUsername != username && adminPassword != password) {
      setUsernameError(true);
      setPasswordError(true);
    } else if(adminUsername != username) {
      setUsernameError(true);
    } else if(adminPassword != password) {
      setPasswordError(true);
    }
  }

   return(
     <div className='admin'>
       <form className='admin__form' onSubmit={handleSubmit}>
          <label className='admin__form__label'>Username</label>
          <input
            onClick={resetUsernameValue}
            className='admin__form__input'
            type='username'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className='admin__form__label'>Password</label>
          <input
            onClick={resetPasswordValue}
            className='admin__form__input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
           <button className='admin__form__button' type='submit'>Login</button>
       </form>
       {usernameError ? <div className='admin__login-error'>Username is incorrect, try again</div> : null}
       {passwordError ? <div className='admin__login-error'>Password is incorrect, try again</div> : null}
     </div>
   );
}