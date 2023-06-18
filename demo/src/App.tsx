import React from "react";
import "./App.css";
import Login from "./Pages/login-signup/login";
import HomePage from "./Pages/Homepage/HomePage";
import Mainroutes from "./Pages/Mainroutes";
import EmiCalculator from "./Pages/EmiCalculator";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Mainroutes />
      <EmiCalculator />
    </div>
  );
}

export default App;
