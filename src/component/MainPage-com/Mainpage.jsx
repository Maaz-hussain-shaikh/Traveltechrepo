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
import { Helmet } from 'react-helmet'

const Mainpage = () => {
  
  return (
    <>
    <Helmet>
    <title>Traveltech - Your Ultimate Travel Companion in India</title>
        <meta name="description" content="Discover Traveltech, your trusted partner for travel packages, road trips, trekking expeditions, and more across India." />
        <meta name="keywords" content="travel packages,Pachmarhi,Kerala,goa,kashmir package,Udaipur,Manali,Ladakh,Group trip,bike trip,honeymoon trip,family trip,friends,makemytrip,Adventure,fun,indore trip, road trips, trekking expeditions, corporate trips, sustainable travel" />
        <link rel="canonical" href="https://travelltech.com/" />
    </Helmet>
    
      <Header/>
      <Tripbutton/>
      <Destinationcards/> 
      <Adsection imgsrc="images/honyemoonad.png" mobsrc="images/honyemoonad.png" path="/" />     
      <Honeymoon/>      
      <About/>
      <Youtube/>
      <Review/>
      <Costomercare/>
    </>
  )
}

export default Mainpage
