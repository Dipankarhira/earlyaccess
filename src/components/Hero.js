import React from "react";
import Xongroh from "../assets/Xongroh.svg";
const Hero = () => {
  return (
    <div className="w-100 ">
      <div className="text-center d-flex align-items-center  justify-content-center vh-100 " style={{backgroundColor
      :"#000000"}}>
        <div
          className=""
          style={{
            height: "50%",
            width: "75%",
          }}
        >
          <div className="d-block container  mb-2 p-4">
            <h1 className="textw display-3 d-flex align-items-center fw-bold justify-content-center">
              <img
                src={Xongroh}
                style={{ height: "190px", width: "160px", borderRadius: 0 }}
                className="m-2"
              />
                <p className="texto m-2" style={{fontSize:"10rem"}}>ongroh</p>

            </h1>
          </div>
          <div
            className=" container"
            style={{
              height: "40%",
            }}
          >
            <h3 className=" textw ">
              A Social Marketplace designed especially for the <h3 className="texto d-inline">Creators.</h3>
            </h3>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Hero;
