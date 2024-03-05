import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const About = () => {

    const link = useNavigate();
    const [pose, uppose] = useState(false)
    const imgstyle = {
        background: `url('images/img-8.png')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <>
            <div class="jCihag mb-4" >
                <div class="max-w-screen-xl w-full mx-auto">
                    <div class="flex items-stretch w-full flex-col sm:flex-row">
                        <div class="w-full h-72 sm:h-auto sm:w-1/2 bg-cover bg-no-repeat bg-center" style={imgstyle} >
                        </div>
                        <div class="w-full sm:w-1/2 flex flex-col py-8 sm:py-24 sm:pl-8 px-4 sm:px-0">
                            <span class="uppercase tracking-wide font-semibold text-gray-700 sm:text-lg">List Your Property for Leasing</span>
                            <h2 class="text-2xl sm:text-4xl font-bold">Great rental deals, zero hassles</h2>
                            <p class="mt-2 sm:text-lg">Get competitive rental rates for your property without the hassle of engaging in daily operations and management. Lease the property to an exploring entrepreneur and benefit from a stable income.</p>
                            <button class="bg-orange text-white font-semibold px-4 py-3 sm:text-xl sm:px-6 sm:py-4 rounded-lg w-content mt-8">
                                I'm Interested!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

           



            <section className="max-w-screen-lg w-full mx-auto  h-96 sm:h-120 sm:block mt-10">
        <section className="relative w-full h-full shadow-md">
          <div className="grid grid-cols-4 grid-rows-3 gap-1 sm:rounded-lg overflow-hidden w-full h-full">
            <div className="w-full h-full row-span-2 col-span-2  hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
              <img
                src="https://img.cdn.zostel.com/zostel/gallery/images/EyqdDHwRRxinzsxBQYvowA/zostel-plus-nainital-naina-range-20230119040821.jpg?w=1280"
                alt="Zostel Plus Nainital (Naina Range)"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-1 col-span-1 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
              <img
                src="https://img.cdn.zostel.com/zostel/gallery/images/N99eNkUBTLWvpxTgaIexPg/zostel-plus-nainital-naina-range-20230119040835.jpg?w=1280"
                alt="Zostel Plus Nainital (Naina Range)"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-1 col-span-1 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
              <img
                src="https://img.cdn.zostel.com/zostel/gallery/images/jhJYiKtiTh-adKWUubDQDw/zostel-plus-nainital-naina-range-20230119040854.jpg?w=1280"
                alt="Zostel Plus Nainital (Naina Range)"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-2 col-span-2 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
              <img
                src="https://img.cdn.zostel.com/zostel/gallery/images/Yb_vv0IEQJSpT7Hng4i8zA/zostel-plus-nainital-naina-range-20230119042139.jpg?w=1280"
                alt="Zostel Plus Nainital (Naina Range)"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-2 col-span-2 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
              <img
                src="https://img.cdn.zostel.com/zostel/gallery/images/Yb_vv0IEQJSpT7Hng4i8zA/zostel-plus-nainital-naina-range-20230119042139.jpg?w=1280"
                alt="Zostel Plus Nainital (Naina Range)"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
          </div>

        </section>
      </section>



        </>
    );
}
export default About;