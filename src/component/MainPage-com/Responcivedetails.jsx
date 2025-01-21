import React, { useState } from 'react';
const Responcivedetails = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(props.Quadprice);
  const [Discountprice, setDiscountPrice] = useState(props.DiscountQuadprice);
  const [batch, setBatch] = useState("Upcoming Batch");
  const [sharing, setSharing] = useState("Quad");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setBatch(event.target.value);
  };

  const setSharingAndPrice = (sharingType, price ,Discount) => {
    setSharing(sharingType);
    setPrice(price);
    setDiscountPrice(Discount);
  };

  const generateWhatsAppLink = () => {
    let message = `Hey Travel tech, I would like to book a trip to ${props.nameoftrip} for ${batch} on ${sharing} sharing basis`;
    let phoneNumber = "+917566788885";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='flex flex-col fixed bottom-0 z-30 w-full left-0 sm:hidden'>
      <section className={`bg-light rounded-t-lg border-t p-3 border-accent ${isOpen ? '' : 'hidden'} fade-y-enter-done`} style={{ maxHeight: "calc(-12rem + 100vh)" }}>
        <div className="flex flex-col w-full ">
          <iframe height="215" className='rounded-lg mb-3' src="https://www.youtube.com/embed/hXAmW9SSR0U?si=vOPwFSCaDkRA_UY5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         
          
          <div className="flex items-center justify-between w-full  relative">
            <h2 className="focus:outline-none text-center py-2 px-2 m-auto text-sm font-medium tracking-wide bg-orange  rounded-lg">

              <select
                className="w-30 ml-2 bg-orange  hover:border-gray-500 px-2 rounded text-sm text-white text-center"
                onChange={handleChange}
                value={batch}
              >
                <option value="Upcoming Batch">Click here for Upcoming Batches</option>
                {props.Batches.map(trip => (
                  <option key={trip.id} value={trip.date}>
                    {trip.date}
                  </option>
                ))}
              </select>
            </h2>
            <div className="flex items-center space-x-1">
              <button className="flex items-center bg-accent text-text py-2.5 px-2.5 text-sm rounded-lg leading-none border hover:text-accent hover:bg-text active:bg-dark focus:outline-none transition ease-in-out duration-100 " onClick={toggleDropdown}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-col w-full pb-2">
              <div className="mt-3">
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
                <span className="inline-flex items-center rounded-md bg-accent bg-gray-100 px-3 mt-4 py-2 mr-2 text-sm font-medium text-orange-600 ring-1 ring-inset ring-orange-600/20" onClick={() => setSharingAndPrice("Double", props.Doubleprice , props.DiscountDoubleprice)}><i className="fa-solid fa-user-group mr-1"></i> Double</span>
                <span className="inline-flex items-center rounded-md bg-accent bg-gray-100 px-3 py-2 text-sm mr-2 font-medium text-orange-600 ring-1 ring-inset ring-yellow-600/20" onClick={() => setSharingAndPrice("Triple", props.Tripleprice , props.DiscountTripleprice)}><i className="fa-solid fa-users mr-1"></i> Triple</span>
                <span className="inline-flex items-center rounded-md bg-accent bg-gray-100 px-3 py-2 text-sm mr-2 font-medium text-orange-600 ring-1 ring-inset ring-yellow-600/20" onClick={() => setSharingAndPrice("Quad", props.Quadprice , props.DiscountQuadprice)}><i className="fa-solid fa-user-plus mr-1"></i> Quad</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col border-t relative z-10 pointer-events-auto">
        <div className="flex items-center justify-between border-b  py-2 text-sm font-medium text-text bg-accent bg-gray-100">
        <div className=" left-0 lg:top-4 2xl:top-6"><p className="rounded-r-[1.25rem] bg-white py-[0.125rem] pr-5 pl-3 text-red-800 font-bold">{props.percentage} </p></div>
          <button className="text-orange-600 font-semibold mr-6" onClick={toggleDropdown}>View Details</button>
        </div>
        <div className="flex items-center justify-between border-accent bg-light px-4 py-2 pointer-events-auto">
          <div className="flex flex-col text-text">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-users-line"></i>
              <span className="font-medium text-sm">On {sharing} sharing basis </span>
            </div>
            <span className="font-bold"><strong className="text-orange">₹ {price}</strong><span className="text-p-xs ml-1 text-sm text-black-600 line-through font-normal">{Discountprice}</span></span>
          </div>
          <button className="focus:outline-none text-center py-3 px-4 text-sm font-medium tracking-wide bg-orange text-white rounded-lg" onClick={generateWhatsAppLink}>Send Query</button>
        </div>
      </section>
    </div>
  );
};

export default Responcivedetails;