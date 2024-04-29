import React from 'react';

export default function Login () {
  return (
    <div className="container">

      <img src="/LogIn2.jpg"/>

        <input type='text' className="loginemail"placeholder='Email'></input>
        <input type='password' className="loginpassword" placeholder='Password'></input>
        <a href="#" className="loginlogin">LOGIN</a>
        <a href="../home" className="logincancel">CANCEL</a>
    
    </div> 
      
    
  );
}