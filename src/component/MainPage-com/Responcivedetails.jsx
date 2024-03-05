import React, { useState } from 'react'

const Responcivedetails = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setprice] = useState(props.Quadprice);
  const [sharing, setsharing] = useState("Quad");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
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
      <div className='flex flex-col fixed bottom-0 z-30 w-full left-0 sm:hidden'>
        <section className={`bg-light rounded-t-lg border-t p-3 border-accent ${isOpen ? '' : 'hidden'} fade-y-enter-done`} style={{ maxHeight: "calc(-12rem + 100vh)" }} >
          <div className="flex flex-col w-full ">
            <iframe height="215" className='rounded-lg mb-2' src="https://www.youtube.com/embed/hXAmW9SSR0U?si=vOPwFSCaDkRA_UY5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <div className="flex items-center justify-between w-full relative">

              <h2 className="font-bold text-xl sm:text-2xl ">Book <span className="text-orange-600">Trip</span></h2>

              <div className="flex items-center space-x-1">


                <button className="flex items-center bg-accent text-text p-3 text-sm rounded-lg leading-none border hover:text-accent hover:bg-text active:bg-dark focus:outline-none transition ease-in-out duration-100 " onClick={toggleDropdown}>
                  <i class="fa-solid fa-xmark" ></i>
                </button>


              </div>
            </div>
            <div>
              <div className="flex flex-col w-full pb-2">
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-circle-dot"></i>
                    <span className="font-medium">{props.pickup}</span>
                  </div>
                  <div className="border-dashed border-l flex items-center px-4 border-gray-900 h-16 ml-2">
                    <div className="flex items-center space-x-2 text-text">
                      <i className="fa-regular fa-clock"></i>
                      <span className="font-medium">{props.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-circle-dot"></i>
                    <span className="font-medium">{props.drop}</span>
                  </div>
                  <span class="inline-flex items-center rounded-md bg-accent bg-gray-100` px-2 mt-4 py-1 mr-1 text-xs font-medium text-orange-600 ring-1 ring-inset ring-orange-600/20"  onClick={()=>{setfunc("Double")}}><i class="fa-solid fa-user-group"></i> Double</span>
                  <span class="inline-flex items-center rounded-md bg-accent bg-gray-100` px-2 py-1  text-xs mr-1 font-medium text-orange-600 ring-1 ring-inset ring-yellow-600/20" onClick={()=>{setfunc("Triple")}}><i class="fa-solid fa-users"></i>Triple</span>
                  <span class="inline-flex items-center rounded-md bg-accent bg-gray-100` px-2 py-1 text-xs mr-1 font-medium text-orange-600 ring-1 ring-inset ring-yellow-600/20" onClick={()=>{setfunc("Quad")}}><i class="fa-solid fa-user-plus"></i>Quad</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col border-t relative z-10  pointer-events-auto">
          <div className="flex items-center justify-between border-b px-4 py-2 text-sm font-medium text-text bg-accent bg-gray-100">
            <span>Have any questions?</span>
            <button className="text-orange-600 font-semibold" onClick={toggleDropdown}>View Details</button>
          </div>
          <div className="flex items-center justify-between  border-accent bg-light px-4 py-2 pointer-events-auto">
            <div className="flex flex-col text-text">
              <div className="flex items-center space-x-2">
              <i class="fa-solid fa-users-line"></i>
                <span className="font-medium text-sm">On {sharing} sharing basis</span>
              </div>
              <span className="font-bold"><strong className="text-orange">₹ {price}</strong></span>
            </div>
            <button className="focus:outline-none text-center py-3 px-4 text-sm font-medium tracking-wide bg-orange text-white rounded-lg" >Send Query</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Responcivedetails
