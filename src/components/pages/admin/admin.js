import React, { useState, useEffect } from 'react';

import AdminForm from './adminForm';
import AdminStatus from './adminStatus';

export default function Admin(props){
  const {adminLogin, setAdminLogin} = props;



  const renderContent = () => {
    if(adminLogin) {
      return <AdminStatus />
    } else {
      return <AdminForm setAdminLogin={setAdminLogin} />
    }
  }

   return(
     <div className='admin'>
       {renderContent()}
     </div>
   );
}