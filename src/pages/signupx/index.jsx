import React from 'react';

export default function Signupx () {
  return (
    <div className="container">

      <img src="/SignUp2.jpg"/>

      <div className="wrapper">
        <div className="input-data"></div>
        <input type='text' className="singupname" placeholder='Name'></input>
        </div>  

        


        <input type='text' className="lastname"></input>
        <input type='text' className="email"></input>
        <input type='text' className="password"></input>
        <a href="../home" className="button3">CANCEL</a>
        <a href="#" className="button4">SIGN UP</a>

      </div> 
      
    
  );
}
