import React, { useEffect, useState } from 'react';
import YellowWoodLogo from '../../static/assets/logos/drive-download-20220111T233455Z-001/yelow-wood.jpg';
import NavBar from './navbar';

export default function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [imageWidth, setImageWidth] = useState(400);

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
      setImageWidth(400)
    }
  }
    return (
      <div className='app'>
        <img className='app__header-logo' src={YellowWoodLogo} width={imageWidth} />
        <NavBar />
      </div>
    );
}
