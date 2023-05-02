/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaFileInvoiceDollar, FaWaze, FaMotorcycle } from "react-icons/fa";

const OrderPlan = () => {
  return (
    <div className="mt-24 container mx-auto">
      <h1 className="text-center text-4xl font-bold">How it works</h1>
      <div className="flex gap-8">
        <div className="text-center p-12">
          <FaFileInvoiceDollar className="mx-auto w-12 h-12"></FaFileInvoiceDollar>
          <h1 className="text-2xl font-bold p-4">Your Order</h1>
          <p className="text-gray-400">
            Order process involves selecting items, entering shipping/payment
            information and confirmation before the order is processed and
            shipped to the customer.
          </p>
        </div>
        <div className="text-center p-12">
          <FaMotorcycle className="mx-auto w-12 h-12"></FaMotorcycle>
          <h1 className="text-2xl font-bold p-4" >We Cook & Deliver</h1>
          <p className="text-gray-400">
            We cook and deliver refers to a service where meals are prepared by
            a chef or catering service and then delivered directly to the
            customer's specified location.
          </p>
        </div>
        <div className="text-center p-12">
          <FaWaze className="mx-auto w-12 h-12"></FaWaze>
          <h1 className="text-2xl font-bold p-4">Enjoy MealTime</h1>
          <p className="text-gray-400">
            The experience of dining has improved, perhaps through better food
            quality, presentation, or company, leading to a renewed appreciation
            for the act of eating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderPlan;
