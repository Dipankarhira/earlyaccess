import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import StillHere from "../components/StillHere";
import Earlyaccess from "../components/Earlyaccess";
import Whatsnew from "../components/Whatsnew";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      {/* <Whatsnew /> */}
      
      {/* <StillHere /> */}
      <Earlyaccess />
      <AboutUs />
    
    </div>
  );
};

export default HomeScreen;
