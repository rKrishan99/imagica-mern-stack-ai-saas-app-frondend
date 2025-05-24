import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "motion/react";
import axios from "axios";
import { toast } from "react-toastify";
import GoogleSignIn from "./GoogleSignIn";

const Login = () => {
  const {
    isOpenLogin,
    setIsOpenLogin,
    setIsOpenSignup,
    backendUrl,
    setToken,
    setUser,
    setPreviousGeneratedImages,
    setIsOpenForgotPassword,
  } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/login`, {
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        console.log("This is Token:", data.token);
        setToken(data.token);
        setUser(data.user);
        setPreviousGeneratedImages(data.user.generatedImages);
        localStorage.setItem("token", data.token);
        setIsOpenLogin(false);

        toast.success("Login Success");

        setEmail("");
        setPassword("");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.response?.status === 401) {
        toast.error("Invalid email or password");
      } else if (error.response?.status === 404) {
        toast.error("User not found");
      } else if (error.code === "ERR_NETWORK") {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  const hadleClickSignup = () => {
    setIsOpenLogin(false);
    setIsOpenSignup(true);
  };

  const hadleClickForgotPassword = () => {
    setIsOpenLogin(false);
    setIsOpenForgotPassword(true);
  };

  return (
    <AnimatePresence>
      {isOpenLogin && (
        <motion.div
          key="login-modal"
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
                onClick={() => setIsOpenLogin(false)}
                className="absolute top-3 right-3 w-6 cursor-pointer"
                src={assets.cross_icon}
                alt=""
              />
              <img className="w-44" src={assets.logo} alt="" />
              {/* <h1 className="text-center mt-8 text-3xl text-netral-600">
                Login
              </h1> */}
              <p className="text-sm mt-6">
                Wellcome back! Please sign in to continue
              </p>
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-10">
                <img src={assets.email_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.lock_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-start w-full mt-3">
                <span
                  onClick={() => hadleClickForgotPassword()}
                  className="text-sm text-gray-300 cursor-pointer hover:text-[#bc619b] transition-colors duration-300"
                >
                  Forgot Password?
                </span>
              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600 text-white cursor-pointer hover:scale-105 transition-all duration-300 px-7 py-2 rounded-full">
                Login
              </button>
              <div>
                <p className="text-sm mt-2">
                  Don't have an account?
                  <span
                    onClick={() => hadleClickSignup()}
                    className="text-[#bc619b] cursor-pointer"
                  >
                    Sign up
                  </span>
                </p>
              </div>
              <div className="flex flex-row w-full gap-2 justify-center items-center mt-3">
                <div className="w-full h-[0.5px] bg-gray-400"></div>
                <span className="text-gray-400">or</span>
                <div className="w-full h-[1px] bg-gray-400"></div>
              </div>
              <GoogleSignIn />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Login;
