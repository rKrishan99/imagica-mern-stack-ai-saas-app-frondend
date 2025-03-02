import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const IntroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center pb-16"
    >
      <h1 className="text-3xl text-center sm:text-4xl font-semibold mb-2">
        Transform Words into Stunning AI Art
      </h1>
      <p className="text-gray-400 text-center mb-8">
        Bring your imagination to life with AI-generated visuals
      </p>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col items-center justify-center mt-8 gap-6 md:flex-row md:w-[40%]">
          
          <img
            className="w-[250px] h-full xl:w-[200px] xl:h-full xl:mt-8 rounded-[6px] hover:scale-105 transition-all duration-500"
            src={assets.intro_sec_img_1}
            alt=""
          />
          <img
            className="w-[250px] h-full xl:w-[200px] xl:h-full xl:mb-8 rounded-[6px] hover:scale-105 transition-all duration-500"
            src={assets.intro_sec_img_2}
            alt=""
          />
        </div>
        <div className="flex flex-col pt-12 gap-6 md:w-[50%]">
          <h1 className="text-gray-300 text-2xl">
            Experience the Power of AI Image Creation
          </h1>
          <p className="text-gray-400 font-light">
            Turn simple text into breathtaking images with our advanced AI
            generator. Whether you need unique artwork, product mockups, or
            creative concepts, our tool seamlessly transforms your ideas into
            visually stunning masterpieces.
          </p>
          <p className="text-gray-400 font-light">
            Just type a description, and let AI do the rest—bringing your vision
            to reality in seconds. From fantasy characters to futuristic
            landscapes, the possibilities are endless. Start creating today and
            unlock a new world of creativity!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSection;
