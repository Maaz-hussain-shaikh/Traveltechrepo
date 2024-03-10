import React from 'react';
function Costomercare() {
  return (
    <>
      <div className="reach-out ">
        <div className="container">
          <div className="row center">
            <div className="col-lg-12">
              <div className="bgwhite rounded-lg">
                <div className="row h-100 ">
                  <div className="col-5 col-md-5 col-lg-6 h-md-100 text-center m-auto">
                    <div className="w-full">
                      <div className='careImg '>
                        <img alt="" src="images\Firstpageimgs\Costomer care.png" />
                      </div>
                    </div>
                  </div>
                  <div className="col-7 col-md-7 col-lg-6 m-auto px-md-5 text-md-center p-3 inboubtsbox">
                    <h4 className=" mb-1.5 text-2xl sm:text-4xl font-bold">Lost in Wanderlust? </h4>
                    <p className="t-content mb-1">Don't hesitate &amp; Hit the Button Below and Let's Find Your Perfect Adventure!</p>
                    <a type="button" data-bs-toggle="modal" data-bs-target="#callBackForm" aria-current="page" className="reachus active" href="/">Reach out to us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Costomercare;