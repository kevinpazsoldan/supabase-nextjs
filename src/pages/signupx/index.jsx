import React from 'react';

export default function Signupx () {
  return (

    <div class="container">

      <img src="/SignUp2.jpg" alt="Login Background Image"/>

      <div class="form-container">

        <input type='text' class="singupname" placeholder='Name'/>
        <input type='text' class="signuplastname" placeholder='Last Name'/>
        <input type='email' class="signupemail" placeholder='Email'/>
        <input type='password' class="signuppassword" placeholder='Password'/>
        <button href="#" class="signupsignupbutton">SIGN UP</button>
        <a href="../login" class="signuploginbutton">LOGIN</a>
        
      </div>

    </div>
 
      
  );
}
