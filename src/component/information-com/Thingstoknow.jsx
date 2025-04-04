import React, { useState } from 'react';

const Thingstoknow = (props) => {
const [count,upcount]=useState(3)
  const [showMore, setShowMore] = useState(false);
  function findLargestLengthArray(arrays) {
    let maxLength = 0;
    let largestArray = null;

    arrays.forEach(array => {
        if (array.length > maxLength) {
            maxLength = array.length;
            largestArray = array;
        }
    });

    return largestArray;
}

  const toggleShowMore = () => {
    const arrays = [props.inclusion, props.exclusion, props.thingstotake];
   
const largestArray = findLargestLengthArray(arrays);
    setShowMore(!showMore);
    if (showMore===true){
      upcount(3);
      window.scrollTo(1250, 1250); 
    }else{
      upcount(largestArray.length)
    }
  };

  const renderItems = (items, iconMap) => {
    return items.slice(0, count).map((item, index) => {
      const Icon = iconMap[item.icon];
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
    Trip_Captain:()=><i className="fa-solid fa-person-hiking"></i>,
    Traveler:()=><i className="fa-solid fa-van-shuttle"></i>,
    Gypsy:()=><i className="fa-solid fa-truck-field"></i>,
    Shikara_Ride:()=><i className="fa-solid fa-sailboat"></i>,
    Tickets:()=><i className="fa-solid fa-ticket"></i>,
    Personal_Expenses:()=><i className="fa-solid fa-hand-holding-dollar"></i>,
    Cake:()=><i className="fa-solid fa-cake-candles"></i>,
    Music:()=><i className="fa-solid fa-music"></i>
  };

  const exclusionIcons = {
    expenses: () => <i className="fa-solid fa-hand-holding-dollar"></i>,
    Transport: () => <i className="fa-solid fa-plane-slash"></i>,
    Meals: () => <i className="fa-solid fa-burger"></i>,
    Tickets:()=><i className="fa-solid fa-ticket"></i>,
    Natural_Calamities:()=><i className="fa-solid fa-cloud-sun"></i>,
    Room_Heater:()=><i className="fa-solid fa-temperature-half"></i>,
    Priority_High:()=><i className="fa-solid fa-ban"></i>,
    Rohtang_pass:()=><i className="fa-solid fa-mountain"></i>,
    Tax:()=><i className="fa-solid fa-barcode"></i>,
    Personal_Expenses:()=><i className="fa-solid fa-hand-holding-dollar"></i>,
    Warning:()=><i className="fa-solid fa-triangle-exclamation"></i>,
    Honeymoon_Kit:()=><i className="fa-solid fa-martini-glass-citrus"></i>,
  };

  const thingstotakeIcons = {
    moisturizer: () => <i className="fa-solid fa-hand-sparkles"></i>,
    hiking: () => <i className="fa-solid fa-person-hiking"></i>,
    Umbrella: () => <i className="fa-regular fa-snowflake"></i>,
    Shoes:()=><i className="fa-solid fa-shoe-prints"></i>,
    Moisturizer:()=><i className="fa-solid fa-bottle-droplet"></i>,
    Hiking:()=><i className="fa-solid fa-person-hiking"></i>,
    Essentials:()=><i className="fa-solid fa-battery-full"></i>,
    First_Aid_Kit:()=><i className="fa-solid fa-notes-medical"></i>,
    Reusable_Water_bottle:()=><i className="fa-solid fa-bottle-water"></i>,
    Sim_Card:()=><i className="fa-solid fa-sim-card"></i>,
    Spare_Plastic_Bags:()=><i className="fa-solid fa-bag-shopping"></i>
    
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
            <button className="text-sm font-medium focus:outline-none text-orange-600"  onClick={toggleShowMore} >
        {showMore ? "Show less" : "Show more"}</button>
          </div>
        </div>
        {/* Exclusions */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg">What's not included</h3>
          <div className="flex flex-col space-y-2">
            {renderItems(props.exclusion, exclusionIcons)}
            <button className="text-sm font-medium focus:outline-none text-orange-600"  onClick={toggleShowMore}>
        {showMore ? "Show less" : "Show more"}        </button>
          </div>
        </div>
        {/* Things to take */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-lg">What to carry</h3>
          <div className="flex flex-col space-y-2">
            {renderItems(props.thingstotake, thingstotakeIcons)}
            <button className="text-sm font-medium focus:outline-none text-orange-600" onClick={toggleShowMore} >
        {showMore ? "Show less" : "Show more"}        </button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Thingstoknow;
