/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto text-white flex items-center justify-between py-12">
        <h1 className="text-3xl font-bold py-12">Foodish_</h1>
        <div className="flex flex-col gap-3">
          <a>Home</a>
          <a>Plans</a>
          <a>About</a>
        </div>
        <div className="flex flex-col gap-3">
          <a>FAQs</a>
          <a>Contact</a>
          <a>Blog</a>
        </div>
        <div className="flex flex-col gap-3">
          <a>My account</a>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-3">
          <a>Careers</a>
          <a>Services</a>
          <a>Help</a>
        </div>
        <div className="flex flex-col gap-3">
        <p className="text-lg font-semibold">Get in touch:</p>
          <span>Naddapara , Dakshinkahn <br /> 
          Dhaka-1230, BD
          </span>
          
          <a href="#">+8801888688333</a>
        </div>
      </div>

      <hr />
      <p className="text-gray-500 text-center">
        <small>© 2020 Copyright Fooden. All Rights Reserved.</small>
      </p>
    </div>
  );
};

export default Footer;
