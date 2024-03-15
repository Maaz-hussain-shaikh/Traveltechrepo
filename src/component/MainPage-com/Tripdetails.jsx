import React, { useState, useEffect } from 'react';
import { Maindetailsdata } from '../../Data/CardDetails';
import Tripinformation from "../MainPage-com/Tripinformation";
import { useParams } from 'react-router-dom';
import Loader from '../../Loader';
import Underconstruction from "../../Underconstruction"

const Tripdetails = () => {
  const { info } = useParams();
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    setSelectedTrip(info);
    window.scrollTo(0, 0);
  }, [info]);

  return (
    <>
      {selectedTrip ? (
        Maindetailsdata[selectedTrip]?.info ? (
          <Tripinformation Data={Maindetailsdata[selectedTrip].info} />
        ) : (
      <><Underconstruction/></>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Tripdetails;
