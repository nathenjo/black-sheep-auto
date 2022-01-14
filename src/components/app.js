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

export default function App() {

  const [adminLogin, setAdminLogin] = useState(true); //TODO change to false before deployment

    return (
      <div className='app'>
        <BrowserRouter>
        <NavBar adminLogin={adminLogin} />
        <Routes>
          <Route path='/' element={<Home adminLogin={adminLogin} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
}
