import { React, useEffect, useState } from 'react'
import { Honymooncards, Maindetailsdata } from '../../Data/CardDetails'
import Destinationtrips from './Destinationtrips'
import { useParams } from 'react-router-dom'
import Loader from '../../Loader'
import Headersec from './Headersec'
import Honeymoon from '../MainPage-com/Honeymoon'

const Destination = () => {
  const { name } = useParams();
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    setSelectedTrip(name);
    console.log(name)
    window.scrollTo(0, 0);
  }, [name]);
  return (
    <>


      {selectedTrip ? (
        Maindetailsdata[selectedTrip]?.more.trips ? (

          <>

            <section className="max-w-screen-xl w-full mx-auto ">
              <div className='inner-shadow '>
                <Headersec name={Maindetailsdata[selectedTrip].more.Destinationname} get={Maindetailsdata[selectedTrip].more.get} price={Maindetailsdata[selectedTrip].more.startingprice} descount={Maindetailsdata[selectedTrip].more.descount} />
                <img
                  src={Maindetailsdata[selectedTrip].more.tripimg}
                  alt="Current trip"
                  className="object-cover object-center w-full sm:rounded-b-lg  shadow-md sm:rounded-t-lg h-108 sm:h-144 2xl:192 "
                />
              </div>
              <h1 className="mt-4 text-2xl font-black  font-bold sm:text-4xl text-center"><span className="wraper">Explore all</span></h1>

             


              <div className="flex grid grid-cols-2  sm:grid-cols-3 wraper">


                {Maindetailsdata[selectedTrip].more.trips.map((elem, index) => {

                  return (<>
                    <Destinationtrips image={Maindetailsdata[selectedTrip].more.trips[index].imgurl} title={Maindetailsdata[selectedTrip].more.trips[index].name}  startingPrice={Maindetailsdata[selectedTrip].more.trips[index].Price} btn={Maindetailsdata[selectedTrip].more.trips[index].btn} days={Maindetailsdata[selectedTrip].more.trips[index].days} tag={Maindetailsdata[selectedTrip].more.trips[index].tag} />
                  </>)
                })}

              </div>


              <Honeymoon title="Trending Trips" data={Honymooncards} />

            </section>
          </>

        ) : (
          <>Something is worng in your pdf file or routing code please check</>
        )
      ) : (
        <Loader />
      )}





    </>
  )
}

export default Destination
