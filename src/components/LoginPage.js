import React from 'react'
import {useState} from "react"

function LoginPage(){
   const[user, setUsers] = useState({
    email: " ",
    password: ""
   });

   const handleChange = (e) => {
    const{name, value} = e.target;
   
    setUsers((prev) => {
      return { ...prev , [name] : value};
    });
  };

  function handleSubmit(e){
    e.preventDefault();
   
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input type='email' onChange={handleChange} placeholder='Email' name='email' /><br/><br/>
        <input type='password' onChange={handleChange} placeholder='*******' name='password'/><br/><br/>
        <button type='submit'>LogIn</button>
      </form>
    </div>
  )
}

export default LoginPage
