import React from 'react';
import Itdropcom from './Itdropcom';

const Itdropdown = (props) => {
  return (
    <>
      <div className="flex flex-col mt-6 space-y-6">
        {props.info.map((item, index) => (
          <Itdropcom key={index} Day={index} Schedule={item.Schedule} Heading={item.Heading} />
        ))}
      </div>
    </>
  );
};

export default Itdropdown;
