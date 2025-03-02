import React from "react";
import { HowItWorksData } from "../assets/assets";
import { motion } from "motion/react";

const HowItWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How It Works</h1>
      <p className="text-lg text-gray-400 mb-8">
        Transform Words Into Stunning Images
      </p>
      {HowItWorksData && HowItWorksData.length > 0 ? (
        HowItWorksData.map((step, index) => (
          <div className="w-full max-w-3xl text-sm mb-8 rounded-lg p-[2px] bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600 hover:scale-[1.02] transition-all duration-300">
            <div
              className="flex items-center gap-4 p-5 px-8 bg-[#000000] shadow-md cursor-pointer  rounded-lg"
              key={index}
            >
              <img width={40} className="h-10" src={step.image} alt="" />
              <div>
                <h1 className="text-xl font-medium text-gray">{step.title}</h1>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No steps available</p>
      )}
    </motion.div>
  );
};

export default HowItWorks;
