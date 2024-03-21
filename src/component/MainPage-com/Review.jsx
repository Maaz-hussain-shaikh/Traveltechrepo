import React, { useState } from "react";
import { reviewdata } from "../../Data/CardDetails";

const Review = () => {
  const [showCount, setShowCount] = useState(2);

  return (
    <>
      {reviewdata.slice(0, showCount).map((review, index) => (
        <div key={index} className="ReviewCard_reviewCardBody__gWHEa mt-4 ">
          <div className="ReviewCard_reviewCardItem__MhXzk ReviewCard_reviewHead__j8w1I">
            <div className="ReviewCard_leftSection__SdWRu">
              <div className="ReviewCard_reviewMeta__ThBxo">
                <div className="ReviewCard_reviewerName__Xc68P">{review.name}</div>
                <div className="ReviewCard_reviewTimestamp__y0_Fr">Reviewed: {review.tripdate}</div>
              </div>
            </div>
            <div className="ReviewCard_rightSection___2gjc">
              <span>5.0/5</span>
            </div>
          </div>
          <div className="ReviewCard_reviewCardItem__MhXzk ReviewCard_productDetail__lheBe">
            <span>Booked:<span className="uppercase tracking-wide font-semibold text-gray-700 sm:text-sm">{review.tripname}</span></span>
          </div>
          <div className="text-sm sm:text-lg">{review.comment}</div>
          
        </div>
      ))}
      <div className="nearby-destinations__destinations-bar mt-4">
        <span className="nearby-destinations__destinations-bar-item rounded-lg mx-auto" onClick={() => { setShowCount(showCount + 2) }}>See more</span>
        {showCount > 2 ? (
          <span className="nearby-destinations__destinations-bar-item rounded-lg mx-auto" onClick={() => { setShowCount(2) }}>See less</span>
        ) : null}
      </div>
    </>
  );
}

export default Review;