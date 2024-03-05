import React from "react";
import { useState } from "react";
import "./Css/responcive.css"
import { Link } from "react-router-dom";
import { itinfo } from "./Data";




const Detcop = ({ first, dete }) => {
    const [pose, uppose] = useState(false);


    return (
        <>

            <div className="dmcNqzinfo">
                <div className="itback">

                    <p>{first}</p>  <div className="iticon" style={{ cursor: "pointer" }} onClick={() => { uppose(!pose); }}>{pose ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}</div></div>
                {pose &&
                    <div className="det">
                        <p>{dete}
                        </p>

                    </div>}
            </div>

        </>
    );
}

const Itinfo = () => {

    const [need, upneed] = useState("Itinerary");
    const Detail = () => {
        if (need === "Itinerary") {
            return (<div >
                
                <div className="dmcNqz">Itinerary<div className="kLKzPK">Itinerary</div></div>
                {itinfo.map((elm, index) => {

                    return (
                        <Detcop key={index} {...elm} />
                    );
                })}
               
                
            </div>
            
            )
        } else if (need === "book") {
            return (<div className="it_sec_form" >
                <div style={{ display: "flex"}}>
                    <div className="col-5">
                    <div className="expert_img"><img src="images\expert.png" alt="img" /></div>
                        <div class="input-with-icon-box"><p class="f32 pfc1 pb8 fwb m0"> &nbsp; Our experts would love to create a package just for you!</p></div>
                        <div class="input-with-icon-box"><h3 style={{fontWeight:"700",paddingLeft:"15%"}}> Fill in your requirements here  </h3></div>
                    </div>
                    <div className="col-5 from_main_con" >
                        <div className="form_img"><img src="images/icon\world-location-icon.png" alt="img" /></div>
                        <div class=""><span class="input-icon">Full Name*</span><div class="form-con" ><input type="text" autocomplete="off" placeholder="Enter Name" class="" /></div></div>
                        <div class=""><span class="input-icon">Email</span><div class="form-con"><input type="text" autocomplete="off" placeholder="To" class="" value="" /></div></div>
                        <select class="date-form-con">
                            <option value="873">Dates</option>
                            <option value="873">Nov 19th, 2022 - Nov 27th, 2022</option>


                        </select> <select class="date-form-pic">
                            <option value="873">Starting Point</option>

                        </select> <select class="date-form-drop">
                            <option value="873">Dropping Point</option>

                        </select>
                        <select class="date-form-con">
                            <option value="873">Shering</option>
                            <option value="873">Quad</option>


                        </select>
                        <select class="date-form-con">
                            <option value="873">Acomedation</option>
                            <option value="873">Ac</option>


                        </select>
                        <a href="/" className="btn date-form-drop">Book Now</a>
                    </div>
                </div>

            </div>);
        } else {
            return (<div className="it_sec_det" >

                <div className="date_details">
                    <h3>12/12/2022</h3>
                </div>


            </div>)
        }

    }

    return (
        <>
        
           
           
                
            <div className="it_sec" >

                <h1 style={{ fontSize: "50px" }}>Brief Overview</h1><p style={{ fontSize: "15px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut omnis reiciendis facilis ducimus cum delectus consequatur voluptatum accusantium repellendus consectetur sunt assumenda fugiat, temporibus, repellat voluptatibus soluta non quas. Earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut, voluptatibus sunt molestiae, magnam dolore mollitia ipsum illum minus adipisci magni. Nemo quidem libero in consectetur magni ratione corporis dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium dolorem illum optio blanditiis unde! Impedit ipsam earum dolore minus nulla, illum temporibus et pariatur beatae quae mollitia enim quam corrupti.
                </p>
                
            </div>
            <div className="hlAVFE">
                
                <div className="iRCyeee">
                    <i className="fa-regular fa-clock iUaMPg"></i>
                    <span className="niwpK">Duration</span>
                    <span className="gIQPBW">5N - 6D</span>
                </div>
                <div className=" iRCyfy">
                    <i className="fa-solid fa-indian-rupee-sign iUaMPg"></i>
                    <span className="niwpK">Starting Price</span>
                    <span className="gIQPBW">₹21,999/-</span>
                </div>
                <div className="iRCyfy">
                    <i className="fa-solid fa-location-dot iUaMPg"></i>
                    <span className="niwpK">Pick-up and Drop</span>
                    <span className="gIQPBW">Guwahati</span>
                </div>
                
            </div>

            <div className="info-btn-it">
                    <Link to="/itinfo" className="dFnMVc" onClick={() => { upneed("Itinerary") }}>Itinerary</Link>
                    <Link to="/itinfo" className="dFnMVc" onClick={() => { upneed("date") }}>Dates</Link>
                    <Link to="/itinfo" className="dFnMVc" onClick={() => { upneed("book") }}>Book&Priceing</Link>
                    <Link to="/itinfo" className="dFnMVcc" onClick={() => { upneed("book") }}>Download Itinerary</Link>
                </div>

            <Detail />


            <section className="it_sec">
                <div className="dmcNqz">Other Details</div>
                <div className="it_term">
                    <div className="inculde">
                        <h2>Inclusions</h2>
                        <hr />
                        <li>TOUR GUIDE</li>
                        <li>ACCOMODATIONS</li>
                        <li> 1 NIGHT STAY AT (HOTEL/RESORT)</li>
                        <li>TRANSPORTATION-TRAIN & TRAVELLER </li>
                        <li> 2-BREAKFAST ,2-DINNER</li>
                        <li> ALL PERMITS</li>
                        <li> SWIMMING POOL (AS PER GOVT. GUIDELINES)</li>
                    </div>
                    <div className="exculde">
                        <h2>Exclusions</h2>
                        <hr />
                        <li>Entry Tickets SIGHTSEEING(EX-CITY PALACE ) </li>
                        <li>Any personal expenses/ tips/ permits </li>
                        <li> Meals in transit / Lunch / Any beverages / Any meals that
                            are not mentioned in the itinerary</li>
                        <li> Any accommodation, activities or transfer other than what
                            is mentioned in thr itinerary</li>
                        <li>Any cost arising out of unforeseen circumstances
                            including medical emergencies and acts of god. </li>
                        <li>Anything that is not mentioned in the above list of
                            inclusions. </li>
                    </div>

                </div>

                <div className="it_term terms">
                    <div className="termsicon"><i className="fa-solid fa-scale-unbalanced" style={{ marginRight: "12px", color: "green" }}></i>Terms & Conditions</div><hr />

                    <div className="termsli">
                        <li>Travel Tech and its organizers strictly prohibit the utilization of any narcotics and
                            banned substances during the tours and would not be responsible for any adversities
                            due to the same.</li>
                        <li>Weapon, fireworks and toxic substances are not allowed at this tour management
                            would not be responsible for any person who has been found guilty under the Indian
                            law.</li>
                        <li> The organizers reserve the rights to evict any camper anytime without any refund if
                            his/her actions violate any TT rules.
                        </li>
                        <li> The organizers reserve the rights to evict any camper anytime without any refund if
                            his/her actions violate any TT rules.
                        </li>
                        <li> Any loss to the resort materials such as bed, windows, doors, pillows, mattress or
                            any property belonging to the campsite will is subject to full payment of product
                            MRP.</li>
                        <li> Travel Tech won’t be responsible for any loss or damage of goods belonging to the
                            travelers.
                        </li>
                        <li>Travel Tech won’t be responsible if you get ill while travelling.</li>
                        <li>All guests must carry a valid govt.Issued valid ID card. from outside, you’ll have to
                            pre notify us.
                        </li>
                        <li> Management accepts no responsibility for injuries or the loss/theft of any personal
                            property during the tour</li>
                        <li>In case of any breakdown of the transport in the way, you would have to wait until
                            the transport gets repaired. No backup transport would be provided.
                        </li>
                        <li>Please cooperate with us in keeping the environment clean and safe.
                        </li>
                        <li> Registrations/tickets once booked cannot be exchanged, canceled or refunded.</li>
                        <li>Enjoy the trip, respect others and have a memorable experience.</li>
                        <li> Bonfire and Musical nights depend on the rules of the local authority or camp /
                            hotel rules.</li>
                        <li> Seats on Bus / Traveler depends on first come basis.</li>
                    </div>
                </div>
                <div className="it_term terms">
                    <div className="termsicon"><i className="fa-regular fa-handshake" style={{ marginRight: "12px", color: "green" }}></i>Booking process</div><hr />




                </div>
                <div className="it_term terms">
                    <div className="termsicon"><i className="fa-solid fa-plane-circle-exclamation" style={{ marginRight: "12px", color: "green" }}></i>Cancellation</div><hr />
                    <div className="termsli">
                        <li>Travel Tech and its organizers strictly prohibit the utilization of any narcotics and
                            banned substances during the tours and would not be responsible for any adversities
                            due to the same.</li>
                        <li>Weapon, fireworks and toxic substances are not allowed at this tour management
                            would not be responsible for any person who has been found guilty under the Indian
                            law.</li>
                        <li> The organizers reserve the rights to evict any camper anytime without any refund if
                            his/her actions violate any TT rules.
                        </li>
                        <li> The organizers reserve the rights to evict any camper anytime without any refund if
                            his/her actions violate any TT rules.
                        </li>
                        <li> Any loss to the resort materials such as bed, windows, doors, pillows, mattress or
                            any property belonging to the campsite will is subject to full payment of product
                            MRP.</li>
                        <li> Travel Tech won’t be responsible for any loss or damage of goods belonging to the
                            travelers.
                        </li>
                        <li>Travel Tech won’t be responsible if you get ill while travelling.</li>
                        <li>All guests must carry a valid govt.Issued valid ID card. from outside, you’ll have to
                            pre notify us.
                        </li>
                        <li> Management accepts no responsibility for injuries or the loss/theft of any personal
                            property during the tour</li>
                        <li>In case of any breakdown of the transport in the way, you would have to wait until
                            the transport gets repaired. No backup transport would be provided.
                        </li>
                        <li>Please cooperate with us in keeping the environment clean and safe.
                        </li>
                        <li> Registrations/tickets once booked cannot be exchanged, canceled or refunded.</li>
                        <li>Enjoy the trip, respect others and have a memorable experience.</li>
                        <li> Bonfire and Musical nights depend on the rules of the local authority or camp /
                            hotel rules.</li>
                        <li> Seats on Bus / Traveler depends on first come basis.</li>
                    </div>
                </div>
                <div className="it_term terms">
                    <div className="termsicon"><i className="fa-solid fa-hand-holding-heart" style={{ marginRight: "12px", color: "green" }}></i> Covid-19 Safety Measures</div><hr />

                    <div className="termsli">
                        <li>Thermal screeningwill be done for all passengers at pickup location. Regulars screening of Hotel Staff, Guests, Drivers & Guides.</li>
                        <li>Vehicles used for the journey will be thoroughly sanitized before the commencement of journey.</li>
                        <li>Ensuring availability of sanitizer, masks & gloves during commute and at hotels.
                        </li>
                        <li> Maintaining socialdistancing measures at hotel premises like restaurants, bars, lobby area etc.
                        </li></div>


                </div>
            </section>
        </>
    );
}

export default Itinfo;