import React, { useState } from 'react'
import Triphistory from './Triphistory'
import Review from '../MainPage-com/Review'
import Qualitycorporate from './Qualitycorporate'
import { Helmet } from 'react-helmet';

const Corporate = () => {
  const [show,upshow]=useState(false)
  const [txt,txtshow]=useState("more")
  const onshow=()=>{
upshow(!show)
txtshow("less")
if(txt==="less"){
  window.scrollTo(600, 600); 
}
  }
  return (
    <>

<Helmet>
    <title>About Traveltech</title>
        <meta name="description" content="Discover Traveltech, your trusted partner for travel packages, road trips, trekking expeditions, and more across India." />
        <meta name="keywords" content="travel packages,Pachmarhi,Kerala,goa,kashmir package,Udaipur,Manali,Ladakh,Group trip,bike trip,honeymoon trip,family trip,friends,makemytrip,Adventure,fun,indore trip, road trips, trekking expeditions, corporate trips, sustainable travel" />
        <link rel="canonical" href="https://travelltech.com/Corporate" />
   
    </Helmet>
      <section className="max-w-screen-xl w-full mx-auto">
        <div className="flex flex-wrap sm:flex-no-wrap">
          <div className="w-full sm:w-2/3 ">
            <img
              src="images\staticimg\page5.jpg"
              className=" rounded-lg"
              alt="Corporate Trips"
            />
          </div>
          <div className="flex flex-col w-full p-4 bg-gray-100 rounded-lg shadow-md sm:w-1/3 h-content">
            <p className="mb-2 text-xl font-bold">Elevate Your Corporate Travel!</p>
            <p>
              We understand the importance of seamless corporate travel arrangements and the value of fostering strong partnerships
            </p>
            <form className='mt-2'>
              <div className="max-h-100px">
                <div className="kpOaoh">
                  <label htmlFor="name" className="fhucTq">
                    Name
                  </label>
                  <div className="w-full gap-10px relative flex items-center">
                    <div className="gUJNjz">
                      <i className="fa-solid fa-user" style={{ marginTop: "15px", marginLeft: "7px" }}></i>
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      className=" eQRUfz w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="max-h-100px">
                <div className="kpOaoh">
                  <label htmlFor="email" className="fhucTq">
                    Email Id
                  </label>
                  <div className="w-full gap-10px relative flex items-center">
                    <div className="gUJNjz">
                      <i className="fa-solid fa-envelope" style={{ marginTop: "15px", marginLeft: "7px" }}></i>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email id"
                      className="eQRUfz w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="max-h-100px">
                <div className="kpOaoh">
                  <label htmlFor="phoneNumber" className="fhucTq">
                    Phone
                  </label>
                  <div className="w-full gap-10px relative flex items-center">
                    <div className="gUJNjz">
                      <i className="fa-solid fa-phone" style={{ marginTop: "15px", marginLeft: "7px" }}></i>
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Enter your phone number"
                      className="eQRUfz w-full"
                    />
                  </div>
                </div>
              </div>
              <button className="bg-orange text-white font-semibold px-4 py-3 sm:text-xl sm:px-6 sm:py-4 rounded-lg w-content mt-8">
                I'm Interested!
              </button>
            </form>
          </div>
        </div>



        <div className="lgQrCi mt-4 ">

          <div className="GQyBR">
            <div className="foUrhR sm:gap-20">
              <div className="dwReTq   ">
                <div className="gFyKbD">
                  <h2 className="kbkTjD text-4xl">
                    <span className='text-orange-600 font-semibold' style={{ fontSize: "25px" }}>Make Every Trip an Adventure!</span><br />
                    <span style={{ fontWeight: 700 }}>Redefine Corporate</span>
                    <span style={{ fontWeight: 700 }} > Trips!</span>
                  </h2>
                </div>

                <div className="iiqXBP">
                  <div className="dJHiPQ">
                    <div className="jqSoxA">
                      <p>
                        Welcome to Travel tech, where we offer unique opportunities for corporate and college trips. Regardless of whether you're a company owner, teacher, student, or employee, you can partner with us to earn while providing amazing travel experiences. Let us handle all the management aspects, including bookings and travel tech, while you focus on organizing the trip.
                      </p> <br />

                      <strong>Benefits of Partnering with Us:</strong><br /><br />
                      
                     {show?<>
                      <strong>Open to All: </strong>
                      <p>You don't need to own a company or be a teacher to organize a trip. Anyone, including students, employees, CEOs, and more, can join us.</p>
                      <strong>Earn Money Easily</strong>
                      <p>Partnering with us allows you to earn effortlessly. We offer special B2B rates to corporate partners, ensuring profitability without much effort on your part.</p>
                      <strong>Full Support:</strong><br />
                      <p> Our dedicated team provides comprehensive support, handling all aspects of management. From bookings to travel tech, we've got you covered.</p>
                      <strong>Flexible Options:</strong>
                      <p>We offer flexible trip options tailored to your needs. Whether it's a corporate retreat or a college excursion, we customize the trip to suit your requirements.</p>
                      <strong>
                        No Hassle Management:
                      </strong><br />
                      <p>With us, you don't have to worry about the intricacies of trip management. We take care of everything, leaving you free to focus on organizing a memorable trip.</p><br />
                      <strong>Corporate Specialties:</strong><br /><br />
                      <strong>Exclusive B2B Rates: </strong><br />
                      <p> Enjoy special rates designed exclusively for our corporate partners, ensuring cost-effectiveness and profitability.</p>
                      <strong>Customized Solutions: </strong>
                      <p>We understand the unique needs of corporate travel. Our team works closely with you to tailor the trip to your company's objectives and preferences.</p>
                      <strong>Team-building Opportunities: </strong>
                      <p>Our trips offer excellent team-building opportunities, fostering camaraderie and collaboration among employees.</p><br />
                      <strong>College Specialties:</strong><br /><br />
                      <strong>Educational Excursions:</strong>
                      <p>We offer educational excursions tailored to college groups, providing opportunities for learning and cultural exchange.</p>
                      <strong>Student Discounts:</strong>
                      <p>Take advantage of special student discounts, making our trips affordable for college groups.</p>
                      <strong>Flexible Itineraries:</strong>
                      <p> Our flexible itineraries accommodate the diverse interests and schedules of college students, ensuring a memorable experience for everyone.</p>
                     </>:<></>}
                     <button className="text-sm font-medium focus:outline-none text-orange-600" onClick={onshow} >Show {txt}</button><br />
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="hPnwgB">
                <iframe src="" className="eBgksK" title='titleimg'></iframe>
              </div>
            </div>

          </div>


        </div>
      </section>

      <section className="max-w-screen-xl w-full mx-auto  h-96 sm:h-120 sm:block mt-10 ">
        <section className="relative w-full h-full shadow-md">
          <div className="grid grid-cols-4 grid-rows-3 gap-1 sm:rounded-lg overflow-hidden w-full h-full">
            <div className="w-full h-full row-span-2 col-span-2  hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
              <img
                src="/images/staticimg/bonefire.jpg"
                alt="bone fire"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-1 col-span-1 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
              <img
                src="/images/staticimg/pachmarhigroup.jpg"
                alt="pic" loading="lazy"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-1 col-span-1 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
              <img
                src="/images/staticimg/person logo.jpg"
                alt="pic" loading="lazy"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-2 col-span-2 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
              <img
                src="/images/staticimg/pachmarhigroup.jpg"
                alt="pic" loading="lazy"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-2 col-span-2 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
              <img
                src="/images/staticimg/Love-min.jpg"
                alt="Love-min" loading="lazy"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
          </div>

        </section>

      </section>
      <Qualitycorporate />
      <Triphistory />
      <Review />

    </>
  )
}

export default Corporate
