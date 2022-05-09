import React, { useState } from 'react';
import banner1 from '../../Images/banner1.jpg'
import banner2 from '../../Images/banner2.jpg'
import banner3 from '../../Images/banner3.jpg'
let count =0;
const Banner = () => {
  
    const images = [banner1,banner2,banner3];
    const [currentIndex,setCurrentIndex] = useState(0);
    const handleNext = ()=>{
        count = (count + 1)% images.length;
        setCurrentIndex(count);
    }
    const handlePrev = ()=>{
        count = (currentIndex + images.length - 1) % images.length;
   setCurrentIndex(count);
    }
    return (
        <div className='w-full select-none relative' >
            <div className='aspect-w-16 aspect-h-9'>
                <div className=''>
                <img className='w-full' style={{height: '650px',}} src={images[currentIndex]} alt=''/>
                </div>
            

          

            </div>
           
            <div className='absolute w-full top-1/2  px-16 flex justify-between items-center transform -translate-y-1'>
                <button  onClick={handlePrev} className='text-white font-semibold text-3xl'>Previous</button>
                <button onClick={handleNext} className='text-white font-semibold text-3xl'>Next</button>

            </div>
        </div>
    );
};

export default Banner;