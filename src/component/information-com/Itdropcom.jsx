import React, { useState } from 'react';

function Itdropcom(props) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="relative flex items-stretch w-full overflow-hidden bg-gray-100 rounded-lg cursor-pointer" onClick={() => setIsActive(!isActive)}>
                    <span className="flex flex-col items-center justify-center flex-shrink-0 p-4 text-center bg-gray-200">
                        Day<br />
                        <span className="text-2xl font-bold">{props.Day + 1}</span>
                    </span>
                    <div className="flex flex-col justify-center p-4 flex-grow-1">
                        <span className="text-lg font-semibold">{props.Heading}</span>
                    </div>
                    <span className="absolute top-0 bottom-0 right-0 flex items-center justify-center pr-4 focus:outline-none">
                        <i className="fa-solid fa-angle-down" style={{ transform: isActive ? "rotate(180deg)" : "" }}></i>
                    </span>
                </div>
                {isActive ? (
                    <div className="p-4 html-content">
                        <ul>
                            {props.Schedule.map((item, index) => (
                                <li key={index} className="list-disc pl-8">{item.Scheduledetails}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default Itdropcom;
