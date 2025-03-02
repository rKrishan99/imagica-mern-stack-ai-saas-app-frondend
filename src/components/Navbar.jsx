import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, setUser, setToken, setIsOpenLogin, credit } =
    useContext(AppContext);

  const handleClickedLogout = () => {
    console.log("Logout");
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-5 sm:gap-3 ">
            <div className="rounded-full p-[2px] bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600 cursor-pointer hover:scale-105 transition-transform duration-700">
              <button
                onClick={() => navigate("/buy-credit")}
                className="flex cursor-pointer items-center gap-2 bg-gray-950 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full"
              >
                <img className="w-5" src={assets.creditStar} alt="" />
                <p className="text-xs sm:text-sm font-medium text-white">
                  Credit left : {credit}
                </p>
              </button>
            </div>
            <p className="text-white max-sm:hidden pl-4">Hi, {user.name}</p>
            <div className="relative group">
              <img
                className="w-10 drop-shadow rounded-full cursor-pointer"
                src={user.profileImage ? user.profileImage : assets.profileIcon}
                alt=""
              />
              <div
                onClick={() => handleClickedLogout()}
                className="absolute hidden group-hover:block cursor-pointer top-0 right-0 z-10 text-[#bc6184] text-center runded pt-12"
              >
                <ul className="flex justify-center list-none m-0 p-2 bg-black rounded-md border text-sm">
                  <li className="py-1 ml-[10px] px-2 text-white cursor-pointer text-center pr-10">
                    Logout
                  </li>
                  <img className="w-5 mr-[10px]" src={assets.logout} alt="" />
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy-credit")}
              className="cursor-pointer"
            >
              Pricing
            </p>
            <div className="rounded-full p-[2px] bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600 cursor-pointer hover:scale-105 transition-transform duration-700">
              <button
                onClick={() => setIsOpenLogin(true)}
                className="bg-gray-950 cursor-pointer text-white px-7 py-2 sm:px-10 text-sm rounded-full"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
