/* eslint-disable no-unused-vars */
import React from 'react';
import banner from '../../../public/assets/banner.jpg'


const Banner = () => {
    return (
       <>
        <div className="w-full h-screen relative">
            
            <img className='object-fit w-full lg:h-screen' src={banner} alt="" />
           
            <div className='bg-base-100 absolute top-1/3 left-1/3 rounded backdrop-brightness-50 bg-white/10 p-12'>
                <h1 className='text-white font-bold text-5xl text-center p-4 tracking-wider'>Savor the Flavor</h1>
                <p className='text-gray-400 p-3 pb-4 tracking-widest'>A website that offers a diverse range of recipes from  all over <br /> the world,  with a focus on flavor and culinary experiences</p>
                <div className='text-center p-4'>
                    <button className='btn'>Explore More</button>
                </div>

            </div>
        </div>
       </>
    );
};

export default Banner;