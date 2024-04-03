import React from "react";
import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {

  const [email, setEmail]= useState('');
  const [password,setPassword]= useState('');
  
   
  const formhandler = (event) =>{
    event.preventDefault();

    console.log("form submitted" , {email, password});


    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={formhandler}>
      <div className="Login-Box">
        <h2>Login Here</h2>

        <div className="Login-field">
          <div className="field">
            <label htmlFor="Email"> Email :</label>
            <input type="text" id="name" value={email}  onChange = {(e) => setEmail(e.target.value)}  required/>
          </div>

          <div className="field">
            <label htmlFor="Password"> Password :</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>

        <div className="Login-Button">
          <button>Submit</button>
        </div>

        <div className="Separate-line">
          <h2>Or</h2>
        </div>

        <div className="Login-Link">
          <div className="Google">
            <FcGoogle /> SignUp with Google
          </div>
        </div>

        <div className="signUp-Link">
          Don't have account
          <Link to="/SignUp">signUp Here</Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
