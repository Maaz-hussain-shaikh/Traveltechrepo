import React from 'react'
import { Link } from 'react-router-dom'

const Destinationtrips = ({ image, title, description, startingPrice,btn }) => {
    
  return (
    <>
       <section className="w-full">
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative flex-shrink-0 w-full h-56 bg-red-500 bg-center bg-no-repeat bg-cover rounded-lg" style={{ backgroundImage: `url("${image}")` }}>
          <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white rounded-md"><span>homes</span></div>
        </div>
        <div className="flex flex-col w-full p-4 transition-all duration-200 ease-in-out h-content">
          <span className="text-xl font-bold">{title}</span>
          <span className="mt-2 text-sm font-medium text-text line-clamp-2">{description}</span>
          <div className="flex items-center justify-between flex-row w-full mt-6 sm:flex-row">
            <span className="text-xl font-medium">Starting from <strong>{startingPrice}</strong></span>
            <Link className="flex items-center justify-start rounded-lg font-medium leading-none bg-orange active:border-orange text-white hover:text-orange hover:bg-white active:bg-gray-200 active:text-orange py-3 px-4 text-base border focus:outline-none transition ease-in-out duration-100 disabled:cursor-not-allowed disabled:bg-accent disabled:text-subtitle text-xs font-bold " to={btn}>
              <span className="flex-1 whitespace-no-wrap">View Details</span>
              
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Destinationtrips
