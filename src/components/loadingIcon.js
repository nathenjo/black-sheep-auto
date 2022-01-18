import React, { useState } from 'react';

export default function LoadingIcon(props){
  const {className} = props;
   return(
     <div className={`loading ${className}`}>
      <img
        src='https://cdn-icons-png.flaticon.com/512/349/349749.png'
        width={80}
      />
      Loading
    </div>
   );
}