import React, { useState } from 'react';

const Brief = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="mt-2 mb-4 text-2xl font-black text-orange-600 font-bold sm:text-4xl">
        <span className="">{props.name}</span>
      </h1>
      <div>
        <div className="overflow-hidden html-content text-text leading-6 whitespace-pre-line" style={{ maxHeight: showMore ? "100%" : "108px" }}>
          <p>{props.brief}</p>
          <p><br /></p>
        </div>
        <button className="text-sm font-medium focus:outline-none text-orange-600" onClick={toggleShowMore}>
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default Brief;
