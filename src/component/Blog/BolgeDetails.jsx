import React from 'react'

const BolgeDetails = (props) => {
    return (
        <>
            <section className="max-w-screen-xl w-full mx-auto"><img src="https://img.cdn.zostel.com/blog_photo/20240203075810-makm-photography-u0irC_UnbOk-unsplash_1.jpg" alt="inside-the-blue-city-of-india" className="object-cover object-center w-full rounded-b-lg shadow-md sm:rounded-t-lg h-108 sm:h-144 2xl:192" /> 

            <section className="max-w-screen-xl rounded-lg w-full mx-auto px-4 py-4 mt-4 bg-gray-100 sm:px-0">
                <h1 className="mt-2 text-2xl font-black text-orange sm:text-4xl"><span><span>| </span>this is jodhpur trip</span></h1>
                <div className="flex  mt-4">

                    <span className="font-semibold text-text">Tanya Tyagi</span>
                    <p className="ml-2 text-sm  text-gray-500">
                        <span className="inline-block px-2 py-1 text-gray-600 bg-gray-200 rounded">7 min read</span>
                    </p>
                </div>
            </section>

            <section className="">
      <section className="max-w-screen-xl w-full  px-4 sm:px-0">
        <div className="max-w-5xl  my-8 mb-8 blog-content ">
          <p>{props.data.Head}</p>
          <p><br /></p>
          <h1 className='text-4xl'>Best Time to Visit</h1>
          <p>The months from November through February provide the most pleasant weather for visiting Jodhpur. The temperatures can drop to around freezing for short periods in January, making exploring quite enjoyable. October and March also see decent weather in Jodhpur, conducive to appreciating the city. However, Jodhpur experiences intense heat during the summer from April to September due to the arid climate, so if you’re planning to visit the city during these months, do so with proper care.</p>
          <h1 className='text-4xl'>Best Time to Visit</h1>
          <p>The months from November through February provide the most pleasant weather for visiting Jodhpur. The temperatures can drop to around freezing for short periods in January, making exploring quite enjoyable. October and March also see decent weather in Jodhpur, conducive to appreciating the city. However, Jodhpur experiences intense heat during the summer from April to September due to the arid climate, so if you’re planning to visit the city during these months, do so with proper care.</p>
         
         
          <section className="max-w-screen-xl w-full mx-auto mt-4"><img src="https://img.cdn.zostel.com/blog_photo/20240203075810-makm-photography-u0irC_UnbOk-unsplash_1.jpg" alt="inside-the-blue-city-of-india" className="object-cover object-center w-full rounded-b-lg shadow-md sm:rounded-t-lg h-108 sm:h-144 2xl:192" /> </section>

        </div>
      </section>
    </section>
    </section>
        </>
    )
}

export default BolgeDetails
