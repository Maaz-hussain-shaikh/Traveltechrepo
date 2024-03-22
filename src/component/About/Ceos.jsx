import React, { useState } from 'react'

const Ceos = () => {
    
    const [currenname, setCurrentname] = useState({
        name:"Salman Shaikh",
        position:"CEO",
        url:"images/CEOsimg/Ceo.png",

    });
    
    const handleHover = (newImage, name, post) => {       
        setCurrentname({name:name,url:newImage,position:post});        
    };

    const handleClick = (newImage, name, post) => {
        setCurrentname({name:name,url:newImage,position:post});
    };
    return (
        <>
            <div className="bg-white mt-20">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-center sm:text-2xl  text-2xl  font-bold tracking-tight  sm:text-4xl">Who make this <span className='text-orange-600'>community</span> </h2>

                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center items-center lg:flex-row">

                    <div className="p-2 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-lg text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs">

                                <img src={currenname.url} className="h-full mt-4 w-full object-cover rounded-lg object-center" alt="CEO" />
                                <div className="mt-2 flex items-center justify-center space-x-3 text-base">
                                    <div className="mt-2 flex items-center justify-center space-x-3 text-base">
                                        <div className="font-semibold text-gray-900">{currenname.name}</div>
                                        <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <div className="text-gray-600">{currenname.position}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="max-w-2xl mx-auto justify-center lg:ml-6">

                        <ul className="grid grid-cols-3 mt-4 ">
                            <li onMouseEnter={() => handleHover('images/CEOsimg/Ceo.png', 'Salman Shaikh', "Founder & CEO")}
                                onClick={() => handleClick('images/CEOsimg/Ceo.png', 'Salman Shaikh', "Founder & CEO")}>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-10 w-10 rounded-full" src="images/CEOsimg/Ceo.png" alt="Ceo" />
                                    <div className="mt-2 text-center">
                                        <h3 className="text-base font-semibold leading-7 text-sm tracking-tight text-gray-900">Salman Shaikh</h3>
                                        <p className="text-sm font-semibold leading-6 text-orange-600">CEO</p>
                                    </div>
                                </div>
                            </li>
                            <li onMouseEnter={() => handleHover('images/CEOsimg/farhan.png', 'Farhan Shaikh', "Co-Founder & Salse Head")}
                                onClick={() => handleClick('images/CEOsimg/farhan.png', 'Farhan Shaikh', "Co-Founder & Salse Head")}>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-10 w-10 rounded-full" src="images/CEOsimg/farhan.png" alt="" />
                                    <div className="mt-2 text-center">
                                        <h3 className="text-base font-semibold leading-7 text-sm tracking-tight text-gray-900">Farhan Shaikh</h3>
                                        <p className="text-sm font-semibold leading-6 text-orange-600">COO</p>
                                    </div>
                                </div>
                            </li>
                            <li onMouseEnter={() => handleHover('images/CEOsimg/Cto.png', 'Maaz Hussain', "CTO & Sales Head")}
                                onClick={() => handleClick('images/CEOsimg/Cto.png', 'Maaz Hussain', "CTO & Sales Head")}>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-10 w-10 rounded-full" src="images/CEOsimg/Cto.png" alt="" />
                                    <div className="mt-2 text-center">
                                        <h3 className="text-base font-semibold leading-7 text-sm tracking-tight text-gray-900">Maaz Hussain </h3>
                                        <p className="text-sm font-semibold leading-6 text-orange-600">CTO</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <p className="mt-6 text-sm sm:text-lg leading-2 text-gray-600 text-center">
                            Each captain undergoes rigorous training to ensure they're equipped with the expertise and enthusiasm needed to make every trip truly memorable. Let our talented trip captains transform your travels into cherished memories.
                        </p>
                    </div>
                </div>
            </div>
            {/* 
            <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            
                            <li >
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={currentimg} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">person.name</h3>
                                        <p className="text-sm font-semibold leading-6 text-orange-600">person.role</p>
                                    </div>
                                </div>
                            </li>
                      
                    </ul> */}
        </>
    )
}

export default Ceos
