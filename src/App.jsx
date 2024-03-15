
import './App.css'

import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import DestinationCard from './Components/destinationCards/DestinationCard'
import Footer from './Components/Footer/Footer'
import AboutUs from './Components/AboutUs/AboutUs'

function App() {
 

  return (
    <>
     <Navbar/>
     
    <Header/> 
    <DestinationCard/>
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default App
