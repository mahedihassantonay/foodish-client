/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from  '../../../public/assets/logo.png'



const Header = () => {
  return (
    <div className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between text-white">
        <img className="h-16" src={logo} />
        <ul className="font-semibold flex gap-8">
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
        </ul>
        <button className="btn normal-case">Login</button>
      </div>
    </div>
    
  );
};

export default Header;
 