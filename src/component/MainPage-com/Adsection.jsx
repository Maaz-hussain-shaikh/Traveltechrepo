import React from 'react'
import { Link } from 'react-router-dom'

const Adsection = (props) => {
   
   
    return (
        <>
            <div className="jCihag">
                <Link className="bXBxlH"  to={props.path}>
                <div className="lg:col-span-4 col-span-2">
          <div className="mt-[0.3rem]">
            {/* Image for mobile */}
            <img
              className="w-full rounded-xl mobile"
              src={props.mobsrc}
              alt="Bonfire Mobile"
            />

            {/* Image for desktop */}
            <img
              className="w-full rounded-xl mob-hide"
              src={props.imgsrc}
              alt="Bonfire Desktop"
            />
          </div>
        </div></Link></div>


            

        </>
    )
}

export default Adsection
