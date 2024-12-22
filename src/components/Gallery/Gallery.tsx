import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  return (
    <>
    <section className='dark:bg-gray-900' id='gallery'>
        <div className="photo-title">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl uppercase">
        Photos <span className="text-[#0e7490] dark:text-[#0e7490]">
           
              </span>
            </h1>
        </div>
    <div className="photo-header">
        <div className="photo-content ">
            <img src="/pic1.PNG" alt="Photo 1" />
        </div>
        <div className="photo-content">
            <img src="/pic2.PNG" alt="Photo 2" />
        </div>
        <div className="photo-content">
            <img src="/pic3.PNG" alt="Photo 3" />
        </div>
        <div className="photo-content">
            <img src="/pic4.PNG" alt="Photo 4" />
        </div>
        <div className="photo-content">
            <img src="/pic5.png" alt="Photo 5" />
        </div>
        <div className="photo-content">
            <img src="/pic6.png" alt="Photo 6" />
        </div>
        <div className="photo-content">
            <img src="/pic7.png" alt="Photo 7" />
        </div>
        <div className="photo-content">
            <img src="/pic8.png" alt="Photo 8" />
        </div>
        <div className="photo-content">
            <img src="/pic9.png" alt="Photo 9" />
        </div>
    </div>
    </section>
    </>
  );
};

export default Gallery;
