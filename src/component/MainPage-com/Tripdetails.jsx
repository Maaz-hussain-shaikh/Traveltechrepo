import React, { useState, useEffect } from 'react';
import { Maindetailsdata } from '../../Data/CardDetails';
import Tripinformation from "../MainPage-com/Tripinformation";
import { useParams } from 'react-router-dom';
import Loader from '../../Loader';

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
          <>Something is wrong in your pdf file or routing code. Please check.</>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Tripdetails;
