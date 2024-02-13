import React, { useEffect } from 'react';

import Cookie from 'js-cookie'
import { useNavigate } from 'react-router-dom';



export default function Admin() {

 
  const navigate = useNavigate();

  useEffect(() => {

    if(Cookie.get("xyz")==null) {
    navigate("/loginpage");
    }
  
  },[])

  function logouthandle() {
      Cookie.remove("xyz")
      navigate("/loginpage")
      
  }

  return (
    <>
      <h1>Admin Page</h1>
      <h2>{Cookie.get('xyz')}</h2>

      <button onClick={logouthandle}>Logout</button>
    </>
  );
}
