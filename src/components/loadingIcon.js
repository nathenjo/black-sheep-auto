import React, { useState } from 'react';

export default function LoadingIcon(props){
  const {className} = props;
   return(
    <img
      src='https://cdn-icons-png.flaticon.com/512/349/349749.png'
      className={`loading ${className}`}
      width={80}
    />
   );
}