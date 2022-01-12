import React, { useEffect, useState } from 'react';
import PngLogo from '../../static/assets/logos/drive-download-20220111T233455Z-001/1.png';
import NavBar from './navbar';

export default function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [imageWidth, setImageWidth] = useState(600);

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
        <NavBar />
      </div>
    );
}
