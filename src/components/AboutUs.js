import React from "react";

const AboutUs = () => {
  return (
    <div className="bgw ">
      <div className="card text-center d-flex align-items-center vh-100 justify-content-center  vh-100 ">
        <div
          className=""
          style={{
            height: "50%",
            width: "75%",
            
          }}
        >
          <div className="d-block container mb-2 p-2">
            <h1 className="card-title d-flex align-items-center fw-bold justify-content-center textb" >
              <p className="m-2" style={{ fontSize: "5rem" }}>About</p>
              <p className="m-2 texto" style={{ fontSize: "5rem" }}>Us</p>
            </h1>
          </div>
          <div
            className=" container"
            style={{
              height: "20%",
            }}
          >
            <p className="card-text  fs-3 container textb">
              We are Team Xongroh, hailing from north-east, Assam. We are on a
              mission to provide a platform where our creators can create a
              professional portfolio, collaborate with other creators, interact
              with different creator communities and earn money from the
              marketplace provided by us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
