import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const PasswordResetRequestForm = () => {
  const {
    isOpenForgotPassword,
    setIsOpenForgotPassword,
    setIsOpenAddNewPassword,
    backendUrl,
  } = useContext(AppContext);
  
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log("Email:", email);

    try {
        const response = await axios.post(`${backendUrl}/api/auth/forgot-password`, { email });
        console.log("response:",response.data);
        toast.success(response.data.message);
        } catch (error) {
        console.error(error);
        toast.error(error.response.data.message);
    }
  };

  const handleSendLink = () => {
    setIsOpenForgotPassword(false);
    setIsOpenAddNewPassword(true);
  };

  return (
    <AnimatePresence>
      {isOpenForgotPassword && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center"
        >
          <div className="rounded-lg p-[2px] bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600">
            <form
              className="relative flex flex-col items-center bg-black p-10 rounded-lg shadow-lg"
              onSubmit={onSubmitHandler}
            >
              <img
                onClick={() => setIsOpenForgotPassword(false)}
                className="absolute top-3 right-3 w-6 cursor-pointer"
                src={assets.cross_icon}
                alt=""
              />
              <img className="w-44" src={assets.logo} alt="" />
              <p className="text-sm mt-6">
                Please Enter your email address to reset your password
              </p>
              <div className="border px-6 py-2 w-full flex items-center gap-2 rounded-full mt-10">
                <img src={assets.email_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                onClick={() => handleSendLink()}
                className="mt-8 w-full bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600 text-white cursor-pointer hover:scale-105 transition-all duration-300 px-7 py-2 rounded-full"
              >
                Send Reset Link
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PasswordResetRequestForm;
