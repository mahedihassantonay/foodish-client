/* eslint-disable no-unused-vars */
import React from 'react';
import banner from '../../assets/banner.jpg'


const Banner = () => {
    return (
       <>
        <div className="w-full  h-screen relative">
            
            <img className='object-fit w-full lg:h-screen' src={banner} alt="" />
           
            <div className='invisible top-0 sm:visible bg-base-100 absolute  sm:top-40 sm:left-28  md:top-64 md:left-44 lg:top-52 lg:left-64 xl:top-1/3 xl:left-1/3 rounded backdrop-brightness-50 bg-white/10 lg:p-12'>
                <h1 className='text-white font-bold text-xl sm:text-3xl xl:text-5xl text-center lg:p-4 tracking-wider'>Savor the Flavor</h1>
                <p className='text-gray-400 p-1 sm:p-3 sm:pb-4 tracking-widest text-xs md:text-base'>A website that offers a diverse range of recipes from  all over <br /> the world,  with a focus on flavor and culinary experiences</p>
                <div className='text-center sm:p-4'>
                    <button className='btn'>Explore More</button>
                </div>

            </div>
        </div>
       </>
    );
};

export default Banner;