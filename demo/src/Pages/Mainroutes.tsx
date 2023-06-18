import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./Homepage/HomePage";
import Login from "./login-signup/login";
import EmiCalculator from "./EmiCalculator";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calculator" element={<EmiCalculator />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
