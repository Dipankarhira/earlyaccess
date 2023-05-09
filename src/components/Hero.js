import React from "react";
import logoxongroh from "../assets/logoxongroh.png";
const Hero = () => {
  return (
    <div className=" ">
      <div className="card text-center d-flex align-items-center vh-100 justify-content-center bg-black  vh-100 ">
        <div
          className=""
          style={{
            height: "50%",
            width: "75%",
          }}
        >
          <div className="d-block container mb-2 p-4">
            <h1 className="card-title textw display-3 d-flex align-items-center fw-bold justify-content-center">
              <img
                src={logoxongroh}
                style={{ height: "130px", width: "125px" }}
                className="m-3"
              />
              <strong>Xongroh</strong>
            </h1>
          </div>
          <div
            className=" container"
            style={{
              height: "30%",
            }}
          >
            <p className="card-text textw fs-3 container">
              A Social Marketplace designed especially for the Creators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
