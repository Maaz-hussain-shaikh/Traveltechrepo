import React, { useState } from 'react'

const Ceos = () => {
    const Salman="Salman is a visionary travelpreneur with an experience of leading more than 200 community trips. He’s fond of all kinds of voyages, He can hold a conversation around business, human values and almost everything one can think of. The man knows how to get down to work and party, equally well."
    const Farhan="With a wealth of experience leading outdoor excursions on over 50+ trips, Farhan is the driving force behind the seamless operation of all our group departures! As the leader of our most critical initiatives, Farhan single-handedly manages the logistics and operations of our adventures."
    const Maaz="Meet Our Chief Technology Officer Maaz, the powerhouse behind our technical innovations and the maestro of adventure! With a keen eye for problem-solving and a thirst for excitement, Maaz seamlessly blends technology and exploration. Whether he's crafting groundbreaking solutions or embracing the thrill of adventure, Maaz brings boundless energy and expertise to every endeavor"
    
    const [currenname, setCurrentname] = useState({
        name:"Salman Shaikh",
        position:"CEO",
        url:"images/CEOsimg/Ceo.png",
        intro:Salman

    });
    
    const handleHover = (newImage, name, post,intro) => {       
        setCurrentname({name:name,url:newImage,position:post,intro:intro});        
    };

    const handleClick = (newImage, name, post,intro) => {
        setCurrentname({name:name,url:newImage,position:post,intro:intro});
    };
    return (
        <>
            <div className="bg-white mt-20">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-center sm:text-2xl  text-2xl  font-bold tracking-tight  sm:text-4xl">Who make this <span className='text-orange-600'>Community</span> </h2>

                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center items-center lg:flex-row">

                    <div className="p-2 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-lg text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs">

                                <img src={currenname.url} className="h-full mt-4 w-full object-cover rounded-lg object-center" alt="CEO of Travel Tech Dewas" />
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
                            <li onMouseEnter={() => handleHover('images/CEOsimg/Ceo.png', 'Salman Shaikh', "Founder & CEO",Salman)}
                                onClick={() => handleClick('images/CEOsimg/Ceo.png', 'Salman Shaikh', "Founder & CEO",Salman)}>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-10 w-10 rounded-full" src="images/CEOsimg/Ceo.png" alt="Mr. Salman CEO Of travel tech" />
                                    <div className="mt-2 text-center">
                                        <h3 className="text-base font-semibold leading-7 text-sm tracking-tight text-gray-900">Salman Shaikh</h3>
                                        <p className="text-sm font-semibold leading-6 text-orange-600">Founder & CEO</p>
                                    </div>
                                </div>
                            </li>
                            <li onMouseEnter={() => handleHover('images/CEOsimg/farhan.png', 'Farhan Shaikh', "Co-Founder",Farhan)}
                                onClick={() => handleClick('images/CEOsimg/farhan.png', 'Farhan Shaikh', "Co-Founder",Farhan)}>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-10 w-10 rounded-full" src="images/CEOsimg/farhan.png" alt="" />
                                    <div className="mt-2 text-center">
                                        <h3 className="text-base font-semibold leading-7 text-sm tracking-tight text-gray-900">Farhan Shaikh</h3>
                                        <p className="text-sm font-semibold leading-6 text-orange-600">CO-founder</p>
                                    </div>
                                </div>
                            </li>
                            <li onMouseEnter={() => handleHover('images/CEOsimg/Cto.png', 'Maaz Hussain', "CTO ",Maaz)}
                                onClick={() => handleClick('images/CEOsimg/Cto.png', 'Maaz Hussain', "CTO ",Maaz)}>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-10 w-10 rounded-full" src="images/CEOsimg/Cto.png" alt="Mr. Maaz Hussain CTO of Travel Tech Dewas" />
                                    <div className="mt-2 text-center">
                                        <h3 className="text-base font-semibold leading-7 text-sm tracking-tight text-gray-900">Maaz Hussain </h3>
                                        <p className="text-sm font-semibold leading-6 text-orange-600">CTO</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <p className="mt-6 text-sm sm:text-lg leading-2 text-gray-600 text-center">
                        {currenname.intro}
                        </p>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Ceos
