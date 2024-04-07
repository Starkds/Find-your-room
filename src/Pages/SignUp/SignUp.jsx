import React from 'react'
import './SignUp.scss'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';

function SignUp() {

  const [name , setName] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const form3handler = (event) =>{
    event.preventDefault();

    console.log("you are signed in" , {name,password,mobile,email});

    setName('');
    setPassword('');
    setMobile('');
    setEmail('');
  };

  return (
    <form onSubmit={form3handler}>
<div className='SignUp-Box'>

  <h2>SignUp Here</h2>

<div className='SignUp-field'>
  
  <div className='tags'>
  <label htmlFor='Name'> Name :</label>
  <input type='text' id='name' value={name} onChange={(e) =>setName(e.target.value)} required/>
  </div>

  <div className='tags'>
  <label htmlFor='Password'> Password :</label>
  <input type='password' id='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
  </div>
  
  
  <div className='tags'>
  <label htmlFor='Mobile'> Mobile :</label>
  <input type='number' value={mobile} onChange={(e)=> setMobile(e.target.value)} required />
  </div>

  <div className='tags'>
  <label htmlFor='Email'> Email :</label>
  <input type='text' id='Email' value={email} onChange={(e) => setEmail(e.target.value) } />

  </div>
  
</div>

<div className='SignUp-Button'>
  <button>Submit</button>
</div>

 <div className='Separate-line'>
  <h2>Or</h2>
 </div>


<div className='SignUp-Link'>
  <div className='Google'>
   <FcGoogle/>     SignUp with Google
  </div>
</div>

</div>
    </form>
  )
}

export default SignUp