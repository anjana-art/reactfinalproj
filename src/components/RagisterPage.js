import React, { useState } from "react";
import { Link } from "react-router-dom";
//import firebase from "../firebaseConfig";

function RagisterPage() {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    confemail: "",
    pswrd: "",
    confpswrd: "",
    dateofbirth: "",
  });

  const handleChange = (e) => {
    const{name, value} = e.target;
   
    setDetails((prev) => {
      return { ...prev , [name] : value};
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(details);
  }


  const submit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="header">
        <h2>Sign Up</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          ></input>
          <br /> <br />
          <input
            type="email"
            placeholder="Email@gmail.com"
            name="email"
            onChange={handleChange}
          ></input>
          <br /> <br />
          <input
            type="email"
            placeholder="Email@gmail.com"
            name="confemail"
            onChange={handleChange}
          ></input>
          <br /> <br />
          <input
            type="password"
            placeholder="password"
            name="pswrd"
            onChange={handleChange}
          ></input>
          <br /> <br />
          <input
            type="password"
            placeholder="confirm password"
            name="confpswrd"
            onChange={handleChange}
          ></input>
          <br /> <br />
          <input
            type="date"
            placeholder="date of birth"
            name="dateofbirth"
            onChange={handleChange}
          ></input>
          <br /> <br />
          <button>Cancel</button> <button type="submit">Create</button>
          <p>
            Already have an Account?<Link to="/Loginpage">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RagisterPage;
