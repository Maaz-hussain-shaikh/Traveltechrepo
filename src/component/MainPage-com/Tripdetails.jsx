import React, { useState,useEffect } from 'react';

import { Cardfirst } from '../../Data/CardDetails';
import Tripinformation from "../MainPage-com/Tripinformation";
import { useParams } from 'react-router-dom';
import Loader from '../../Loader';

const Tripdetails = () => {  
  const {info} = useParams();
  
  const [selectedTrip, setSelectedTrip] = useState(null);
    
  useEffect(() => {   
   setSelectedTrip(info); 
   window.scrollTo(0, 0);  
   }, [info]); 
    
  return (
    <>
    {selectedTrip ? (
        Cardfirst[selectedTrip]?.info ? (
          <Tripinformation Data={Cardfirst[selectedTrip].info} />
         
        ) : (
          <>Something is worng in your pdf file or routing code please check</>
        )
      ) : (
        <Loader/>
      )}
 
     
     
    </>
  );
};
export default Tripdetails
