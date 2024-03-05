import React from 'react'

const Unique = () => {
  return (
    <>
      <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className="mt-2 text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">
          What Makes Us Dieferent?
          </p>
          
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
           
              <div  className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                  <i className="fa-solid fa-user-secret"></i>
                  </div>
                  <h1>no third party mess</h1>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">100 present in-house operations for all trips! no third parties involved hence no fishy claims!</dd>
              </div>
              <div  className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                  <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <h1>Transparency & Security</h1>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!</dd>
              </div>
              <div  className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                  <i className="fa-solid fa-filter"></i>
                  </div>
                  <h1>Co-traveller filtering</h1>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">multistep filtering to bring only like minded people together! That's our key to have fuss-free trips!</dd>
              </div>
              <div  className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                  <i className="fa-solid fa-cannabis"></i>
                  </div>
                  <h1>One stop hassle free experience</h1>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Comfertable stays, trained drivers, hospitable staff, and friendly trip leaders put together that one memorable trip for you!a</dd>
              </div>
       
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}

export default Unique
