/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const ChefTable = ({ cd }) => {
  const { name, image, years_of_experience, number_of_recipes, likes } = cd;
  return (
    <div>
      <div className="card lg:card-side backdrop-opacity-30 backdrop-invert bg-white/90 shadow-xl p-12">
        <figure>
          <img
            src={image}
            alt="Album"
            className="w-96 h-96"
          />
        </figure>
        <div className="card-body p-16">
          <h2 className="card-title text-2xl p-4">{name}</h2>
          <p className="text-lg p-4 font-semibold">Years of experience: {years_of_experience}</p>
          <p className="text-lg p-4 font-semibold">Numbers of recipes: {number_of_recipes}</p>
          <p className="text-lg p-4 font-semibold inline-flex gap-2 items-center"><FaThumbsUp></FaThumbsUp> {likes}</p>
          <div className="p-4">
            <button className="btn normal-case">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefTable;
