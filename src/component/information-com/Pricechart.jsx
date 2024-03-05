import React, { useEffect, useState } from 'react'

const Pricechart = (props) => {

  const [price, setprice] = useState(props.Quadprice);
  const [sharing, setsharing] = useState("Quad");
const setfunc=(sharing)=>{
if(sharing==="Triple"){
  let price=props.Tripleprice
setprice(price)
setsharing("Triple")
}else if(sharing==="Double"){
  let price=props.Doubleprice
  setprice(price)
  setsharing("Double")
}else{
  let price=props.Quadprice
  setprice(price)
  setsharing("Quad")
}
}
  return (
    <>
      <div className="flex-col hidden w-full py-2 mt-4 sm:flex-grow sm:flex sm:mt-0">
        <iframe height="215" src="https://www.youtube.com/embed/hXAmW9SSR0U?si=vOPwFSCaDkRA_UY5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br />
        <div className="sticky flex flex-col w-full" style={{ top: "16px" }}>

          <div className="flex flex-col w-full p-4 bg-gray-200 rounded-lg">

            <div className="flex items-center justify-between relative w-full">

              <h2 className="text-xl font-bold sm:text-2xl">Book <span className="">Trip</span>
              </h2>

            </div>
            <div className="">
              <div className="flex flex-col w-full">
                <span className="text-xl font-medium">

                  <span className="text-3xl font-bold ">₹ {price}</span>

                </span>
                <span class="  text-sm mr-2 font-medium text-orange-600 ">On {sharing} sharing basis</span>
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-circle-dot"></i><span className="font-medium">{props.pickup}</span>
                  </div>
                  <div className="flex items-center h-16 px-4 ml-2 border-l border-gray-900 border-dashed">
                    <div className="flex items-center space-x-2 text-text">
                      <i className="fa-regular fa-clock"></i>
                      <span className="font-medium">{props.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-circle-dot"></i>
                    <span className="font-medium">{props.drop}</span>
                  </div>
                  <span class="inline-flex items-center rounded-md bg-accent bg-white px-2 mt-4 py-2 mr-2 text-sm font-medium text-orange-600 ring-1 ring-inset ring-orange-600/20 cursor-pointer" onClick={()=>{setfunc("Double")}}><i class="fa-solid fa-user-group mr-1"></i> Double</span>
                  <span class="inline-flex items-center rounded-md bg-accent bg-white  px-3 py-2  text-sm mr-2 font-medium text-orange-600 ring-1 ring-inset ring-yellow-600/20 cursor-pointer" onClick={()=>{setfunc("Triple")}}><i class="fa-solid fa-users mr-1"></i>Triple</span>
                  <span class="inline-flex items-center rounded-md bg-accent bg-white  px-3 py-2 text-sm mr-2 font-medium text-orange-600 ring-1 ring-inset ring-yellow-600/20 cursor-pointer" onClick={()=>{setfunc("Quad")}}><i class="fa-solid fa-user-plus mr-1"></i>Quad</span>
                </div>

                <button className="flex items-center justify-start rounded-lg font-medium leading-none bg-orange active:border-orange text-white hover:text-orange-600 hover:bg-black active:bg-gray-200 active:text-orange-600 py-4 px-6 text-lg border focus:outline-none transition ease-in-out duration-100 disabled:cursor-not-allowed disabled:bg-accent disabled:text-subtitle mt-4" type="button">
                  <span className="flex-1 whitespace-no-wrap">Book Now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-4 mt-4">
            <span className="text-lg font-bold">Have Questions?</span>
            <button className="flex items-center justify-start rounded-lg font-medium leading-none bg-black active:border-orange text-white hover:text-orange-600 hover:bg-white active:bg-gray-200 active:text-orange-600 py-4 px-6 text-lg border focus:outline-none transition ease-in-out duration-100 disabled:cursor-not-allowed disabled:bg-accent disabled:text-subtitle mt-4" type="button">
              <span className="flex-1 whitespace-no-wrap">Download Itenary</span>
            </button>
            <button className="flex items-center justify-start rounded-lg font-medium leading-none active:border-orange   hover:bg-orange  active:text-white border border-orange py-4 px-6 text-lg border focus:outline-none transition ease-in-out duration-100 disabled:cursor-not-allowed disabled:bg-accent disabled:text-subtitle mt-4" type="button">
              <span className="flex-1 whitespace-no-wrap">Whatsapp Us</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricechart
