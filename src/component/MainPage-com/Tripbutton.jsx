import React, { useState } from 'react';
import Tripcard from './Tripcard';
import { useNavigate } from 'react-router-dom';
import { Cardfirst } from "../../Data/CardDetails";

function Tripbutton() {
  const locate = useNavigate()
  const [heading, update] = useState("Group Departures");
  const [current] = useState(Cardfirst);
  
  return (
    <>
      <h1 className="mt-4 text-2xl font-black text-orange-600 font-bold sm:text-4xl"><span className="jCihag"><span>| </span>{heading}</span></h1>

      <div className="nearby-destinations__destinations-bar jCihag">
        <span className="nearby-destinations__destinations-bar-item rounded-lg" onClick={() => { update("Group Departures") }}>Group Departures</span>
        <span className="nearby-destinations__destinations-bar-item rounded-lg" onClick={() => { update("Backpacking Trips"); locate("/")  }} >Long Trips</span>
        <span className="nearby-destinations__destinations-bar-item rounded-lg" onClick={() => { update("Weekend Trips") }}>Weekend Trips</span>
      </div>
      
      <Tripcard title="Trending Trips" data={current} />
    </>
  );
}

export default Tripbutton;
