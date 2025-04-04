import React from 'react'
import '../../Css/information.css'
import Brief from '../information-com/Brief'
import Itdropdown from '../information-com/Itdropdown'
import Policies from '../information-com/Policies'
import Faq from '../information-com/Faq'
import Pricechart from '../information-com/Pricechart'
import Thingstoknow from '../information-com/Thingstoknow'
import Responcivedetails from './Responcivedetails'



const Tripinformation = (props) => {


  const { name, Batches, note, brief, duration, Quadprice, Doubleprice, Tripleprice, pickup, drop, it, inclusion, exclusion, thingstotake, Booking, Cancellation, Genterms, FAQ, imgurl,DiscountQuadprice, DiscountDoubleprice, DiscountTripleprice,off } = props.Data;
  return (
    <>

          <section className="max-w-screen-xl w-full mx-auto mttop h-98 sm:h-144 sm:block hidden">
            <section className="relative w-full h-full shadow-md">
              <div className="grid grid-cols-4 grid-rows-3 gap-1 sm:rounded-lg overflow-hidden w-full h-full">
                <div className="w-full h-full row-span-1 col-span-1  fade-expand-appear-done fade-expand-enter-done">
                  <img
                    src={imgurl[0].imgurl1} alt={name}
                    className="object-cover object-center w-full h-full"
                    loading='lazy'
                  />
                </div>
                <div className="w-full h-full row-span-3 col-span-3  fade-expand-appear-done fade-expand-enter-done">
                  <img
                    src={imgurl[0].imgurl2}
                    alt={name} loading='lazy'
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="w-full h-full row-span-1 col-span-1  fade-expand-appear-done fade-expand-enter-done">
                  <img
                    src={imgurl[0].imgurl3}
                    alt={name} loading='lazy'
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="w-full h-full row-span-1 col-span-1  fade-expand-appear-done fade-expand-enter-done">
                  <img
                    src={imgurl[0].imgurl4}
                    alt={name} loading='lazy'
                    className="object-cover object-center w-full h-full"
                  />
                </div>

              </div>
             
            </section>
          </section>

          <section className="max-w-screen-xl w-full mx-auto  h-96 sm:h-120  sm:hidden" >
            <section className="relative w-full h-full shadow-md ">
              <div className="grid grid-cols-2 grid-rows-2 gap-1 sm:rounded-lg overflow-hidden w-full h-full" >
                <div className="w-full h-full row-span-1 col-span-2  fade-expand-appear-done fade-expand-enter-done">
                  <img src={imgurl[0].imgurl1} alt={name} loading='lazy' className="object-cover object-center w-full h-full" /></div><div className="w-full h-full row-span-1 col-span-1  fade-expand-appear-done fade-expand-enter-done">
                  <img src={imgurl[0].imgurl2} alt={name} loading='lazy' className="object-cover object-center w-full h-full" />

                </div>
                <div className="w-full h-full row-span-1 col-span-1  fade-expand-appear-done fade-expand-enter-done">
                 
                  <img src={imgurl[0].imgurl3} alt={name} loading='lazy' className="object-cover object-center w-full h-full" />
                  <img src={imgurl[0].imgurl2} alt={name} loading='lazy' className="object-cover object-center w-full h-full" />
                </div>
              </div>
            </section>
          </section>





          <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-0">
            <div className="flex relative flex-col pt-2 sm:flex-row">
              <div className="flex-shrink-0 w-full sm:w-2/3 sm:mr-4 sm:mb-4">
                <Brief name={name} brief={brief} />
                <div className="flex flex-col w-full mt-8">
                  <div className="flex flex-col">
                    <h2 className="text-2xl  font-bold">Detailed Itinerary</h2>
                    <span className="font-medium text-text">Your days at a glance</span>
                  </div>
                  <Itdropdown info={it} />
                </div>
                <Thingstoknow inclusion={inclusion} exclusion={exclusion} thingstotake={thingstotake} />




                <div className="flex flex-col w-full mt-8">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">Our policies</h2>
                    <span className="font-medium text-text">Please read them once</span>
                  </div>
                  <Policies name="Booking Policy" terms={Booking} />
                  <Policies name="Cancellation Policy" terms={Cancellation} />
                  <Policies name="General Policy" terms={Genterms} />
                </div>
                <div className="flex flex-col w-full mt-8">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">FAQs</h2>
                    <span className="font-medium text-text">Frequently asked questions</span>
                  </div>
                  {
                    FAQ.map((item, index) => <Faq key={index} question={FAQ[index].question} answar={FAQ[index].answer} />)
                  }

                </div>
              </div>
              <Pricechart note={note} Batches={Batches} nameoftrip={name} Quadprice={Quadprice} Tripleprice={Tripleprice} Doubleprice={Doubleprice} DiscountQuadprice={DiscountQuadprice} DiscountTripleprice={DiscountTripleprice} DiscountDoubleprice={DiscountDoubleprice} duration={duration} pickup={pickup} drop={drop} percentage={off} />
              <Responcivedetails Batches={Batches} Quadprice={Quadprice} nameoftrip={name} Tripleprice={Tripleprice} Doubleprice={Doubleprice} DiscountQuadprice={DiscountQuadprice} DiscountTripleprice={DiscountTripleprice} DiscountDoubleprice={DiscountDoubleprice} duration={duration} pickup={pickup} drop={drop} percentage={off} />
            </div>
                  

          </div>
         
 


    </>
  )
}

export default Tripinformation
