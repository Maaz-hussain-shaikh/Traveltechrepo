import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Search from './component/Serchbar'


const Sslider=()=>{
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
      autoplaySpeed: 2000,
      };

    return(
<>

<Slider {...settings}>

<section className="home" id="home">

    <div className="swiper home-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide" id="Slider1img">
                <div className="box" >
                  
                </div>
            </div>

            
        </div>

        

    </div>

</section>
<section className="home" id="home">

    <div className="swiper home-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide" id="Slider2img">
                <div className="box home2" >
                    <div className="content">
                        <span>never stop</span>
                        <h3>exploring</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                        <a href="/" className="btn">get started</a>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

</section>
<section className="home" id="home">

    <div className="swiper home-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide" id="Slider3img">
                <div className="box" >
                    <div className="content">
                        <span>never stop</span>
                        <h3>exploring</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                        <a href="/" className="btn">get started</a>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

</section>
</Slider>
</>
    );
}
export default Sslider;