import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PngLogo from '../../static/assets/logos/drive-download-20220111T233455Z-001/1.png';
import NavBar from './navbar';
import Home from './pages/home';
import NoRoute from './pages/noRoute';

export default function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [imageWidth, setImageWidth] = useState(600);
  const [adminLogin, setAdminLogin] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize)
    imageSize()
  }, [screenSize])

  const handleScreenSize = () => {
    setScreenSize(window.innerWidth)
  }

  const imageSize = () => {
    if (screenSize < 600) {
      setImageWidth(screenSize)
    } else {
      setImageWidth(600)
    }
  }
    return (
      <div className='app'>
        <img className='app__header-logo' src={PngLogo} width={imageWidth} />
        <NavBar adminLogin={adminLogin} />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoRoute} />
          </Switch>
        </Router>
      </div>
    );
}
