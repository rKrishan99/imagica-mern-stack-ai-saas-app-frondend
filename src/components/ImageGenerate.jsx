import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

const ImageGenerate = () => {
  const { image, setImage, setIsImageGenerating, previousGeneratedImages, setPreviousGeneratedImages } = useContext(AppContext);

  const handleClearImage = () => {
    setIsImageGenerating(false);
    setPreviousGeneratedImages([...previousGeneratedImages, image]);
    setImage("");
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div className="relative image-container mt-12 border flex items-center justify-center border-gray-800 bg-[#000000] w-[400px] h-[400px] rounded-lg">
        {image ? (
          <>
            <div className="overlay"></div>
            <img
              onClick={() => handleClearImage()}
              className="absolute cross-icon m-2 w-[20px] right-0 top-0 cursor-pointer hover:scale-110 transition-all duration-300"
              src={assets.cross_icon}
              alt=""
            />
          </>
        ) : (
          <></>
        )}
        {image ? (
          <a
            className="absolute download-icon m-2 w-[24px] left-0 bottom-0 cursor-pointer hover:scale-110 transition-all duration-300"
            href={image}
            download
          >
            <img src={assets.imgDwn} alt="" />
          </a>
        ) : (
          <></>
        )}

        {image ? (
          <img
            className="w-[400px] image-fade-in h-[400px] object-cover rounded-lg cursor-pointer"
            src={image}
          />
        ) : (
          <div class="loader"></div>
        )}
      </div>
    </motion.div>
  );
};

export default ImageGenerate;
