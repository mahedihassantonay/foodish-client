/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ChefTable from "./chefTable";
import OrderPlan from "./OrderPlan";
import Review from "./Review";
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lottie from "lottie-react";
import chef from '../../assets/chef.json'

const Home = () => {
  const chefsData = useLoaderData();
  console.log(chefsData);
  return (
    <>
      <Banner />
      <div className="mt-24 ">
        <h1 className="text-center text-4xl font-bold pb-16 flex justify-center items-center">Meet Our <Lottie className="h-28" animationData={chef} loop={true} />;</h1>
        <div className="grid grid-cols-2 gap-8 p-2">
          {chefsData.map((cd) => (
            
              <ChefTable key={cd.id} cd={cd}></ChefTable>
            
          ))}
        </div>
      </div>
      <OrderPlan />
      <Review />
    </>
  );
};

export default Home;
