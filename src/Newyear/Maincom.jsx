import React from 'react'
import Newcards from './Newcards'
import Adsection from '../component/MainPage-com/Adsection'
import { Himachal } from '../Data/Newyear'

const Maincom = () => {

  return (
    <>
      <Adsection imgsrc="/images/tripcard/Newyear/NewYear Poster.png" mobsrc="/images/tripcard/Newyear/NewYear Poster.png" path="/X-mas" />

      <div className="jCihag">
        <div className="kwYMGm ">

          <div className=" "><h2 className=" text-red-600  font-bold text-center sm:text-3xl text-2xl">Holi Special Trips</h2></div>

        </div>


        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-10 mx-auto mt-8">
          {Himachal.map((elem, index) => (
            <div key={index}>
              <Newcards Data={elem.Data} />
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Maincom
