import React from 'react'
const galleryItems = [
  { imageUrl: 'https://img.cdn.zostel.com/zostel/gallery/images/pO38zw7GRKiKSMDrxckgnw/experience-vietnam-20240206094334.png?h=400' },
  { imageUrl: 'https://img.cdn.zostel.com/zostel/gallery/images/PuwhnYd7RoqxpqO81VP2OQ/experience-vietnam-20240206094322.png?h=400' },
  // Add more gallery items as needed
];
const Imgcomponent = ({ updateParentState }) => {
  const handleClick = () => {
   
    updateParentState();
  };
  return (
    <>
     <section className="max-w-screen-xl w-full mx-auto  pb-12 sm:px-0">
      <button className="fixed  right-20 z-50 m-4 leading-none text-black focus:outline-none" onClick={handleClick}>
      <i class="fa-solid fa-xmark text-3xl " ></i>
      </button>
      <h2 className="text-2xl font-bold text-left sm:text-4xl">Gallery</h2>
      <div className="mb-8 overflow-x-auto scroll-hidden">
        
      </div>
      <div className="flex grid grid-cols-2 gap-4 sm:grid-cols-4">
        {/* Gallery items */}
        {galleryItems.map((item, index) => (
          <section key={index} className="relative flex-shrink-0 w-full h-full overflow-hidden rounded-lg shadow-xs cursor-pointer hover:shadow-md">
            <div className="flex flex-col sm:flex-row">
              <img src={item.imageUrl} alt="gal" className="object-cover w-full h-32 transition duration-500 transform sm:h-56 hover:scale-110 bg-subtitle" />
            </div>
          </section>
        ))}
      </div>
    </section>
    </>
  )
}

export default Imgcomponent
