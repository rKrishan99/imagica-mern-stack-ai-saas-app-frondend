import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import PasswordResetRequestForm from "./components/resetPassword/PasswordResetRequestForm";
import AddNewPasswword from "./components/resetPassword/AddNewPasswword";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <div className="px-4  sm:px-10 md:-14 lg:px-28 min-h-screen gradient-bg text-white">
      <ToastContainer position="bottom-right" />
      <Navbar />
      <ScrollToTopButton />
      <Login />
      <SignUp />
      <PasswordResetRequestForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy-credit" element={<BuyCredit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<PasswordResetRequestForm />} />
        <Route path="/reset-password/:token" element={<AddNewPasswword />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
