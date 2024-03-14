import React from 'react';

const Imgcomponent = ({ updateParentState, imgurl }) => {
  const galleryImages = Object.entries(imgurl);

  const handleClick = () => {
    updateParentState();
  };

  return (
    <>
      <section className="max-w-screen-xl w-full mx-auto pb-12 sm:px-0">
        <button className="fixed right-20 z-50 m-4 leading-none text-black focus:outline-none" onClick={handleClick}>
          <i className="fa-solid fa-xmark text-3xl"></i>
        </button>
        <h2 className="text-2xl font-bold text-left sm:text-4xl">Gallery</h2>
        <div className="flex grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Gallery items */}
          {galleryImages.map(([key, value], index) => (
            <section key={index} className="relative flex-shrink-0 w-full h-full overflow-hidden rounded-lg shadow-xs cursor-pointer hover:shadow-md">
              <div className="flex flex-col sm:flex-row">
                <img src={value} alt={`Gallery ${index}`} className="object-cover w-full h-32 transition duration-500 transform sm:h-56 hover:scale-110 bg-subtitle" />
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default Imgcomponent;