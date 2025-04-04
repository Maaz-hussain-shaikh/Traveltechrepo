import React, {  useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom';

const Packnav = (props) => {
    const locate=useLocation();
    const [isOpen, setIsOpen] = useState(false);
   useEffect(()=>{setIsOpen(false); window.scrollTo(0,0);},[locate])
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <li className="flex flex-col py-2 sm:py-0 px-2  text-dark" style={{ marginLeft: "21px" }}>
                <div className="flex items-center justify-between w-full px-2 py-2 font-semibold sm:px-0 sm:py-0 hover:text-orange focus:outline-none focus:text-orange" >
                    <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => { handleToggle() }}>
                        <i className="fa-solid fa-location-dot" style={{ fontSize: "19px" }}></i>
                        <div className="flex flex-row items-center justify-center cursor-pointer">
                            <i className="fa-solid fa-angle-down" style={{ transform: isOpen ? "rotate(180deg)" : "", marginRight: "5px", marginTop: "6px", fontSize: "13px" }}></i>
                            <p className="mt-1 text-sm font-semibold hover:text-orange-600">{props.name}</p>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="absolute z-10 w-48 mt-14 origin-top-right bg-white rounded-md shadow-lg right-15 ">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {props.url.map((elm, index) => {
                                return (
                                    <Link key={`mylinl${index}`} to={props.url[index].url} className="block py-2 mx-4 text-sm text-gray-700 " role="menuitem" >{props.url[index].name}</Link>
                                )
                            })}
                        </div>
                    </div>
                )}
            </li>
        </>
    )
}

export default Packnav
