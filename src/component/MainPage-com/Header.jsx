import React, { useState } from 'react'
import "./mainpage.css"

import Ranking from './Ranking'



const Header = () => {
  const [selectedTab, setSelectedTab] = useState('plus');

  const handleTabChange = (value) => {
    setSelectedTab(value);
    if (value === "Group") {
      window.scrollTo(0, 400);

    } if (value === "Honymoon") {
      window.scrollTo(0, 2100);
    } if (value === "Own") {
      window.scrollTo(0, 1000);
    } else {

    }
  };
  return (

    <>
      <div className="max-w-screen-xl w-full mx-auto mttop  h-98 sm:h-144 ">
        <div className="relative w-full h-full ">
          <div className="grid grid-cols-4 grid-rows-3 gap-1 rounded-lg overflow-hidden w-full h-full">
            <div className="w-full h-full row-span-3 col-span-6  fade-expand-appear-done fade-expand-enter-done">
              <img src="images\home-bg-1.jpg" alt="Travel Tech India" className="object-cover object-center w-full rounded-b-lg shadow-md sm:rounded-t-lg h-108 sm:h-144 2xl:192" fetchpriority="high" />
            </div>

          </div>
        </div>
      </div>




      <section className="max-w-screen-xl w-full mx-auto flex flex-col items-center flex-shrink-0 w-full  ">
        <div className="flex flex-col items-center w-full max-w-5xl px-4 scroll-hidden sm:hidden">


          <div className="flex dsb flex-col w-full items-center sm:items-end sm:flex-row  rounded-b-lg sm:p-8  border-t-2 shadow-lg">

            <div className="flex items-end w-full sm:w-1/3 sm:mr-2 flex-shrink-0  relative -mt-16 sm:mt-0">

              <div className="grid flex-no-wrap w-full grid-cols-2 grid-rows-3 overflow-auto rounded-t-lg  sm:hidden">
                <label className=" w-full sm:w-auto flex items-center justify-center cursor-pointer col-span-2 border-b-2 bg-orange-600">



                  <div className=" flex-shrink-1 relative z-2 text-white text-center mr-4">

                    <div className="flex items-baseline">
                      <i className="fa-solid fa-icons  font-black text-white mr-2 "></i>
                      <span className=" font-bold font-black text-white">20k+
                      </span>
                    </div>
                    <span className="text-white text-sm font-semibold ">Community</span>
                  </div>
                  <div className=" flex-shrink-1 relative z-2 text-white mr-4 text-center">

                    <div className="flex items-baseline">
                      <i className="fa-regular fa-thumbs-up  font-black text-white mr-1 "></i>
                      <span className=" font-bold font-black text-white">4.5/5
                      </span>
                    </div>
                    <span className="text-white text-sm font-semibold ">Rating</span>
                  </div>
                  <div className=" flex-shrink-1 relative z-2 text-white mr-4 text-center">

                    <div className="flex items-baseline ">
                      <i className="fa-solid fa-person-walking-luggage  font-black text-white mr-1 "></i>
                      <span className=" font-bold font-black text-white">10k+
                      </span>
                    </div>
                    <span className="text-white text-sm  font-semibold ">User</span>
                  </div>

                  <div className=" flex-shrink-1 relative z-2 text-white  text-center">

                    <div className="flex items-baseline">
                      <i className="fa-solid fa-map-location-dot  font-black text-white mr-2 "></i>
                      <span className=" font-bold font-black text-white">25+
                      </span>
                    </div>
                    <span className="text-white text-sm font-semibold ">Destination</span>
                  </div>

                </label>

                <label className="p-3 w-full sm:w-auto flex items-center justify-between cursor-pointer row-start-2 border-b-2 border-r-2">
                  <span className="font-semibold text-sm sm:text-base uppercase tracking-wide flex-shrink-1 text-gray-700" onClick={() => handleTabChange('Group')}>Group Trips</span>
                  <input type="radio" name="tab" className="hidden" value="Group" checked={selectedTab === 'Group'} onChange={() => handleTabChange('Group')} />
                  <span className="flex items-center justify-center w-4 h-4 p-1 border border-gray-400 rounded-full"></span>
                </label>
                <label className="p-3 w-full sm:w-auto flex items-center justify-between cursor-pointer row-start-2 border-b-2 border-r-2">
                  <span className="font-semibold text-sm sm:text-base uppercase tracking-wide flex-shrink-1 text-gray-700" onClick={() => handleTabChange('plus')}>Global Trips</span>
                  <input type="radio" name="tab" className="hidden" value="plus" checked={selectedTab === 'plus'} onChange={() => handleTabChange('plus')} />
                  <span className="flex items-center justify-center w-4 h-4 p-1 border border-gray-400 rounded-full"></span>
                </label>
                <label className="p-3 w-full sm:w-auto flex items-center justify-between cursor-pointer row-start-3 border-r-2">
                  <span className="font-semibold text-sm sm:text-base uppercase tracking-wide flex-shrink-1 text-gray-700" onClick={() => handleTabChange('Honymoon')}>Honeymoon Trips</span>
                  <input type="radio" name="tab" className="hidden" value="Honymoon" checked={selectedTab === 'Honymoon'} onChange={() => handleTabChange('Honymoon')} />
                  <span className="flex items-center justify-center w-4 h-4 p-1 border border-gray-400 rounded-full"></span>
                </label>
                <label className="p-3 w-full sm:w-auto flex items-center justify-between cursor-pointer row-start-3 border-r-2">
                  <span className="font-semibold text-sm sm:text-base uppercase tracking-wide flex-shrink-1 text-gray-700" onClick={() => handleTabChange('Own')}>Plan your <br />Own Trip</span>
                  <input type="radio" name="tab" className="hidden" value="Own" checked={selectedTab === 'Own'} onChange={() => handleTabChange('Own')} />
                  <span className="flex items-center justify-center w-4 h-4 p-1 border border-gray-400 rounded-full"></span>
                </label>

              </div>

            </div>

          </div>
        </div>
      </section>





      <div className="mob-hide">

        <Ranking />
      </div>


    </>
  )
}

export default Header
