import React, { useState, useEffect } from 'react';
import { Maindetailsdata } from '../../Data/CardDetails';
import Tripinformation from "../MainPage-com/Tripinformation";
import { useParams } from 'react-router-dom';
import Loader from '../../Loader';
import Underconstruction from "../../Underconstruction"
import { Helmet } from 'react-helmet';

const Tripdetails = () => {
  const { info } = useParams();
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    setSelectedTrip(info);
    window.scrollTo(0, 0);
  }, [info]);

  return (
    <>
    <Helmet>
    <title>Traveltech - Your Ultimate Travel Companion in India</title>
        <meta name="description" content="Discover Traveltech, your trusted partner for travel packages, road trips, trekking expeditions, and more across India." />
        <meta name="keywords" content="travel packages,Pachmarhi,Kerala,goa,kashmir package,Udaipur,Manali,Ladakh,Group trip,bike trip,honeymoon trip,family trip,friends,makemytrip,Adventure,fun,indore trip, road trips, trekking expeditions, corporate trips, sustainable travel" />
        <link rel="canonical" href="https://travelltech.com/" />
   
    </Helmet>
    
      {selectedTrip ? (
        Maindetailsdata[selectedTrip]?.info ? (
          <Tripinformation Data={Maindetailsdata[selectedTrip].info} />
        ) : (
      <><Underconstruction/></>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Tripdetails;
