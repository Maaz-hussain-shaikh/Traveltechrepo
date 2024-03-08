import React from 'react'
import { useState } from 'react'

const Brief = (props) => {
  const [show,setshow]=useState(false);
  return (
    <>
      <div className="flex flex-col w-full">
              <span className="self-start p-2 font-semibold tracking-wide uppercase border rounded-lg border-orange ">Trip</span>
              <h1 className="mt-2 mb-4 text-2xl font-black text-orange-600 sm:text-4xl">
                <span className="">{props.name}</span>
              </h1>
              <div>
                <div className="overflow-hidden html-content text-text leading-6 whitespace-pre-line" style={{ maxHeight: show?"100%":"108px" }}>
                  <p>{props.brief}</p>
                  <p>
                    <br />
                  </p>
                  <p>NOTE: Post booking confirmation, we will reach out to all booked participants via email 12 days prior to the commencement date of the trip with further information. A WhatsApp group will be made for all participants to connect and plan their travel together to the origin and destination points.</p>
                </div>
                <button className="text-sm font-medium focus:outline-none text-orange-600" onClick={()=>{setshow(!show)}}>Show more</button>
              </div>
            </div>
    </>
  )
}

export default Brief
