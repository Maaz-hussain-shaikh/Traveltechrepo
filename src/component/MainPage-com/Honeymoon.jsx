import React from 'react'
import { Honymooncards } from '../../Data/CardDetails'
import Tripcard from './Tripcard';

const Honeymoon = () => {
 
   
  return (
    <>
    
   
    <Tripcard title="Honeymoon Trip" data={Honymooncards} />
      
    </>
  )
}

export default Honeymoon
