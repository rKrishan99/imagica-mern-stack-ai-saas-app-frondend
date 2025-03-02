import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { CSpinner } from '@coreui/react'

const Hero = () => {
  const navigate = useNavigate();

  const { user, setIsOpenLogin } = useContext(AppContext);

  const handleNavigation = () => {
    if (!user) {
      setIsOpenLogin(true);
      return;
    } else {
      navigate("/result");
    }
  };

  return (
    <motion.div
      className="flex flex-col mt-24 items-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex gap-2 mb-6 w-auto text-gray-300 px-6 py-2 rounded-full border border-gray-300"
        initial={{ opacity: 0.2, y: -20 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Turn Ideas into Art – Instantly!</h1>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1
        className="md:text-6xl text-center md:max-w-[700px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10"
        initial={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 2 }}
        animate={{ opacity: 1 }}
      >
        Transform Words into Stunning{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b85fa2] via-red-500 to-blue-600">
          Images
        </span>{" "}
        Instantly.
      </motion.h1>

      <motion.p
        className="text-center max-w-[300px] sm:max-w-[590px] mt-12 text-gray-300"
        initial={{ opacity: 0.2, y: 20 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Unleash the power of AI and bring your imagination to life. Just type
        your idea, and let AI create breathtaking visuals in seconds.
      </motion.p>
      <div class="relative group cursor-pointer mt-20 mb-12 rounded-full">
        <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <motion.div
          class="relative bg-white ring-1 ring-gray-900/5 rounded-full "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          transition={{
            default: { delay: 0.2 },
            opacity: { delay: 0.8, duration: 0.8 },
          }}
          animate={{ opacity: 1 }}
        >
          <button
            onClick={() => handleNavigation()}
            class="flex justify-center px-8 bg-gradient-to-bl from-red-800 to-violet-800 group-hover:from-gray-950 group-hover:to-violet-800 rounded-full py-[10px] items-center gap-3 sm:text-lg w-auto font-light text-black cursor-pointer"
          >
            <p className="text-gray-200">Generates Images</p>
            <img className="h-6" src={assets.star_group} alt="" />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-wrap gap-2 mt-8 items-center justify-center"
        initial={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
        animate={{ opacity: 1 }}
      >
        {assets.generatedImages && assets.generatedImages.length > 0 ? (
          assets.generatedImages.map((image, index) => (
            <motion.img
              whileHover={{ scale: 1.05 }}
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer w-[60px] max-lg:w-[60px] max-sm:w-10 "
              key={index}
              src={image}
              alt=""
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </motion.div>
      <motion.p
        className="mt-2 font-light text-[14px] text-gray-300"
        initial={{ opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        animate={{ opacity: 1 }}
      >
        Generated images from imagica
      </motion.p>
    </motion.div>
  );
};

export default Hero;
