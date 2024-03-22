import React from "react";


const Footer = () => {
    const phoneNumber = '8871658568';
    const message = 'Hey Travel tech I want to Schedule my Trip'; 
  
    // Encode phone number and message for URL
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
  
    
    const whatsappLink = `https://wa.me/${encodedPhoneNumber}?text=${encodedMessage}`;

    return (
        <>

            <div className="azDuO dlSUAt jCihag mt-4">

                <div className="hdwgFu">
                <a href="https://www.instagram.com/traveltech__/" target="_blank" rel="noopener noreferrer">
                    <li className="flex flex-col py-2 sm:py-0 px-2  text-dark">
                        <div className="flex items-center justify-between w-full px-2 py-2 font-semibold sm:px-0 sm:py-0 hover:text-orange focus:outline-none focus:text-orange" href="/zostel">
                            <div className="flex flex-col items-center justify-center cursor-pointer">
                                <i className="fa-brands fa-instagram" style={{ fontSize: "22px" }}></i>
                                <div className="flex flex-row items-center justify-center cursor-pointer">
                                    <p className="mt-1 text-sm font-semibold ">instagram</p>
                                </div>
                            </div>
                        </div>
                    </li></a>
                    <a href="https://www.facebook.com/Traveltechindia0/" target="_blank" rel="noopener noreferrer">
                    <li className="flex flex-col py-2 sm:py-0 px-2  text-dark">
                        <div className="flex items-center justify-between w-full px-2 py-2 font-semibold sm:px-0 sm:py-0 hover:text-orange focus:outline-none focus:text-orange" href="/zostel">
                            <div className="flex flex-col items-center justify-center cursor-pointer">
                                <i className="fa-brands fa-facebook-f" style={{ fontSize: "22px" }}></i>
                                <div className="flex flex-row items-center justify-center cursor-pointer">
                                    <p className="mt-1 text-sm font-semibold ">facebook</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    </a>
                    <a href="https://www.youtube.com/@Traveltechindia" target="_blank" rel="noopener noreferrer">
                    <li className="flex flex-col py-2 sm:py-0 px-2  text-dark">
                        <div className="flex items-center justify-between w-full px-2 py-2 font-semibold sm:px-0 sm:py-0 hover:text-orange focus:outline-none focus:text-orange" href="/zostel">
                            <div className="flex flex-col items-center justify-center cursor-pointer">
                                <i className="fa-brands fa-youtube" style={{ fontSize: "22px" }}></i>
                                <div className="flex flex-row items-center justify-center cursor-pointer">
                                    <p className="mt-1 text-sm font-semibold ">Youtube</p>
                                </div>
                            </div>
                        </div>
                    </li></a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <li className="flex flex-col py-2 sm:py-0 px-2  text-dark">
                        <div className="flex items-center justify-between w-full px-2 py-2 font-semibold sm:px-0 sm:py-0 hover:text-orange focus:outline-none focus:text-orange" href="/zostel">
                            <div className="flex flex-col items-center justify-center cursor-pointer">
                                <i className="fa-brands fa-whatsapp" style={{ fontSize: "23px" }}></i>
                                <div className="flex flex-row items-center justify-center cursor-pointer">
                                    <p className="mt-1 text-sm font-semibold ">Whatsapp</p>
                                </div>
                            </div>
                        </div>
                    </li>
            </a>

                </div>
                <div className="dlSUAt">
                    <div className="ihYVFb">address</div>
                    <div className="jGTbPl">Travel tech PVT LTD</div>
                    <div className="jGTbPl">187 Swastik Nagar ujjain road, Dewas, madhya pradesh-455001</div></div>
                <div className="beCaIP">
                    <a href="mailto:traveltech1111@gmail.com" className="kSOouz">traveltech1111@gmail.com</a>
                    <a href="tel:8871658568" className="kSOouz">+91 8871658568</a>
                    <a href="/" className="kSOouz">www.traveltech.com</a>
                </div>
            </div>

        </>
    );

}
export default Footer;