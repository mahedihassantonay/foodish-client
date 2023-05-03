/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { FaRegHeart } from "react-icons/fa";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import "@smastrom/react-rating/style.css";

const ChefRecipe = () => {
  const chefDetails = useLoaderData();
  const [favourite, setFavourite] = useState(false)
  const {
    name,
    image,
    short_bio,
    years_of_experience,
    number_of_recipes,
    likes,
    recipes,
    cooking_method,
    
  } = chefDetails;

  const handleFavourite = ()=>{
    toast('your favourite recipe is added')
    setFavourite(true)
  }
  return (
    <>
      <div className="bg-gray-800  pb-16">
        <div className="container mx-auto flex justify-between bg-gradient-to-r from-gray-700 to-stone-500 mb-8 h-96 rounded ">
          <div className="text-white lg:py-12 lg:px-32 tracking-widest">
            <h3 className="font-semibold text-xl">Name: {name} </h3> <br />
            <p className="text-gray-300">
              <span className="font-semibold">About Chef:</span> {short_bio}{" "}
            </p>{" "}
            <br />
            <p className="text-lg  font-semibold">
              Years of experience: {years_of_experience}
            </p>{" "}
            <br />
            <p className="text-lg  font-semibold">
              Numbers of recipes: {number_of_recipes}
            </p>{" "}
            <br />
            <p className="text-lg  font-semibold inline-flex gap-2 items-center">
              <FaThumbsUp></FaThumbsUp> {likes}
            </p>
          </div>

          <img className="p-4" src={image} alt="" />
        </div>

        <div>
          <h1 className="text-white text-center font-bold text-4xl py-12">
            Chef's Special Recipe
          </h1>
          <div className="container mx-auto flex flex-col gap-8">
            {recipes.map((r) => (
              <div key={r.id} className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={r.image}
                    alt="Movie"
                    className="w-96 h-96 hover:opacity-50"
                  />
                </figure>
                <div className="card-body tracking-widest">
                  <h2 className="card-title text-2xl">{r.name}</h2>
                  <div className="">
                    <p className="font-semibold text-lg text-black">
                      Ingredients:
                      <span className="grid grid-cols-3 font-normal text-gray-500">
                        {r.ingredients.map((i) => (
                          <li>{i}</li>
                        ))}{" "}
                      </span>
                    </p>{" "}
                    <br />
                    <p className="text-lg text-gray-500">
                      <span className="font-semibold text-black">
                        Cooking Method:{" "}
                      </span>
                      {cooking_method}
                    </p>{" "}
                    <br />
                    <p className="flex items-center gap-4">
                      <Rating
                        style={{ maxWidth: 150 }}
                        value={r.rating}
                        readOnly
                      />
                      <span>{r.rating}</span>
                    </p>
                  </div>
                  <div className="mt-auto text-center">
                    <button onClick={handleFavourite} disabled={favourite} className="btn normal-case">
                      <FaRegHeart></FaRegHeart>{" "}
                      <span className="pl-1">Favourite</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center p-16">
          <Link to='/'><button className="btn text-lg">Go Back</button></Link>
        </div>
      </div>

      <hr />
    </>
  );
};

export default ChefRecipe;
