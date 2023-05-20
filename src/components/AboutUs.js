import React from "react";
import "../styles/aboutus.css";
import logo from "../assets/Xongroh.svg";
const AboutUs = () => {
  return (
    <div className="bgw m-3 p-3 d-flex align-items-center justify-content-center main">
      <div className="card text-center d-flex align-items-center justify-content-center  ">
        <div className="d-block container mt-3">
          <h1 className=" d-flex align-items-center fw-bold justify-content-center textb">
            <p className=" responsivetitle">About</p>
            <p className="mx-2 texto responsivetitle">Us</p>
          </h1>
        </div>
        <div className=" container ">
          <p className=" textb text2 p-2">
            We are Team Xongroh from the north-east of India. We are on a
            mission to provide a platform for our creators to establish a
            professional portfolio, work with other creators, communicate with
            diverse creator communities, and earn money through our marketplace.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default AboutUs;
