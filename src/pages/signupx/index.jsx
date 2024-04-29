import React from 'react';

export default function Signupx () {
  return (
    <div className="container">

      <img src="/SignUp2.jpg"/>

  
        <input type='text' className="singupname" placeholder='Name'></input>
        <input type='text' className="signuplastname" placeholder='Last Name'></input>
        <input type='text' className="signupemail"placeholder='Email'></input>
        <input type='text' className="signuppassword" placeholder='Password'></input>
        <a href="#" className="signupsignupbutton">SIGN UP</a>
        <a href="../login" className="signuploginbutton">LOGIN</a>

      </div> 
      
    
  );
}
