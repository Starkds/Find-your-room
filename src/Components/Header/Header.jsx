import React from 'react'
import "./Header.scss"
import { BsFillFilterSquareFill } from "react-icons/bs";
function Header() {
  return (
    <>
<div  className='Header'>

<button className="Filter">Filter      <BsFillFilterSquareFill/></button>
 <div className='Location-finder'>
   <ul>
    <li className='Destination'>
      <label>where</label>
      <input type='text' placeholder=''/>
    </li>
    
    <li className='Starting-date'>
    <label>to</label>
    <input type='text' placeholder=''/>
    </li>

    <li className="Ending-date">
    <label>from</label>
    <input type='text' placeholder=''/>
    </li>

    <li className='persons'>
      <label >person</label>
      <input type='number' placeholder=''/>
    </li>
   </ul>
 </div>


</div>
      
    </>
  )
}

export default Header