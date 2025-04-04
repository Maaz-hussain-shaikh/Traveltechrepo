import React from "react";


const About = () => {

  const imgstyle = {
    background: `url('images/staticimg/person logo.jpg')`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="jCihag mb-4" >
        <div className="max-w-screen-xl w-full mx-auto">
          <div className="flex items-stretch w-full flex-col sm:flex-row">
            <div className="w-full h-72 sm:h-auto rounded-lg sm:w-1/2 bg-cover bg-no-repeat bg-center" style={imgstyle} >
            </div>
            <div className="w-full sm:w-1/2 flex flex-col py-8 sm:py-24 sm:pl-8 px-4 sm:px-0">
              <span className="uppercase tracking-wide font-semibold  text-gray-700 sm:text-lg">Discover the Magic: </span>
              <h2 className="text-2xl sm:text-3xl font-bold">Join Our Vibrant <span className="text-orange-600">Community!</span></h2>
              <p className="mt-2 sm:text-lg">Welcome to the heart of Travel tech. Our community is where adventure begins and friendships flourish. Whether you're a solo traveler or part of a group, our trips offer the perfect blend of luxury and affordability. Connect with fellow adventurers, enjoy fantastic group experiences, and empower local artists to shine. Safety is our priority, ensuring peace of mind for all travelers, including solo and female explorers. Join us on a journey of discovery and create memories that last a lifetime.</p>

              
              <button className="bg-orange text-white font-semibold px-4 py-3 sm:text-xl sm:px-6 sm:py-4 rounded-lg w-content mt-8">
                Join Us!
              </button>
            </div>
          </div>
        </div>
      </div>





      <section className="max-w-screen-lg w-full mx-auto  h-96 sm:h-120 sm:block mt-10">
        <section className="relative w-full h-full">
          <div className="grid grid-cols-4 grid-rows-3 gap-1 sm:rounded-lg overflow-hidden w-full h-full">
            <div className="w-full h-full row-span-2 col-span-2 hover:opacity-75">
              <img
                src="images/staticimg/staticimg1.jpg"
                alt="Group trip" loading="lazy"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-1 col-span-1 hover:opacity-75">
              <img
                src="images/staticimg/Kasmir1-min.jpg"
                alt="Fun trip" loading="lazy"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-1 col-span-1 hover:opacity-75">
              <img
                src="images/staticimg/swagimg.jpg"
                alt="stranger Group" loading="lazy"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-2 col-span-2 hover:opacity-75">
              <img
                src="images/staticimg/Kashmirgroup-min.jpg"
                alt="Travel Tech India" loading="lazy"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full row-span-2 col-span-2 hover:opacity-75">
              <img
                src="images/staticimg/Groupg.jpg"
                alt="College trip" loading="lazy"
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