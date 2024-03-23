 
import React from 'react';
import { Link } from 'react-router-dom';

import './PlaceCard.scss';

function PlaceCard(props) {
  return (
    <Link className='Cards' to="/Placedetails">
      <div className='Place-image'>
        <img src={props.img} alt={props.name} />
      </div>

      <div className='Place-details'>
        <h2 className='Place-name'>{props.name}</h2>
        <p className='description'>{props.description}</p>
        <div className='Place-price'>{props.price}</div>
      </div>
    </Link>
  );
}

export default PlaceCard; 
