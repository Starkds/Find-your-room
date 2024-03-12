import React from 'react'
import './Placedetail.scss'
function Placedetail(props) {
  return (
    <>
      <div className='Cards'>
        <div className='Place-image'>
        <img src={props.img}/>
         </div>

         <div className='Place-details'>

         <h2 className='Place-name'>{props.name}</h2>
          <p className='description'>{props.description}</p>
          
         <div className='Place-price'>{props.price}</div> 
         </div>
      </div>
    </>
  )
}

export default Placedetail