import React, {  useState,useEffect } from 'react'
import BolgeDetails from './BolgeDetails'
import Bloge from '../../Data/Bloge/Bloge';
import { useParams } from 'react-router-dom';

const Blogeroute = () => {
  const {content} = useParams();
  const [selectedTrip, setSelectedTrip] = useState(null);
    
  useEffect(() => { 
  
   setSelectedTrip(content)
   }, [content]); 
    
  return (
    <>
    
      {selectedTrip ? (
        Bloge[selectedTrip]?.information ? (
          <BolgeDetails data={Bloge[selectedTrip].information} />
        ) : (
          <>Info not available</>
        )
      ) : (
        <>No trip loder</>
      )}
 
     
    </>
  )
}

export default Blogeroute
