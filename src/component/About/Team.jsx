import React from 'react'
import Ceos from './Ceos';

const peopleData = [
  { name: 'Druva saxena', imageUrl: 'images/CEOsimg/Captain dhru.jpg', role: 'Trip Captain' },
  { name: 'Rose', imageUrl: 'images/CEOsimg/Captain1.jpg', role: 'Sales Head' },
  { name: 'Jayesh', imageUrl: 'images/CEOsimg/Jayesh.jpg', role: 'Trip Captain' },
  { name: 'Mehul Jain', imageUrl: 'images/CEOsimg/Mehul.jpg', role: 'Trip Captain' },
  { name: 'Jay', imageUrl: 'images/CEOsimg/Jay.jpg', role: 'Trip Captain' },
  { name: 'Samir Khan ', imageUrl: 'images/CEOsimg/dr samir.jpg', role: 'Trip Captain' },
 


]

const Team = () => {
 

  return (
    <>
      

<Ceos/>

      <div className="bg-white mt-20">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-center sm:text-2xl  text-2xl  font-bold tracking-tight  sm:text-4xl">Meet our <span className='text-orange-600'>Team</span></h2>
            <p className="mt-6 text-sm sm:text-lg leading-2 text-gray-600">
              Each caption undergoes rigorous training to ensure they're equipped with the expertise and enthusiasm needed to make every trip truly memorable.
              let our talented trip captions transform your travels into cherished memories.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {peopleData.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-orange-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Team
