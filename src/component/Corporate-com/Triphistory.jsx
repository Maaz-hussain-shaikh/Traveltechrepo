import React from 'react'
import Partners from './Partners'

const Triphistory = () => {
    return (
        <>
        <div className="bg-white py-24 sm:py-32 jCihag">

            <div className="flex flex-col sm:flex-wrap h-content">
                <section className="w-full mt-8 sm:mt-12">
                    <div className="flex items-center flex-col flex-shrink-0 sm:flex-row">
                        <div className="flex-shrink-0 w-full h-56 max-w-2xl overflow-hidden rounded-lg rounded-b-none sm:h-96 cursor-zoom-in bg-subtitle sm:rounded-b-lg">
                            <img
                                src="https://img.cdn.zostel.com/zostel/gallery/images/wG6BLt-5Rxu9d7gG6BpPWw/zostel-jim-corbett-20230622043309.jpg"
                                alt="Zostel Jim Corbett"
                                className="w-full h-full object-cover object-center cursor-zoom-in"
                            />
                        </div>
                        <div className="flex flex-col items-start relative flex-grow p-6  border rounded-lg rounded-t-none shadow-md sm:text-left sm:rounded-t-lg bg-light sm:-ml-12">
                            <div className="flex flex-col flex-grow text-text">
                                <span className="text-sm font-semibold tracking-wide uppercase sm:text-base text-subtitle">zostel</span>
                                <span className="block text-2xl font-bold sm:text-3xl text-dark">Zostel Jim Corbett</span>
                                <span className="my-2 font-medium">Just a 20-min drive from Ramnagar, Zostel invites you to try a unique Jim Corbett stay experience. Awaiting you here are exceptional outdoors, fragrant mango groves, an effervescent vibe, and fun galore</span>
                            </div>
                            <div className="flex items-center justify-between flex-col w-full mt-6 sm:flex-row">
                                
                                <div className="sc-bc080d9d-5 iyAsbr">
                <div className="dGGiAq">

                    <i className="fa-solid fa-location-dot"></i>
                    <div className="fediun"><h4 className="text-white text-sm">Location</h4><p className="text-sm text-white font-semibold">Japan</p></div></div><div className="dGGiAq">
                    <i className="fa-regular fa-user"></i>
                    <div className="fediun"><h4 className="text-white text-sm">No. of People</h4>
                        <p className="text-sm text-white font-semibold">200+ Peoples</p>
                    </div>
                </div>
            </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
           
            <Partners />
        </>
    )
}

export default Triphistory
