import React from "react";
import BlogList from "./BlogList";
import BolgeDetails from "./BolgeDetails";


const Bloge=()=>{
    return(
<>

<div className="bg-white">
     

      <div className="relative isolate  lg:px-8">
       
        <div className="mx-auto max-w-2xl py-32 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-lg px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
             
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>           
          </div>
        </div>        
      </div>
    </div>
    <hr />
    <BlogList/>
</>
    );
}
export default Bloge;