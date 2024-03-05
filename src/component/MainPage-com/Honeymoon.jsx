import React, { useState } from 'react'
import Tripcard from './Tripcard'
import {Honymooncards} from "../../Data/CardDetails"
import { Link } from 'react-router-dom'

const Honeymoon = () => {
  const [current, upcard] = useState(Honymooncards)
   
  return (
    <>
    
   
      <h1 class="mt-10 text-2xl font-black text-orange-600 sm:text-4xl"><span class="jCihag"><span>| </span>Honeymoon Destinations</span></h1>
      <Tripcard title="Trending Trips" data={current} />
    </>
  )
}

export default Honeymoon
