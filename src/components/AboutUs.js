import React from "react";
import "../styles/aboutus.css";
import me from "../assets/me3.PNG";
import rupam from "../assets/rupam.png";
import puali from "../assets/puali.png";
import hrishikesh from "../assets/hrishikesh.png";

const AboutUs = () => {
  return (
    <div className="bgw my-3 py-3 d-flex align-items-center justify-content-center main">
      <div className="bgw card text-center d-flex align-items-center justify-content-center  border border-0 ">
        <div className="d-block container mt-3">
          <h1 className=" d-flex align-items-center fw-bold justify-content-center textb">
            <p className=" responsivetitle">About</p>
            <p className="mx-2 responsivetitle" style={{ color: "#FF5F1F" }}>
              Us
            </p>
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
        <div className="d-flex justify-content-center  mt-3">
          <div>
            <img src={rupam} className="us  rounded-circle" />
            <span className="d-block names" >Rupam</span>
          </div>
          <div>
            <img src={me} className="us  rounded-circle" />
            <span className="d-block names">Dipankar</span>
          </div>
          <div>
            <img src={hrishikesh} className="us  rounded-circle" />
            <span className="d-block names">Hrishikesh</span>
          </div>
          <div>
            <img src={puali} className="us  rounded-circle" />
            <span className="d-block names">Angshuman</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
