import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";

const GenerateBtn = () => {
  const navigate = useNavigate();

  const { user, setIsOpenLogin } = useContext(AppContext);

  const handleNavigation = () => {
    if (!user) {
      setIsOpenLogin(true);
      return;
    } else {
      navigate("/result");
      return;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col mt-24 items-center pb-28"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-gray-200 py-6 md:py-16">
        See the magic. Try now
      </h1>
      <div class="relative group cursor-pointer rounded-full">
        <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative bg-white ring-1 ring-gray-900/5 rounded-full ">
          <button
            onClick={() => handleNavigation()}
            class="flex justify-center px-8 bg-gradient-to-bl from-red-800 to-violet-800 group-hover:from-gray-950 group-hover:to-violet-800 rounded-full py-[10px] items-center gap-3 sm:text-lg w-auto font-light text-black cursor-pointer"
          >
            <p className="text-gray-200">Generates Images</p>
            <img className="h-6" src={assets.star_group} alt="" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GenerateBtn;
