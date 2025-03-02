import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

const GenerationHistory = () => {
  const { previousGeneratedImages } = useContext(AppContext);

  console.log("Generated Images in gelery:", previousGeneratedImages);

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ delay: 0.2, duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 pb-48"
    >
      <h1 className="text-2xl font-medium text-gray-300">Generation History</h1>
      <div className="mt-6">
        {previousGeneratedImages && previousGeneratedImages.length > 0 ? (
          <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ delay: 0.4, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {previousGeneratedImages
              .slice()
              .reverse()
              .map((image, index) => (
                <div key={index} className="image-container">
                  <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                    <div className="overlay"></div>
                    <a
                      href={image}
                      download
                      className="absolute download-icon right-0 mt-2 mr-2 w-6 cursor-pointer hover:shadow-2xl hover:shadow-gray-900 hover:scale-110 transition-all duration-300"
                    >
                      <img src={assets.imgDwn} alt="Download" />
                    </a>
                    <img
                      className="rounded cursor-pointer w-full max-h-[auto] object-cover"
                      src={image}
                      alt={`Generated Image ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
          </motion.div>
        ) : (
          <p className="text-gray-500">No images available</p>
        )}
      </div>
    </motion.div>
  );
};

export default GenerationHistory;
