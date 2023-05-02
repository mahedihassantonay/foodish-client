/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Review = () => {
    return (
        <div className="mt-24 container mx-auto mb-12">
      <h1 className="text-center text-4xl font-bold">What people say</h1>
      <div className='flex gap-8 p-8'>
        <div className='text-center'>
            <p className='text-gray-400 pb-3'>"The pasta was cooked perfectly and the sauce had a great balance of flavors. Will be back for more!"</p>
            <img className='rounded-full w-16 mx-auto' src="https://randomuser.me/api/portraits/men/82.jpg" alt="" />
            <h3 className='font-semibold p-2'>Jacob</h3>
        </div>
        <div className='text-center'>
            <p className='text-gray-400 pb-3'>"The pasta was cooked perfectly and the sauce had a great balance of flavors. Will be back for more!"</p>
            <img className='rounded-full w-16 mx-auto' src="https://randomuser.me/api/portraits/women/60.jpg" alt="" />
            <h3 className='font-semibold p-2'>Angela</h3>
        </div>
        <div className='text-center'>
            <p className='text-gray-400 pb-3'>"The pasta was cooked perfectly and the sauce had a great balance of flavors. Will be back for more!"</p>
            <img className='rounded-full w-16 mx-auto' src="https://randomuser.me/api/portraits/men/33.jpg" alt="" />
            <h3 className='font-semibold p-2'>William</h3>
        </div>
      </div>

        </div>
    );
};

export default Review;