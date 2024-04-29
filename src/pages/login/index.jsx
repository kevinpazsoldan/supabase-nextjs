import React from 'react';

export default function Login () {
  return (
    <div className="container">

      <img src="/LogIn2.jpg"/>

        <input type='text' className="email"placeholder='Email'></input>
        <input type='text' className="password" placeholder='Password'></input>
        <a href="../home" className="button3">CANCEL</a>
        <a href="#" className="button4">LOGIN</a>

    </div> 
      
    
  );
}