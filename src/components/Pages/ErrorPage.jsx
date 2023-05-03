/* eslint-disable no-unused-vars */
import React from 'react';
import {  FaExclamationTriangle } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error,status} = useRouteError();
    return (
        <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">

        <FaExclamationTriangle classNameclassName="text-4xl md:text-5xl lg:text-6xl text-red-600 mb-4"></FaExclamationTriangle>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
          Oops! 
          
        </h1> 
        <h1 className="text-3xl md:text-4xl lg:text-9xl font-bold text-gray-800 mb-2">
        {status || 400} 
          
        </h1> 

        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-600 mb-4">
          {error?.message} 
        </h2>
        <Link to='/'>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Go back home
        </button>
        </Link>
      </div>
    </div>
  );
};
    

export default ErrorPage;