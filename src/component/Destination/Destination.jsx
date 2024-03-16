import {React,useEffect,useState } from 'react'
import { Maindetailsdata } from '../../Data/CardDetails'
import Destinationtrips from './Destinationtrips'
import { useParams} from 'react-router-dom'
import Loader from '../../Loader'

const Destination = () => {
  const {name}=useParams();
  const [selectedTrip, setSelectedTrip] = useState(null);
    
  useEffect(() => {   
   setSelectedTrip(name);
   console.log(name) 
   window.scrollTo(0, 0);  
   }, [name]); 
  return (
    <>
      <section className="max-w-screen-xl w-full mx-auto"><img src="/images/staticimg/page2.jpg" alt="inside-the-blue-city-of-india" className="object-cover object-center w-full rounded-b-lg shadow-md sm:rounded-t-lg h-108 sm:h-144 2xl:192" />
      <div className="flex grid grid-cols-1 gap-4 my-8 sm:grid-cols-3">

      {selectedTrip ? (
        Maindetailsdata[selectedTrip]?.more ? (
         
          <>{Maindetailsdata[selectedTrip].more.map((elem,index)=>{
            
            return(<>
            <Destinationtrips image={Maindetailsdata[selectedTrip].more[index].imgurl} title={Maindetailsdata[selectedTrip].more[index].name} description={Maindetailsdata[selectedTrip].more[index].dec} startingPrice={Maindetailsdata[selectedTrip].more[index].Price} btn={Maindetailsdata[selectedTrip].more[index].btn}/>
            </>)
          })}</>
         
        ) : (
          <>Something is worng in your pdf file or routing code please check</>
        )
      ) : (
        <Loader/>
      )}

     
        
          
      </div>
        
       
             
      
      </section>
    </>
  )
}

export default Destination
