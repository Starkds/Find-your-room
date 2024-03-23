import React from 'react'  
import Header from '../Header/Header.jsx'
import DestinationCard from '../destinationCards/DestinationCard.jsx'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>

    <Link className='Home' to="/" >
    <Header/> 
    <DestinationCard/>
    </Link>
       
    </>
  )
}

export default Home