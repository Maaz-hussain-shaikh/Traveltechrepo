import React, { useState } from 'react'
import '../../Css/information.css'
import Brief from '../information-com/Brief'
import Imgcomponent from '../information-com/Imgcomponent'
import Itdropdown from '../information-com/Itdropdown'
import Policies from '../information-com/Policies'
import Faq from '../information-com/Faq'
import Pricechart from '../information-com/Pricechart'
import Thingstoknow from '../information-com/Thingstoknow'
import Responcivedetails from './Responcivedetails'
const Tripinformation = (props) => {
  const [show, setshow] = useState(false);
  const updateParentState = () => {
    setshow(!show);
  };
  const { name, brief, duration, Quadprice, Doubleprice, Tripleprice, pickup, drop, it, inclusion, exclusion, thingstotake, Booking, Cancellation, Genterms, FAQ ,imgurl} = props.Data;
  return (
    <>

      {
        show ? <><Imgcomponent updateParentState={updateParentState} />
        </> : <>
        <section class="max-w-screen-xl w-full mx-auto  h-96 sm:h-120 sm:block moblie" >
              <section class="relative w-full h-full shadow-md ">
                <div class="grid grid-cols-2 grid-rows-2 gap-1 sm:rounded-lg overflow-hidden w-full h-full" onClick={() => { setshow(!show) }}>
                  <div class="w-full h-full row-span-1 col-span-2 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
                    <img src={imgurl[0].imgurl1} alt="destination" class="object-cover object-center w-full h-full" /></div><div class="w-full h-full row-span-1 col-span-1 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
                    <img src={imgurl[0].imgurl2} alt="destination" class="object-cover object-center w-full h-full" />
                  </div>
                  <div class="w-full h-full row-span-1 col-span-1 hover:opacity-75 cursor-zoom-in fade-expand-appear-done fade-expand-enter-done">
                    <button class="absolute bottom-0 right-0 flex items-center p-3 m-4 mr-12 rounded-lg bg-light hover:bg-accent"> View all</button>
                    <img src={imgurl[0].imgurl3} alt="destination" class="object-cover object-center w-full h-full" />
                  </div>
                </div>
              </section>
            </section>
          <div class="max-w-screen-xl w-full mx-auto px-4 sm:px-0">

            






            <div class="flex relative flex-col pt-2 sm:flex-row">
              <div class="flex-shrink-0 w-full sm:w-2/3 sm:mr-4 sm:mb-4">
                <Brief name={name} brief={brief} />
                <div class="flex flex-col w-full mt-8">
                  <div class="flex flex-col">
                    <h2 class="text-2xl  font-bold">Detailed Itinerary</h2>
                    <span class="font-medium text-text">Your days at a glance</span>
                  </div>
                  <Itdropdown info={it} />
                </div>
                <Thingstoknow inclusion={inclusion} exclusion={exclusion} thingstotake={thingstotake} />




                <div class="flex flex-col w-full mt-8">
                  <div class="flex flex-col">
                    <h2 class="text-2xl font-bold">Our policies</h2>
                    <span class="font-medium text-text">Please read them once</span>
                  </div>
                  <Policies name="Booking Policy" terms={Booking} />
                  <Policies name="Cancellation Policy" terms={Cancellation} />
                  <Policies name="General Policy" terms={Genterms} />
                </div>
                <div class="flex flex-col w-full mt-8">
                  <div class="flex flex-col">
                    <h2 class="text-2xl font-bold">FAQs</h2>
                    <span class="font-medium text-text">Frequently asked questions</span>
                  </div>
                  {
                    FAQ.map((item, index) => <Faq question={FAQ[index].question} answar={FAQ[index].answer} />)
                  }

                </div>
              </div>
              <Pricechart Quadprice={Quadprice} Tripleprice={Tripleprice} Doubleprice={Doubleprice} duration={duration} pickup={pickup} drop={drop} />
              <Responcivedetails Quadprice={Quadprice} Tripleprice={Tripleprice} Doubleprice={Doubleprice} duration={duration} pickup={pickup} drop={drop} />
            </div>


          </div></>
      }


    </>
  )
}

export default Tripinformation
