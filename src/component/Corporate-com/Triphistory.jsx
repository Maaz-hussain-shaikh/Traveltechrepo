import React from 'react'
import Partners from './Partners'

const Triphistory = () => {
    return (
        <>
            <div className="bg-white py-24  jCihag">

                <div className="flex flex-col sm:flex-wrap h-content">
                    <section className="w-full mt-6 sm:mt-12">
                        <div className="flex items-center flex-col flex-shrink-0 sm:flex-row">
                            <div className="flex-shrink-0 w-full h-56 max-w-2xl overflow-hidden rounded-lg rounded-b-none sm:h-96 cursor-zoom-in bg-subtitle sm:rounded-b-lg">
                                <img
                                    src="images\staticimg\Kashmirgroup-min.jpg"
                                    alt="Kashmir group"
                                    loading='lazy'
                                    className="w-full h-full object-cover object-center cursor-zoom-in"
                                />
                            </div>
                            <div className="flex flex-col items-start relative flex-grow p-6  border rounded-lg rounded-t-none shadow-md sm:text-left sm:rounded-t-lg bg-light sm:-ml-12">
                                <div className="flex flex-col flex-grow text-text">
                                    <span className="text-sm font-semibold tracking-wide uppercase sm:text-base text-subtitle">JLU college</span>
                                    <span className="block text-2xl font-bold sm:text-3xl text-dark">A College Trip to Kashmir</span>
                                    <span className="my-2 text-sm">In the bustling halls of JLU University, where the air was thick with excitement and the promise of new experiences, a group of students found themselves dreaming of adventure. They longed for a journey that would take them beyond the confines of textbooks and lecture halls, to places where memories were made and friendships were forged.</span>
                                </div>
                                <div className="flex items-center justify-between flex-col w-full sm:flex-row">

                                    <div className="sc-bc080d9d-5 iyAsbr">
                                        <div className="dGGiAq">

                                            <i className="fa-solid fa-location-dot"></i>
                                            <div className="fediun"><h4 className="text-white text-sm">Location</h4><p className="text-sm text-white font-semibold">Kashmir</p></div></div><div className="dGGiAq">
                                            <i className="fa-regular fa-user"></i>
                                            <div className="fediun"><h4 className="text-white text-sm">No. of People</h4>
                                                <p className="text-sm text-white font-semibold">45+ Peoples</p>
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
