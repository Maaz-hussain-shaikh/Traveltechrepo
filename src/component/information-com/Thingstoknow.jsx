import React from 'react';

const Thingstoknow = (props) => {
  const renderItems = (items, iconMap) => {
    return items.map((item, index) => {
      const Icon = iconMap[item.name];
      return (
        <div key={index} className="flex flex-col p-2 rounded-lg border border-gray-200 space-y-1">
          {Icon && <Icon />}
          <span className="font-semibold">{item.name}</span>
          <div className="text-xs">
            <p>{item.inc}</p>
          </div>
        </div>
      );
    });
  };

  const inclusionIcons = {
    Transport: () => <i className="fa-solid fa-car-side"></i>,
    Accommodation: () => <i className="fa-solid fa-bed"></i>,
    Meals: () => <i className="fa-solid fa-utensils"></i>,
  };

  const exclusionIcons = {
    expenses: () => <i className="fa-solid fa-hand-holding-dollar"></i>,
    Transport: () => <i className="fa-solid fa-plane-slash"></i>,
    Meals: () => <i className="fa-solid fa-burger"></i>,
  };

  const thingstotakeIcons = {
    moisturizer: () => <i className="fa-solid fa-hand-sparkles"></i>,
    hiking: () => <i className="fa-solid fa-person-hiking"></i>,
    Umbrella: () => <i className="fa-regular fa-snowflake"></i>,
  };

  return (
    <div className="flex flex-col w-full mt-8">
      <div className="flex flex-col">
        <h2 className="text-2xl  font-bold">Things to know</h2>
        <span className="font-medium text-text">Before you go</span>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 mt-6 sm:grid-cols-3">
        {/* Inclusions */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg">What's included</h3>
          <div className="flex flex-col space-y-2">
            {renderItems(props.inclusion, inclusionIcons)}
          </div>
        </div>
        {/* Exclusions */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg">What's not included</h3>
          <div className="flex flex-col space-y-2">
            {renderItems(props.exclusion, exclusionIcons)}
          </div>
        </div>
        {/* Things to take */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg">What to carry</h3>
          <div className="flex flex-col space-y-2">
            {renderItems(props.thingstotake, thingstotakeIcons)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thingstoknow;
