import React, { useState, useEffect } from 'react';

import PngLogo from '../../static/assets/logos/drive-download-20220111T233455Z-001/1.png';


export default function HeaderLogo(props){

    const {className} = props;
    
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

   return(
     <div className={`header-logo ${className}`}>
        <img src={PngLogo} width={imageWidth} />
     </div>
   );
}