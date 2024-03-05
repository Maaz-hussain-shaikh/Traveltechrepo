import React from 'react';
import { NavLink } from 'react-router-dom';
import Bloge from '../../Data/Bloge/Bloge';

const BlogItem = ({ href, imageSrc, title, date, readTime }) => {
 
  return (
    <NavLink to={href} className="h-full block">
      <div className="group relative w-full overflow-hidden rounded-lg pb-[70%]">
        <div className="absolute inset-0">
          <img
            alt=""
            loading="lazy"
            src={imageSrc}
            className="h-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 h-[60%] w-full rounded-lg bg-gradient-to-t from-black from-0% to-black/0 to-100%"></div>
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-4 transition-all duration-300 group-hover:pb-6">
          <h5 className="line-clamp-2 text-p-lg font-medium tracking-wider text-white">{title}</h5>
          <div className="flex gap-4 text-p-sm leading-4 text-white/80">
            <p>{date}</p>
            <div className="w-[1px] bg-white/80"></div>
            <p>{readTime}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

const BlogList = () => { 

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-9">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
      

       
          {Object.keys(Bloge).map((item,index)=>{ 
            const prodata=Bloge[item]
          return(
            
            <BlogItem key={index} {...prodata} />
          
          
          )})}
          
      
      </div>
      <div className="text-center mt-8">
        <button className="btn-primary-dark">Load More</button>
      </div>
    </div>
  );
};

export default BlogList;
