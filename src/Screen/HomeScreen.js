import {React,useEffect, useState} from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import StillHere from "../components/StillHere";
import Earlyaccess from "../components/Earlyaccess";
import Whatsnew from "../components/Whatsnew";
import Loader from "../components/Loader";

const HomeScreen = () => {


  return (
    <div>
      <Hero />
      <Whatsnew />
      
      
      <Earlyaccess />
      <AboutUs />
    <StillHere />
    </div>
  );
};

export default HomeScreen;
