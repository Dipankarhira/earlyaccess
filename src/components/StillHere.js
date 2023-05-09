import React from "react";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
const StillHere = () => {
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
          <div className="d-block container my-2 p-4">
            <h1 className="card-title display-4 d-flex align-items-center fw-bold justify-content-center textb">
              <p className="m-2 textw">Still</p>
              <p className="m-2 texto">Here?</p>
            </h1>
          </div>
          <div
            className=" container  d-flex align-items-center justify-content-center"
            style={{
              height: "30%",
            }}
          >
            <p className="card-text  fs-4 container textw">
              Here’s a Discord link for you to stay connected with us.
              <button
                type="button"
                className="  textb fw-bold fs-4 m-3"
                style={{
                  width: "170px",
                  height: "65px",
                  background: "#D9D9D9",
                }}
              >
                Connect
              </button>
            </p>
          </div>
        </div>
        <div className="container m-3">
          <p className="textw">Contact Us</p>
          <div className="d-block">
            <img
              className="m-4"
              src={whatsapp}
              style={{ height: "50px", width: "50px" }}
            />
            <img
              className="m-4"
              src={instagram}
              style={{ height: "50px", width: "50px" }}
            />
            <img
              className="m-4"
              src={twitter}
              style={{ height: "50px", width: "50px" }}
            />
          </div>
        </div>
        <div className="container mt-4 pt-4">
          <p className="textw">© xongroh.com | 2019-23</p>
        </div>
      </div>
    </div>
  );
};

export default StillHere;
