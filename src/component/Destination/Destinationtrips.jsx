import React from 'react'
import { useNavigate } from 'react-router-dom'

const Destinationtrips = ({ image, title, startingPrice,btn,days,tag }) => {
  const locate=useNavigate();
  return (
    
    <>
<div className="flex flex-wrap justify-center mt-4">
  <section className="max-w-sm mx-1 my-1 rounded-lg shadow-xl">
    <div className="flex flex-col items-center sm:w-80 ">
      <div className="relative w-full">
        <img src={image} alt="" className="w-full h-36 sm:h-40  rounded-t-lg" />
        <div className="absolute top-0 right-0 p-2 text-xs font-bold text-white bg-orange-600 rounded-md">
          <span>{tag}</span>
        </div>
      </div>
      <div className="flex flex-col w-full h-46 p-2 bg-white rounded-b-lg">
        <div className="flex-1">
          <div className="w-30 sm:w-full sm:text-lg  text-sm font-bold text-black line-clamp-2 ">
            <p>{title}</p>
          </div>
          
        </div>
        <div className="flex items-center mt-2 justify-between">
          <div className="mr-2 text-sm">₹ {startingPrice} per person</div>
        </div>
        <div className="flex items-center mt-1 justify-between">
          <div className="flex items-center text-sm">
            <i className="fa-regular fa-clock"></i>
            <span className="ml-2 text-xm">{days} Days</span>
          </div>
        </div>
        <button className="flex items-center justify-start  rounded-lg font-medium leading-none bg-orange-600 active:border-orange text-white py-2 sm:py-3 px-4 text-base border focus:outline-none transition ease-in-out duration-100 disabled:cursor-not-allowed disabled:bg-accent disabled:text-subtitle w-full mt-2" type="button" onClick={()=>{locate(btn)}}>
          <span className="flex-1 whitespace-no-wrap sm:text-lg text-sm">Explore Now</span>
        </button>
      </div>
    </div>
  </section>

  {/* Second Card */}
  
    {/* Repeat the same structure for the second card */}
  
</div>
    </>
  )
}

export default Destinationtrips
