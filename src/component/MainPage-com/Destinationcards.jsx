
import React from "react";

import { destinationard } from "../../Data/CardDetails"
import { NavLink } from "react-router-dom";


const Destinationcards = () => {

  return (
    <>
      <div className="tour-hidden-utility">
        <div className="tour-enquiry-card rounded-lg">
          <div className="enquiry-image">
            <img src="images/Firstpageimgs/Groupadimg.png" alt="description" id="people-image" />
          </div>
          <div className="tour-enquiry-content">
            <div className="enquiry-content">
              <div className="font-bold text-lg">
                <span>Bigger Group? Get special offers upto 50% off!</span>
              </div>
              <div className="font-medium text-text">
                <span>We create unforgettable adventures, customised for your group.</span>
              </div>
            </div>
          </div>
          <div className="tour-enquiry-call">
            <button name="button" type="button" id="enquiry-call" className="rounded-lg font-medium">Get a Callback</button>
          </div>
        </div>
      </div>

      <div className="jCihag">
        <div className="kwYMGm">
          <h2 className="dlvSJV text-2xl font-black text-orange-600 sm:text-4xl">Explore The Hottest Destinations</h2>
          <div className="lhCcFM text-text">Trending this Month</div>
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