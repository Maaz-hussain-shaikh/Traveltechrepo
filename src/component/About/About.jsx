import React from 'react'
import Whoweare from './Whoweare'
import Unique from './Unique'
import Team from './Team'
import Worrior from '../MainPage-com/Worrior'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <>
    <Helmet>
    <title>About Us - Traveltech </title>
        <meta name="description" content="Discover Traveltech, the leading travel community in Central India. We offer end-to-end travel packages, road trips, trekking expeditions, and more, focusing on sustainable and organic growth." />
        <meta name="keywords" content="Traveltech, travel community, India travel packages, road trips, trekking expeditions, corporate trips, sustainable travel, customized travel packages" />
        <link rel="canonical" href="https://travelltech.com/About" />
    </Helmet>
      <section className="max-w-screen-xl w-full mx-auto">


        <section className="max-w-screen-xl w-full mx-auto relative grid gap-10 px-3 pt-8 sm:px-0 z-1 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="px-3">
              <img className="object-cover w-40 h-40 rounded shadow-lg animate-pulse sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="images\staticimg\logophoto.jpg" alt="About travel tech india" />
            </div>
            <div className="flex flex-col items-end px-3">
              <img className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56" src="images\staticimg\fisrttrip.jpg" alt="Travel tech about" />
              <img className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="images\staticimg\page2.jpg" alt="Group travel" />
            </div>

          </div>
          <div className="flex flex-col w-full p-4">
            <h1 className="max-w-lg mb-3 font-sans text-3xl font-bold tracking-tight text-black sm:text-6xl sm:leading-none">Introducing<span className="text-orange-600 text-2xl sm:text-4xl font-bold "> Travel Tech </span></h1>
            <h2 className="text-xl  font-bold text-gray-900 sm:text-3xl"> Work<span className="text-orange-600"> | </span>Travel<span className="text-orange-600"> | </span>Repeat </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-lg">We at Traveltech are Unleash Your Wanderlust with Central India's Buzziest travel community that provides end-to-end travel packages in India  We design the best travel itineraries that encourage group traveling for like-minded people. Our services include road trips, trekking expeditions, corporate trips, and customized tour packages. On our trips, we ensure hassle-free traveling, top-notch accommodation, and guided sightseeing that too in a budget that won’t burn a hole in your pocket. Just give us your dates and be ready to experience like Never before

              We are excited to announce that we've successfully served over 100000+ travelers and achieved remarkable growth, tripling our size in 2022. Our commitment to sustainable and organic expansion has enabled us to address exciting challenges in travel technology for the modern traveler.</p>
          </div>

        </section>
      </section>
      <Whoweare />
      <Unique />
      <Team />
      <Worrior />
    </>
  )
}

export default About
