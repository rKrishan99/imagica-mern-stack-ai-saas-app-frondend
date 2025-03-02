import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const InputField = () => {
  const { generateImage, setIsImageGenerating, credit, setImage } =
    useContext(AppContext);

  const navigate = useNavigate();

  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Prompt:", prompt);

    if (prompt) {
      console.log("Prompt:", prompt);
      if (credit <= 0) {
        navigate("/buy-credit");
        return;
      }
      setIsImageGenerating(true);
      const generatedImage = await generateImage(prompt);
      if (generatedImage) {
        setImage(generatedImage);
      }
    }
  };

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-between gap-6 mt-10"
    >
      <textarea
        className="w-full bg-[#2a1030] px-8 py-4 text-[10px] placeholder-styles rounded-lg border-2 border-transparent focus:border-[#9338bb] focus:outline-none placeholde:text-gray-900 resize-none"
        type="text"
        rows="1"
        placeholder="Type a prompt..."
        value={prompt}
        onChange={handleInputChange}
        style={{ overflow: "hidden" }}
      />
      <div className="flex justify-end sm:justify-start">
        <button className="flex flex-row items-center  justify-center gap-4 w-[200px] h-[60px] rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 px-8 py-4 bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600">
          <span className="text-lg text-gray-100">Generate</span>
          <div className="flex flex-row items-center gap-1">
            <img className="w-5" src={assets.coins} alt="" />
            <span>{credit}</span>
          </div>
        </button>
      </div>
    </form>
  );
};

export default InputField;
