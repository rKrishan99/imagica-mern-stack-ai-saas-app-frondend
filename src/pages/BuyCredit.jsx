import React from "react";
import { plans } from "../assets/assets";
import { motion } from "motion/react";

const BuyCredit = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center min-h-screen"
    >
      <div className="bg-gray-300 px-6 py-2 rounded-full border border-gray-900 mt-18">
        <h1 className="text-gray-900">OUR PLANS</h1>
      </div>

      <h1 className="text-3xl mt-8">Choose the plan</h1>

      <div className="flex flex-wrap justify-center flex-row gap-4 sm:gap-12">
        {plans.map((plans, index) => (
          <div className="mt-12 rounded-lg bg-gradient-to-r from-[#bc619b] via-[#F44336] p-[3px] to-blue-600">
            <div
              className="bg-[#000000] h-full rounded-lg px-12 py-12 w-80"
              key={index}
            >
              <div key={index} className="">
                <img className="w-[40px]" src={plans.img} alt="icon" />
                <h1 className="text-gray-200 mt-4 text-2xl font-medium">
                  {plans.id}
                </h1>
                <p className="text-gray-300 h-12 mt-4">{plans.desc}</p>
                <div className=" flex items-end mt-12">
                  <p className="text-3xl text-gray-200">$ {plans.price}</p>
                  <p className="text-[12px] text-gray-200">
                    {" "}
                    / {plans.credits}
                  </p>
                </div>
                <button className="fixe bg-gray-950 border border-gray-300 px-6 mt-8 py-3 w-full rounded-lg cursor-pointer hover:scale-105 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
