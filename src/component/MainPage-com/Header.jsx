import React from 'react'
import "./mainpage.css"

import Adsection from './Adsection'



const Header = () => {
  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto mttop  h-98 sm:h-144 ">
        <div className="relative w-full h-full ">
          <div className="grid grid-cols-4 grid-rows-3 gap-1 rounded-lg overflow-hidden w-full h-full">
            <div className="w-full h-full row-span-3 col-span-6  fade-expand-appear-done fade-expand-enter-done">
              <img src="images\home-bg-1.jpg" alt="Tawang city" className="object-cover object-center w-full rounded-b-lg shadow-md sm:rounded-t-lg h-108 sm:h-144 2xl:192" />
            </div>

          </div>
        </div>
      </div>



      <section className="bg-orange  max-w-4xl mx-auto mttop -mt-32 relative z-30 rounded-lg">
        <section className="max-w-screen-xl w-full mx-auto py-12 px-2">
          <section className="w-full grid gap-1 grid-cols-2 sm:grid-cols-5">
            <div className="flex flex-col items-center">
              <div className="flex items-baseline">
              <i className="fa-solid fa-person-walking-luggage text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white"></i>
                <span className="text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white font-bold">75+</span>
              </div>
              <span className="text-white sm:text-lg font-semibold mt-4">Hostels &amp; Homes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-baseline">
              <i className="fa-solid fa-map-location-dot text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white"></i>
                <span className="text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white font-bold">25+</span>
              </div>
              <span className="text-white sm:text-lg font-semibold mt-4">Regions Unlocked</span>
            </div>
            <div className="flex flex-col items-center mt-8 sm:mt-0">
              <div className="flex items-baseline">
              <i className="fa-solid fa-person-walking-luggage text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white"></i>
                <span className="text-3xl ml-2 sm:ml-4 sm:text-3xl font-bold font-black text-white">100<span className="text-2xl sm:text-4xl">k+</span>
                </span>
              </div>
              <span className="text-white sm:text-lg font-semibold mt-3">Travellers Hosted</span>
            </div>
            <div className="flex flex-col items-center mt-8 sm:mt-0">
              <div className="flex items-baseline"><i className="fa-regular fa-thumbs-up text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white"></i>
                <span className="text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white font-bold">4.5<span className="text-2xl">/5</span>
                </span>
              </div>
              <span className="text-white sm:text-lg font-semibold mt-4">Average Rating</span>
            </div>
            <div className="flex flex-col items-center mt-8 sm:mt-0 col-span-2 sm:col-span-1">
              <div className="flex items-baseline">
              <i className="fa-solid fa-icons text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white"></i>
                <span className="text-3xl ml-2 sm:ml-4 sm:text-3xl font-black text-white font-bold">20k+</span>
              </div>
              <span className="text-white sm:text-lg font-semibold mt-4">Social Community</span>
            </div>
          </section>
        </section>
        
      </section>
      <Adsection imgsrc="images/Firstpageimgs/Adtemp.png"/>
      
    </>
  )
}

export default Header
