import React, { useState } from 'react';

function Itdropcom(props) {
    const [update, Active] = useState(false)
    return (
        <>
            <div class="flex flex-col w-full">
                <div class="relative flex items-stretch w-full overflow-hidden bg-gray-100 rounded-lg cursor-pointer" onClick={()=>{Active(!update)}}>
                    <span class="flex flex-col items-center justify-center flex-shrink-0 p-4 text-center bg-gray-200">Day<br />
                        <span class="text-2xl font-bold">{props.Day+1}</span></span>
                    <div class="flex flex-col justify-center p-4 flex-grow-1">
                       <span class="text-lg font-semibold">{props.Heading}</span>
                    </div>
                    <span class="absolute top-0 bottom-0 right-0 flex items-center justify-center pr-4 focus:outline-none">
                        <i class="fa-solid fa-angle-down" style={{ transform: update ? "rotate(180deg)" : "" }}></i>
                    </span>
                </div>
                {update?<>
                    <div class="p-4 html-content">
                    <ul>
                        {
                            props.Schedule.map((item,index)=>{
                                return(<>
                               <ul class="list-disc pl-8">


                                <li>{props.Schedule[index].Scheduledetails}</li>
                                </ul>
                                </>)
                            })
                        }                                               
                    </ul>                   
                   
                   
                </div>
                </>:<></>}
                
            </div>
        </>
    )
}

export default Itdropcom
