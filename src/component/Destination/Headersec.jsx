import React from 'react'

const Headersec = ({name,get,price,descount}) => {
  return (
    <>
      <div className="banner-container">
  <div className="banner-sub-heading">
    <div>Get up to <span>{get}% OFF</span> on</div>
  </div>
  <div className="banner-main-heading">
    <div><span>{name}</span> Tour Packages!</div>
  </div>
  <div className="banner-divider"></div>
  <div className="banner-price-wrapper">
    <div className="banner-price-label">Starting at</div>
    <div className="banner-price">
      <div className="banner-actual-price">INR {price}</div>
      <div className="banner-strike-through-price">INR {descount}</div>
    </div>
  </div>
  <div className="banner-main-button">Request callback</div>
</div>
    </>
  )
}

export default Headersec
