import React from "react";
import { assets, testimonials } from "../assets/assets";
import { motion } from "motion/react";

const Testimonals = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col mt-28 items-center pb-8"
    >
      <h1 className="text-4xl">Cutomer Testimonals</h1>
      <p className="font-light mt-2">What Our Users Are Saying</p>
      <div className="flex justify-center flex-wrap gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-lg bg-gradient-to-r from-[#bc619b] via-red-500 p-[3px] to-blue-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="bg-[#000000] p-12 rounded-lg w-80 h-full m-auto cursor-pointer ">
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt="profile"
                  className="w-20 h-20 rounded-full"
                />
                <h1 className="text-xl font-semibold mt-3">
                  {testimonial.name}
                </h1>
                <p className="text-gray-300 mb-4">{testimonial.role}</p>
                <div className="flex mb-4">
                  {Array(testimonial.star)
                    .fill()
                    .map((item, index) => (
                      <img
                        key={index}
                        src={assets.rating_star}
                        alt="star"
                        className="w-4 h-4"
                      />
                    ))}
                </div>
                <p className="text-center text-sm text-gray-300">
                  {testimonial.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonals;
