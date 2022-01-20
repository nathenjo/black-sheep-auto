import React, { useEffect, useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavBar from './navbar';
import Home from './pages/home';
import Contact from './pages/contact';
import Appointments from './pages/appointments';
import Merch from './pages/merch';
import NoRoute from './pages/noRoute';
import Footer from './footer';
import Admin from './pages/admin';

export default function App() {

  const [adminLogin, setAdminLogin] = useState(true); //TODO set to false

    return (
      <div className='app'>
        <BrowserRouter>
        <NavBar adminLogin={adminLogin} />
        {adminLogin ? <div className='app__admin-header'>Logged in as Admin</div> : null}
        <Routes>
          <Route path='/' element={<Home adminLogin={adminLogin} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin setAdminLogin={setAdminLogin} />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>
        <Footer className='app__footer' />
      </BrowserRouter>
      </div>
    );
}
