import React from 'react'
import Header from './Header'
import Tripbutton from './Tripbutton'
import About from './About'
import Youtube from './Youtube'
import Review from './Review'
import Costomercare from './Costomercare'
import Honeymoon from './Honeymoon'
import Destinationcards from './Destinationcards'
import Adsection from './Adsection'

const Mainpage = () => {
  
  return (
    <>
      <Header/>
      <Adsection imgsrc="images/Leh-ad.png" /> 
      <Tripbutton/>
      <Destinationcards/> 
      <Adsection imgsrc="images/honyemoonad.png" />     
      <Honeymoon/>      
      <About/>
      <Youtube/>
      <Review/>
      <Costomercare/>
    </>
  )
}

export default Mainpage
