import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function Tripcard({ title, data }) {
  const slider = React.useRef(null);
  
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <>
      <div className="card__container">
        <div className="jCihag LaSZC">
          <i className="fa-solid fa-arrow-right text-lg" style={{ transform: "rotate(180deg)" }} onClick={() => slider?.current?.slickPrev()}></i>
          <i className="fa-solid fa-arrow-right text-lg" onClick={() => slider?.current?.slickNext()}></i>
        </div>

        <Slider {...settings} ref={slider} className="card__container inner jCihag">
          {Object.keys(data).map((item, index) => {
            let demolink = data[item].imgurl;
            let imglink = `url(${demolink})`;
            const imgstyle = {
              background: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0) 45%), ${imglink}`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            };

            return (
              <div className="card card__container" key={index}>
                <Link to={data[item].iturl}>
                  <div className="fsssm" style={imgstyle}>
                    <div className="ZJPwW">
                      <div className="iqvMi font-bold text-lg">{data[item].name}</div>
                      <p className="text-white sm:text-lg font-semibold">{item}</p>
                      <div className="cOFiOV">
                        <div className="text-white sm:text-lg font-semibold "></div>
                        <div className="">
                          <p className="text-white sm:text-lx font-semibold">&#8377; {data[item].Price} <span className="text-sm">Per Person/-</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>

        <div className="jCihag second-arrow">
          <i className="fa-solid fa-arrow-right text-lg" style={{ transform: "rotate(180deg)" }} onClick={() => slider?.current?.slickPrev()}></i>
          <i className="fa-solid fa-arrow-right text-lg" onClick={() => slider?.current?.slickNext()}></i>
        </div>
      </div>
    </>
  );
}