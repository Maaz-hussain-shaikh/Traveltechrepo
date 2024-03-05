import React from 'react';
import Itdropcom from './Itdropcom';

const Itdropdown = (porps) => {
  return (
    <>
      <div class="flex flex-col mt-6 space-y-6">
        {
          porps.info.map((item,index)=>{
            return(<Itdropcom Day={index} Schedule={porps.info[index].Schedule} Heading={porps.info[index].Heading}/> )

          })
        }
               
      </div>
    </>
  )
}

export default Itdropdown
