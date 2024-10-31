import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Tripcard = ({ data }) => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    slidesToShow: 4,
    infinite: false,
    swipeToSlide: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true
        }
      }
    ],
    touchThreshold: 5, // More sensitive swipe
    swipe: true,
    touchMove: true
  };

  return (
    <div className="card__container">
      <div className="arrow-container">
        <i
          className="fa-solid fa-arrow-right text-lg"
          style={{ transform: "rotate(180deg)" }}
          onClick={() => slider.current.slickPrev()}
        ></i>
        <i
          className="fa-solid fa-arrow-right text-lg"
          onClick={() => slider.current.slickNext()}
        ></i>
      </div>
      <div className="jCihag">
        <div className="mx-auto mt-8">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-10">
            <div className="col-span-2 lg:col-span-4">
              <Slider {...settings} ref={slider}>
                {Object.keys(data).map((item, index) => {
                  const tripData = data[item];
                  return (
                    <div key={tripData.id || index} className="px-2">
                      <Link to={tripData.iturl}>
                        <div className="lg:hidden">
                          {/* Mobile View */}
                          <div className="relative">
                            <img
                              alt={tripData.title || "Trip Image"}
                              loading="lazy"
                              width="160"
                              height="230"
                              className="min-h-[230px] w-full rounded-[.5rem] object-cover"
                              src={tripData.imgurl}
                            />
                            <div className="absolute left-0 top-0 h-full w-full rounded-[.5rem] bg-gradient-to-t from-black/90 via-black/0"></div>
                            <div className="absolute bottom-3 left-2 right-2 w-[calc(100%-1rem)] text-white">
                              <h2 className="line-clamp-2 text-[.75rem] font-semibold leading-4">{item}</h2>
                              <div className="flex items-center gap-[0.375rem]">
                                <div className="flex items-center gap-[0.125rem]">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="1em" viewBox="0 0 18 18">
                                    <path fill="currentColor" fillRule="evenodd" d="M17.333 9A8.333 8.333 0 11.667 9a8.333 8.333 0 0116.666 0zM9 4a.833.833 0 00-.833.833v5c0 .46.373.834.833.834h4.167a.833.833 0 100-1.667H9.833V4.833A.833.833 0 009 4z"></path>
                                  </svg>
                                  <p className="text-[0.5rem]">{tripData.day}</p>
                                </div>
                                <div className="h-[0.75rem] w-[1px] bg-white"></div>
                                <div className="flex items-center gap-[0.125rem]">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="1em" viewBox="0 0 20 18">
                                    <path fill="currentColor" d="M15 14a1 1 0 100-2 1 1 0 000 2z"></path>
                                    <path fill="currentColor" fillRule="evenodd" d="M4 1a1 1 0 012 0v1h8V1a1 1 0 112 0v1h1a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3h1V1zM2 15V8h16v7a1 1 0 01-1 1H3a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                  </svg>
                                  <p className="whitespace-nowrap text-[.5rem]">{tripData.Season}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-[0.375rem]">
                                <p className="text-[12px] font-medium text-white line-through">₹ {tripData.discount}</p>
                                <p className="text-[14px] font-medium">₹ {tripData.Price}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Desktop View */}
                        <div className="lg:block hidden">
                          <div className="relative block overflow-hidden rounded-[0.75rem] text-white lg:h-[350px] 2xl:h-[490px]">
                            <img
                              alt={tripData.title || "Trip Image"}
                              loading="lazy"
                              width="390"
                              height="520"
                              className="h-full w-full rounded-[0.75rem] object-cover transition-all duration-300 group-hover:scale-110"
                              src={tripData.imgurl}
                            />
                            <div className="absolute left-0 top-0 h-full w-full rounded-[0.75rem] bg-gradient-to-t from-black to-black/0">
                            </div>
                            {tripData.lable==="Null"?<></>:<>
                    <div className="absolute left-0 lg:top-4 2xl:top-6"><p className="rounded-r-[1.25rem] bg-white py-[0.125rem] pr-5 pl-3 text-red-800 font-bold">{tripData.lable}</p></div>
                  </>}
                            <div className="absolute bottom-0 left-0 right-0 w-full p-2">
                              <div className="flex w-full flex-col gap-2 overflow-hidden">
                                <h6 className="line-clamp-2 text-h6-sm 2xl:text-h6">{item}</h6>
                                <hr />
                                <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 18 18">
                            <path fill="currentColor" fillRule="evenodd" d="M17.333 9A8.333 8.333 0 11.667 9a8.333 8.333 0 0116.666 0zM9 4a.833.833 0 00-.833.833v5c0 .46.373.834.833.834h4.167a.833.833 0 100-1.667H9.833V4.833A.833.833 0 009 4z"></path>
                          </svg>
                          <p>{tripData.day}</p>
                        </div>
                        <div className="h-4 w-[1px] bg-white"></div>
                        <div className="flex items-center gap-[6px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 18">
                            <path fill="currentColor" d="M15 14a1 1 0 100-2 1 1 0 000 2z"></path>
                            <path fill="currentColor" fillRule="evenodd" d="M4 1a1 1 0 012 0v1h8V1a1 1 0 112 0v1h1a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3h1V1zM2 15V8h16v7a1 1 0 01-1 1H3a1 1 0 01-1-1z" clipRule="evenodd"></path>
                          </svg>
                          <p>{tripData.Season}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="inline-flex items-center gap-[0.375rem]">
                          <p className="text-p-xs text-white/60 line-through">₹ {tripData.discount}</p>
                          <p className="text-p-sm 2xl:text-p-lg">₹ {tripData.Price}</p>
                        </div>
                       
                      </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tripcard;
