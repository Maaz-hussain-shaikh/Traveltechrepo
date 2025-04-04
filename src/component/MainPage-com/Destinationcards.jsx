
import React from "react";

import { destinationard } from "../../Data/CardDetails"
import { NavLink } from "react-router-dom";


const Destinationcards = () => {
  const handleCall = () => {
    window.open('tel:+918982001240', '_self');
  };

  return (
    <>
      <div className="tour-hidden-utility ">
        <div className="tour-enquiry-card  rounded-lg">
          <div className="enquiry-image">
            <img src="images/Firstpageimgs/Groupadimg.png" alt="description" id="people-image" />
          </div>
          <div className="tour-enquiry-content">
            <div className="enquiry-content">
              <div className="font-bold text-lg ">
                <span>Unlock up to <span className="text-orange-600">to 50% Off -</span> Exclusive Discounts for larger groups  </span>
                
              </div>
              <p>We create unforgettable adventure,Customised for your Group trip</p>
            </div>
          </div>
          
           
            <div className="tour-enquiry-call">
            <button name="button" type="button" id="enquiry-call" className="rounded-lg font-medium" onClick={handleCall}>Call us</button></div>
           
          
        </div>
      </div>

      <div className="jCihag">
        <div className="kwYMGm ">

        <div className="DividerWithHeading_bannerSubHeading__YJQl7 false "><h2 className="dlvSJV text-2xl font-black  font-bold text-center sm:text-4xl">Discover the <span className="text-orange-600">Trendiest</span> Travel Spots</h2></div>       
          
        </div>

        <div style={{ transform: "translateX(-0%)" }} className="iNvskg">
          {Object.keys(destinationard).map((elm, index) => {
            let demolink = destinationard[elm].url;
            let imglink = `url(${demolink})`;
            const imgstyle = {
              backgroundImage: imglink,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            };

            return (
              <NavLink to={destinationard[elm].href} key={elm}>
                <div className="fxsTJR" style={imgstyle}>
                  <div className="cAnrOf">
                  </div><div className="iuvGsx">
                  </div><div className=" SnjhR">
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Destinationcards;