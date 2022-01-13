import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './navbar';
import Home from './pages/home';
import Contact from './pages/contact';
import Appointments from './pages/appointments';
import Merch from './pages/merch';
import NoRoute from './pages/noRoute';
import HeaderLogo from './headerLogo';

export default function App() {

  const [adminLogin, setAdminLogin] = useState(false);

    return (
      <div className='app'>
        <NavBar adminLogin={adminLogin} />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/appointments" component={Appointments} />
            <Route path="/merch" component={Merch} />
            <Route component={NoRoute} />
          </Switch>
        </Router>
      </div>
    );
}
