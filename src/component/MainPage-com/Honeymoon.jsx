import React from 'react'
import Tripcard from './Tripcard'
import {Honymooncards} from "../../Data/CardDetails"


const Honeymoon = () => {
 
   
  return (
    <>
    
   
      <h1 className="mt-10 text-2xl font-black text-orange-600 font-bold sm:text-4xl"><span className="jCihag"><span>| </span>Honeymoon Destinations</span></h1>
      <Tripcard title="Trending Trips" data={Honymooncards} />
    </>
  )
}

export default Honeymoon
