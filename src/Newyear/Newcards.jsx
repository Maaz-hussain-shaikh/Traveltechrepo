import React from 'react'
import { Link } from 'react-router-dom'

const Newcards = (props) => {
  const {name,to,Days,imgurl,iturl,Price,season,Discount,lable}= props.Data;
  return (
    <>
      <Link to={iturl}>
              {/* Mobile View */}
              <div className="lg:hidden">
                <div className="relative">
                  <img
                    alt="Brahmatal Trek Christmas and New Year"
                    loading="lazy"
                    width="160"
                    height="230"
                    className="min-h-[230px] w-full rounded-[.5rem] object-cover"
                    src={imgurl}
                  />

                  
                  <div className="absolute left-0 top-0 h-full w-full rounded-[.5rem] bg-gradient-to-t from-black/90 via-black/0">
                  {lable==="Null"?<></>:<>
                    <div className="absolute left-0 top-4 text-[.75rem]"><p className="rounded-r-[1.25rem] bg-white py-[0.125rem] pr-5 pl-3 text-red-800 font-bold">{lable}</p></div>
                  </>}</div>
                  
                  
                  <div className="absolute bottom-3 left-2 right-2 w-[calc(100%-1rem)] text-white">
                    <h2 className="line-clamp-2 text-[.75rem] font-semibold leading-4">{name}</h2>
                    <div className="mt-3 inline-flex max-w-full items-center rounded-md bg-white px-1 py-[0.125rem] text-[.5rem]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 10 14" className="text-blue-800">
                        <path fill="currentColor" d="M5 6.666a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333zM5 .333A4.667 4.667 0 00.335 5c0 3.5 4.667 8.666 4.667 8.666S9.667 8.5 9.667 5A4.667 4.667 0 005.001.333z"></path>
                      </svg>
                      <p className="line-clamp-1 text-black">{to}</p>
                    </div>
                    <div className="flex items-center gap-[0.375rem]">
                      <div className="flex items-center gap-[0.125rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="1em" viewBox="0 0 18 18">
                          <path fill="currentColor" fillRule="evenodd" d="M17.333 9A8.333 8.333 0 11.667 9a8.333 8.333 0 0116.666 0zM9 4a.833.833 0 00-.833.833v5c0 .46.373.834.833.834h4.167a.833.833 0 100-1.667H9.833V4.833A.833.833 0 009 4z"></path>
                        </svg>
                        <p className="text-[0.5rem]">{Days}</p>
                      </div>
                      <div className="h-[0.75rem] w-[1px] bg-white"></div>
                      <div className="flex items-center gap-[0.125rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="1em" viewBox="0 0 20 18">
                          <path fill="currentColor" d="M15 14a1 1 0 100-2 1 1 0 000 2z"></path>
                          <path fill="currentColor" fillRule="evenodd" d="M4 1a1 1 0 012 0v1h8V1a1 1 0 112 0v1h1a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3h1V1zM2 15V8h16v7a1 1 0 01-1 1H3a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                        <p className="whitespace-nowrap text-[.5rem]">{season}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[0.375rem]">
                      <p className="text-[12px] font-medium text-white line-through">₹ {Discount}</p>
                      <p className="text-[14px] font-medium">₹ {Price}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop View */}
              <div className="lg:block hidden">
                <div className="relative block overflow-hidden rounded-[0.75rem] text-white lg:h-[350px] 2xl:h-[490px]">
                  <img
                    alt="Brahmatal Trek Christmas and New Year JustWravel"
                    loading="lazy"
                    width="390"
                    height="520"
                    className="h-full w-full rounded-[0.75rem] object-cover transition-all duration-300 group-hover:scale-110"
                    src={imgurl}
                  />
                  <div className="absolute left-0 top-0 h-full w-full rounded-[0.75rem] bg-gradient-to-t from-black to-black/0"></div>
                  {lable==="Null"?<></>:<>
                    <div className="absolute left-0 lg:top-4 2xl:top-6"><p className="rounded-r-[1.25rem] bg-white py-[0.125rem] pr-5 pl-3 text-red-800 font-bold">{lable}</p></div>
                  </>}
                  
                  <div className="absolute bottom-0 left-0 right-0 w-full p-2">
                    <div className="flex w-full flex-col gap-2 overflow-hidden">
                      <div className="flex flex-col items-start gap-1">
                        <h6 className="line-clamp-2 text-h6-sm 2xl:text-h6">{name}</h6>
                        <div className="inline-flex items-center gap-1 rounded-lg border border-red-500  bg-orange-800 px-2  text-p-xs text-sm ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 10 14">
                            <path fill="currentColor" d="M5 6.666a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333zM5 .333A4.667 4.667 0 00.335 5c0 3.5 4.667 8.666 4.667 8.666S9.667 8.5 9.667 5A4.667 4.667 0 005.001.333z"></path>
                          </svg>
                          <p className="line-clamp-1 capitalize">{to}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 18 18">
                            <path fill="currentColor" fillRule="evenodd" d="M17.333 9A8.333 8.333 0 11.667 9a8.333 8.333 0 0116.666 0zM9 4a.833.833 0 00-.833.833v5c0 .46.373.834.833.834h4.167a.833.833 0 100-1.667H9.833V4.833A.833.833 0 009 4z"></path>
                          </svg>
                          <p>{Days}</p>
                        </div>
                        <div className="h-4 w-[1px] bg-white"></div>
                        <div className="flex items-center gap-[6px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 18">
                            <path fill="currentColor" d="M15 14a1 1 0 100-2 1 1 0 000 2z"></path>
                            <path fill="currentColor" fillRule="evenodd" d="M4 1a1 1 0 012 0v1h8V1a1 1 0 112 0v1h1a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3h1V1zM2 15V8h16v7a1 1 0 01-1 1H3a1 1 0 01-1-1z" clipRule="evenodd"></path>
                          </svg>
                          <p>{season}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="inline-flex items-center gap-[0.375rem]">
                          <p className="text-p-xs text-white/60 line-through">₹ {Discount}</p>
                          <p className="text-p-sm 2xl:text-p-lg">₹ {Price}</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>


            
    </>
  )
}

export default Newcards
