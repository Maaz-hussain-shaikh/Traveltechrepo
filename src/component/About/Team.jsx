import React, { useState } from 'react'

const peopleData = [
  { name: 'John Doe', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', role: 'CEO' },
  { name: 'Jane Smith', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', role: 'CTO' },
  // Add more people as needed
]

const Team = () => {
  const [currentimg, setCurrentImage] = useState("images/CEOsimg/Ceo.jpg");
  const [currenname, setCurrentname] = useState("Salman Shaikh");
  const [post, setCurrentpost] = useState("CEO");
  const handleHover = (newImage, name, post) => {
    setCurrentImage(newImage);
    setCurrentname(name);
    setCurrentpost(post);
  };

  const handleClick = (newImage, name, post) => {
    setCurrentImage(newImage);
    setCurrentname(name);
    setCurrentpost(post);
  };

  return (
    <>
      <div className="bg-white mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl text-orange-600 font-bold tracking-tight text-gray-900 sm:text-4xl">Who make this community</h2>

          </div>
          <div className=" mt-4 max-w-2xl rounded-lg ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto ">

              <figcaption class="" onMouseEnter={() => handleHover('images/CEOsimg/Ceo.jpg','Salman Shaikh',"Founder & CEO")}
                onClick={() => handleClick('images/CEOsimg/Ceo.jpg','Salman Shaikh',"Founder & CEO")}>
                <img class="mx-auto h-10 w-10 rounded-full" src="images\CEOsimg\Ceo.jpg" alt="" />
                <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div class="font-semibold text-gray-900">Salman Shaikh</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div class="text-gray-600">Founder & CEO of Travel Tech</div>
                </div>
              </figcaption>
              <figcaption class="mt-10" onMouseEnter={() => handleHover('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80','Farhan Shaikh',"Co-Founder & Salse Head")}
                onClick={() => handleClick('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80','Farhan Shaikh',"Co-Founder & Salse Head")}>
                <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div class="font-semibold text-gray-900">Farhan Shaikh</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div class="text-gray-600">Co-funder of Travel Tech</div>
                </div>
              </figcaption>
              <figcaption class="mt-10" onMouseEnter={() => handleHover('images/CEOsimg/Cto.jpg','Maaz Hussain',"CTO & Sales Head")}
                onClick={() => handleClick('images/CEOsimg/Cto.jpg','Maaz Hussain',"CTO & Sales Head")}>
                <img class="mx-auto h-10 w-10 rounded-full" src="images/CEOsimg/Cto.jpg" alt="" />
                <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div class="font-semibold text-gray-900">Maaz Hussain</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div class="text-gray-600">CTO & Sales Head </div>
                </div>
              </figcaption>


            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-lg bg-gray-50 py-10 text-center  lg:flex lg:flex-col lg:justify-center lg:py-16 " style={{ border: "1px solid orange" }} >
                <div className="mx-auto max-w-xs " >
                  <img
                    src={currentimg}
                    className="h-full w-full object-cover rounded-lg object-center" alt="CEOs"
                  />
                  <div class="mt-2 flex items-center justify-center space-x-3 text-base">
                    <div class="font-semibold text-gray-900">{currenname}</div>
                    <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div class="text-gray-600">{post}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white mt-20">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {peopleData.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
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
