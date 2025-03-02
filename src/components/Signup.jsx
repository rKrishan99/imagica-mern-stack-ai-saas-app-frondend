import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "motion/react";
import axios from "axios";
import { toast } from "react-toastify";
import GoogleSignIn from "./GoogleSignIn";

const SignUp = () => {
  const {
    isOpenSignup,
    setIsOpenSignup,
    setIsOpenLogin,
    backendUrl,
    setToken,
    setUser,
  } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(backendUrl + "/api/user/register", {
        name,
        email,
        password,
      });

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setIsOpenSignup(false);

        toast.success("Signup Success");

        setName("");
        setEmail("");
        setPassword("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickLogin = () => {
    setIsOpenSignup(false);
    setIsOpenLogin(true);
  };

  return (
    <AnimatePresence>
      {isOpenSignup && (
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
                onClick={() => setIsOpenSignup(false)}
                className="absolute top-3 right-3 w-6 cursor-pointer"
                src={assets.cross_icon}
                alt=""
              />
              <img className="w-44" src={assets.logo} alt="" />
              {/* <h1 className="text-center mt-8 text-3xl text-netral-600">
                Signup
              </h1> */}
              <p className="text-sm mt-6">
                Wellcome! Please signup in to continue
              </p>
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-10">
                <img src={assets.email_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.email_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.lock_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <span className="text-gray-400 mt-3">or</span>

              <GoogleSignIn/>

              <button className="mt-8 w-full bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600 text-white cursor-pointer hover:scale-105 transition-all duration-300 px-7 py-2 rounded-full">
                Create Account
              </button>
              <div>
                <p className="text-sm mt-5">
                  Don't have an account?{" "}
                  <span
                    onClick={() => handleClickLogin()}
                    className="text-[#bc619b] cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUp;
