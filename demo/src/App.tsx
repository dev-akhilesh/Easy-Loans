import React from "react";
import "./App.css";
import Login from "./Pages/login-signup/login";
import HomePage from "./Pages/Homepage/HomePage";
import Mainroutes from "./Pages/Mainroutes";
import EmiCalculator from "./Pages/EmiCalculator";
import Navbar from "./Pages/Homepage/Homepage1/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Mainroutes />
      {/* <EmiCalculator /> */}
    </div>
  );
}

export default App;
