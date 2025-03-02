import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddNewPasswword = () => {
  const { token } = useParams();

  const { isOpenAddNewPassword, setIsOpenAddNewPassword } =
    useContext(AppContext);

  const navigate = useNavigate();
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/user/reset-password', { token, newPassword });
        toast.success(response.data.message);
        navigate('/login');
      } catch (error) {
        toast.error(error.response.data.message);
      }
  };

  return (
    <AnimatePresence>
      {isOpenAddNewPassword && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center"
        >
          <div className="rounded-lg p-[2px] bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600">
            <form
              className="relative flex flex-col items-center bg-black p-10 rounded-lg shadow-lg"
              onSubmit={handleUpdatePassword}
            >
              <img
                onClick={() => setIsOpenAddNewPassword(false)}
                className="absolute top-3 right-3 w-6 cursor-pointer"
                src={assets.cross_icon}
                alt=""
              />
              <img className="w-44" src={assets.logo} alt="" />
              <p className="text-sm mt-6">
                Please Enter your email new password
              </p>
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-10">
                <img src={assets.email_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="password"
                  placeholder="New Password"
                  value={firstPassword}
                  onChange={(e) => setFirstPassword(e.target.value)}
                />
              </div>
              <div className="mt-8 flex items-start w-full">
                <p className="text-sm ml-2 text-gray-400">
                  Confirm your new password
                </p>
              </div>

              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-3">
                <img src={assets.email_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="password"
                  placeholder="Re-Enter New Password"
                  value={secondPassword}
                  onChange={(e) => setSecondPassword(e.target.value)}
                />
              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600 text-white cursor-pointer hover:scale-105 transition-all duration-300 px-7 py-2 rounded-full">
                Upadate Password
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddNewPasswword;
