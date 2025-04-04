import React, { useState } from 'react'


const Pricechart = (props) => {
  const [Batch, upbatch] = useState("Upcoming Batch")
  const handleChange = (event) => {
    let val = event.target.value
    upbatch(val)
  }
  const [price, setprice] = useState(props.Quadprice);
  const [Discountprice, setDiscountprice] = useState(props.DiscountQuadprice);
  const [sharing, setsharing] = useState("Quad");
  const setfunc = (sharing) => {
    if (sharing === "Triple") {
      let price = props.Tripleprice
      let Discount = props.DiscountTripleprice
      setDiscountprice(Discount)
      setprice(price)
      setsharing("Triple")
    } else if (sharing === "Double") {
      let price = props.Doubleprice
      setprice(price)
      let Discount = props.DiscountDoubleprice
      setDiscountprice(Discount)
      setsharing("Double")
    } else {
      let price = props.Quadprice
      setprice(price)
      let Discount = props.DiscountQuadprice
      setDiscountprice(Discount)
      setsharing("Quad")
    }
  }
  const generateWhatsAppLink = () => {
    let message = `Hey Travel tech, I would like to book a trip to ${props.nameoftrip} for ${Batch} on ${sharing} sharing basis`
    let phoneNumber = "8982001240"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="flex-col hidden w-full py-2 mt-4 sm:flex-grow sm:flex sm:mt-0">
        <iframe height="215" src="https://www.youtube.com/embed/hXAmW9SSR0U?si=vOPwFSCaDkRA_UY5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       
        
        <div className='items-center'>
        
        </div>
        

        <br />
        <div className="sticky flex flex-col w-full" style={{ top: "16px" }}>

        <div className="absolute left-0 lg:top-4 2xl:top-6"><p className="rounded-r-[1.25rem] bg-white py-[0.125rem] pr-5 pl-3 text-red-800 font-bold">{props.percentage}</p></div>
          <div className="flex flex-col w-full p-4 bg-gray-200 rounded-lg">

            <div className="flex items-center justify-between relative w-full">

              <h2 className="font-bold text-xl sm:text-2xl flex mt-4">Book <span className="text-orange-600"> Trip</span>
              </h2>
            </div>
            
            <div className="">
              <div className="flex flex-col w-full">
                <span className="text-xl font-medium">

                  <span className="text-3xl font-bold ">₹ {price} <span className="text-p-xs text-sm text-black-600 line-through font-normal">{Discountprice}</span></span>

                </span>
                <span className="  text-sm mr-2 font-medium text-orange-600 ">On {sharing} sharing basis</span>
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

                  <select
                    className=" w-80 mt-2 mb-2 inline-flex items-center rounded-md bg-accent bg-white px-2 py-2 mr-2 text-sm font-medium  ring-1 ring-inset ring-orange-600/20 cursor-pointer"
                    value={Batch} onChange={handleChange}

                  >
                    <option value="Upcoming Batch" >Upcoming Batch</option>
                    {props.Batches.map(trip => (
                      <option key={trip.id} value={trip.date}>
                        {trip.date}
                      </option>
                    ))}
                  </select><br />
                  <span className="inline-flex items-center rounded-md bg-accent bg-white px-2 py-2 mr-2 text-sm font-medium text-orange-600 ring-1 ring-inset ring-orange-600/20 cursor-pointer" onClick={() => { setfunc("Double") }}><i className="fa-solid fa-user-group mr-1"></i> Double</span>
                  <span className="inline-flex items-center rounded-md bg-accent bg-white  px-3 py-2  text-sm mr-2 font-medium text-orange-600 ring-1 ring-inset ring-yellow-600/20 cursor-pointer" onClick={() => { setfunc("Triple") }}><i className="fa-solid fa-users mr-1"></i>Triple</span>
                  <span className="inline-flex items-center rounded-md bg-accent bg-white  px-3 py-2 text-sm mr-2 font-medium text-orange-600 ring-1 ring-inset ring-yellow-600/20 cursor-pointer" onClick={() => { setfunc("Quad") }}><i className="fa-solid fa-user-plus mr-1"></i>Quad</span>
                </div>

                <button className="flex items-center justify-start rounded-lg font-medium  bg-orange  text-white  py-4 px-6 text-lg border  transition ease-in-out  mt-4" onClick={generateWhatsAppLink}>
                  <span className="flex-1 whitespace-no-wrap  " >Book Now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-4 mt-2">
            <span className="text-lg font-bold">Important Note -</span><p>{props.note}</p>
            <button className="flex items-center justify-start rounded-lg font-medium leading-none bg-black active:border-orange text-white hover:text-orange-600 hover:bg-white active:bg-gray-200 active:text-orange-600 py-4 px-6 text-lg border focus:outline-none transition ease-in-out duration-100 disabled:cursor-not-allowed disabled:bg-accent disabled:text-subtitle mt-4" type="button">
              <span className="flex-1 whitespace-no-wrap">Download itinerary</span>
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
