import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliderad = ({ slides, path }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-item">
            <Link className="bXBxlH" to={path}>
              <div className="lg:col-span-4 col-span-2">
                <div className="mt-[0.3rem]">
                  {/* Image for mobile */}
                  <img
                    className="w-full rounded-xl mobile"
                    src={slide.mobsrc}
                    alt="Mobile view"
                  />
                  {/* Image for desktop */}
                  <img
                    className="w-full rounded-xl mob-hide"
                    src={slide.imgsrc}
                    alt="Desktop view"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderad;
