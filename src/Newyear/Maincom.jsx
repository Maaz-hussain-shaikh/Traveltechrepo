import React from 'react'
import Newcards from './Newcards'
import Adsection from '../component/MainPage-com/Adsection'
import { Himachal } from '../Data/Newyear'

const Maincom = () => {
  
  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto mttop h-[60vh]">
        <div className="relative w-full h-full">
          <div className="grid grid-cols-4 grid-rows-3 gap-1 rounded-lg overflow-hidden w-full h-full">
            <div className="w-full h-full row-span-3 col-span-6 fade-expand-appear-done fade-expand-enter-done">
              <img
                src="/images/tripcard/Newyear/NewYear Poster.svg"
                alt="Travel Tech India"
                className="object-cover object-center w-full h-full rounded-b-lg shadow-md sm:rounded-t-lg"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="jCihag">
        <div className="kwYMGm ">

          <div className=" "><h2 className="dlvSJV text-2xl font-black  font-bold text-center sm:text-4xl">Discover the <span className="text-orange-600">Trendiest</span> Travel Spots</h2></div>

        </div>

       
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-10 mx-auto mt-8">
      
          {Himachal.map((elem,index)=>{
            return(<>
            <div  key={index}>
            <Newcards Data={Himachal[index].Data} />
            </div>
            
          </>)
          })}
          
        </div>
       
      </div>
     
      <Adsection imgsrc="/images/tripcard/Newyear/NewYear Poster.png" mobsrc="/images/tripcard/New year/Untitled design (1).png" path="Details/leh_13day"/> 
    </>
  )
}

export default Maincom
