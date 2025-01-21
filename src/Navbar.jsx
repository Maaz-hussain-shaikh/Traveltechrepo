import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropnav from "./Dropnav";
import Packnav from "./Packnav";

const tripdata = [{
    name: 'Pachmarhi',
    url: "Details/Pachmarhi"
},{
    name: 'Kanha Kisli',
    url: "Details/Kanahkisli"
},
{
    name: 'Udaipur',
    url: "Details/Udaipur"
},{
    name: 'Lonavala Khandala',
    url: "Details/Lonavala"
},
{
    name: 'Manali',
    url: "Details/Manali"
},
{
    name: 'Kashmir',
    url: "Details/Kashmir"
},
{
    name: 'Goa',
    url: "Details/Goa"
},{
    name: 'Ladakh',
    url: "Details/leh_13day"
},{
    name: 'Kerala',
    url: "Details/Kerala 4n5d"
},
]


const Navbar = () => {
    const [showtrip, upshowtrip] = useState(false);   
    const [mobileOff, update] = useState(true);
    const Navigate = useNavigate();


    const Navlinks = (props) => {
        return (<>
            <li className="flex flex-col py-1 sm:py-0 px-1  text-dark" style={{ marginLeft: "21px" }}>
                <div className="flex items-center justify-between w-full px-2 py-2 font-semibold sm:px-0 sm:py-0 hover:text-orange focus:outline-none focus:text-orange" >
                    <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => { Navigate(props.url) }}>
                        <i className={props.icon} style={{ fontSize: "19px" }}></i>
                        <div className="flex flex-row items-center justify-center cursor-pointer">
                            <p className="mt-1 text-sm font-semibold hover:text-orange-600 ">{props.name}</p>
                        </div>
                    </div>
                </div>
            </li>
        </>)
    }
    const NavlinksBar = (props) => {
        return (<>
            <li className="flex flex-col text-dark  cursor-pointer" onClick={() => { Navigate(props.url); update(!mobileOff); }}>
                <div to={props.url} className="-mx-3 block  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                    <i className={props.icon} style={{ fontSize: "21px", marginRight: "10px" }}></i><span className="">{props.name}</span>
                </div>
            </li>
        </>)
    }
    return (
        <>
            <header className="header sticky">
                <Link to="/" className="logo text-sm"> <img src="/images/traveltech logo.png" alt="main logo" fetchpriority="high" style={{ maxWidth: "50px", marginRight: "12px" }} /> Traveltech              
                 </Link>
                 
                <nav className="navbar">
                    <div id="nav-close" className="fas fa-times"></div>
                    {/* {<Navlinks name='X-mas & New year' url='/X-mas' icon="fa-solid fa-sleigh" />} */}
                    {<Packnav name="Group Trip" url={tripdata} />}
                    {<Navlinks name='Corporate Tours' url='/Corporate' icon="fa-solid fa-laptop" />}
                    {<Navlinks name='About us' url='/About' icon="fa-solid fa-paperclip" />}
                    {<Dropnav name='Community' />}
                    {/* {<Navlinks name='Franchise' url='/Franchise' icon="fa-solid fa-briefcase" />} */}
                    {<Navlinks name='Travel Essentials' url='/Travelshop' icon="fa-solid fa-bag-shopping" />}
                </nav>
                <div className="hidden-bar" onClick={() => { update(!mobileOff) }}>

                    <i className="fa-solid fa-bars "></i>
                </div>


            </header>

            <div className={mobileOff ? 'nonactive-bar' : 'active-bar'} >
                <div className="fixed inset-0 bar-index" />
                <div className="fixed inset-y-0 right-0 bar-index w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <img src="/images/traveltech logo.png" alt="main logo" style={{ maxWidth: "55px" }} />
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"

                        >
                            <span className="sr-only">Close menu</span>
                            <i className="fa-solid fa-xmark" onClick={() => { update(!mobileOff) }}></i>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {/* {<NavlinksBar name='X-mas & New Year' url='/X-mas' icon="fa-solid fa-sleigh" />} */}
                                <li className="flex flex-col text-dark  cursor-pointer" onClick={() => { upshowtrip(!showtrip) }}>
                                    <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        <i className="fa-solid fa-location-dot" style={{ fontSize: "21px", marginRight: "10px" }}></i>Packages
                                    </div>
                                </li>
                                {
                                    showtrip ? <>{
                                        tripdata.map((elem, index) => {
                                            return (<>
                                                <Link
                                                    to={tripdata[index].url} onClick={() => { update(!mobileOff); }}
                                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                >
                                                    {tripdata[index].name}
                                                </Link>
                                            </>)

                                        })
                                    }</> : <></>
                                }

                                {<NavlinksBar name='Corporate Tours' url='/Corporate' icon="fa-solid fa-laptop" />}
                                {<NavlinksBar name='About us' url='/About' icon="fa-solid fa-paperclip" />}

                                {<NavlinksBar name='Franchise' url='/Franchise' icon="fa-solid fa-briefcase" />}
                                {<NavlinksBar name='Travel Essentials' url='/Travelshop' icon="fa-solid fa-bag-shopping" />}
                            </div>

                            <div className="py-6">
                                <Link
                                    to="https://wa.me/+91 8982001240?text=Hey travel tech I want to book upcoming trip with you"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7   bg-orange-600">
                                    WhatsApp us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          

        </>
    );
}
export default Navbar;