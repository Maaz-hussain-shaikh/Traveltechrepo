import React from 'react'

const Worrior = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">

        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our WARRIORS </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  who have helped us build this holistic community
                </p>
              </div>
            </div>
          </div>
          <div className="ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="flex items-center justify-center">
              <div className="px-3">
                <img className="object-cover w-40 h-40 rounded shadow-lg  sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="images\staticimg\Captain.png" alt="captain" />
              </div>
              <div className="flex flex-col items-end px-3">
                <img className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56" src="images\staticimg\Driver.png" alt="driver" />
                <img className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="images\staticimg\Vander.png" alt="vander" />
              </div>

            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">



                <h2 className=" text-xl font-bold tracking-tight text-gray-900">Trip Captains :</h2>
                <p className="mt-2">
                  <span>
                    Our trip captains are nothing short of heroes. Brave, dynamic, and great leaders, they’re certainly the showrunners of the community trips. They’ve been handpicked from India’s best travel institutes, and know all tricks of trade to lead and manage all kinds of trips, including all backpaking trips.
                  </span>
                </p>
                <h2 className=" text-xl font-bold tracking-tight text-gray-900">Local Vendors :</h2>
                <p className="mt-2">
                  <span>
                    Being the bridge between the local vendors and the customers, we’re very selective about the former. After a rigorous recci, we’ve found the most kind and hospitable vendors, who make our travelers feel at home, even when they might be miles away from it. Over the period of time, we’ve managed to make a family-like relationship with our vendors, thus giving back to the local community in every way possible!
                  </span>
                </p>
                <h2 className=" text-xl font-bold tracking-tight text-gray-900">Transport Drivers :</h2>
                <p className="mt-2">
                  <span>
                    We understand the responsibility of taking utmost care of our travelers when they’re off to experience the toughest terrains of the country. Hence everything depends on the competency of our drivers. All the drivers at Travel tech are local professionals, who’ve been in practice since years, and we assure that they know all nooks and corners of the roads by heart!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Worrior
