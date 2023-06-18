import React from "react";
import Homepage2 from "./HomePage2/HomePage2";
import Navbar from "./Homepage1/Navbar";
import { Body } from "./Homepage1/body";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Homepage2 />
    </div>
  );
};

export default HomePage;
