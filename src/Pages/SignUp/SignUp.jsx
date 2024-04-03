import React from 'react'
import './SignUp.scss'
import { FcGoogle } from "react-icons/fc";


function SignUp() {
  return (
    <form>
<div className='SignUp-Box'>

  <h2>SignUp Here</h2>

<div className='SignUp-field'>
  
  <div className='tags'>
  <label> Name :</label>
  <input type='text' placeholder='' />
  </div>

  <div className='tags'>
  <label> Password :</label>
  <input type='password' placeholder='' />
  </div>
  
  
  <div className='tags'>
  <label> Mobile :</label>
  <input type='number' placeholder='' />
  </div>

  <div className='tags'>
  <label> Email :</label>
  <input type='text' placeholder='' />

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