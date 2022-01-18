import React, { useState } from 'react';

export default function LoadingIcon(props){
  const {className} = props;
   return(
    <img
      src=''
      className={`loading ${className}`}
      width={80}
    />
   );
}