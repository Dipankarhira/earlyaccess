import { React, useState } from "react";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import "../styles/stillhere.css";
const StillHere = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {};

  return (
    <div className="">
      <div className="card main text-center d-flex align-items-center justify-content-center bg-black">
        <div>
          <div className=" container my-2 p-4">
            <h1 className="rstitle d-flex align-items-center fw-bold justify-content-center textb">
              <span className="m-2 textw">Still</span>
              <span className="m-2 texto">Here?</span>
            </h1>
          </div>
          <div
            className=" container  d-flex align-items-center justify-content-center"
            style={{
              height: "30%",
            }}
          >
            <p className="rstext container textw">
              Here’s a Discord link for you to stay connected with us.
              <button
                type="button"
                className="btn border-opacity-25 fw-bold  mx-1  border border-light"
                style={{
                  width: "170px",
                  height: "50px",
                  backgroundColor: isHover ? "#F69C27" : "#000000",
                  color: isHover ? "#000000" : "#f5f5f7",
                  
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Connect
              </button>
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="container ">
            <p className="textw">Contact Us</p>
            <div className="d-block">
              <img className="rsicon mx-4" src={whatsapp} />
              <img className="rsicon mx-4" src={instagram} />
              <img className="rsicon mx-4" src={twitter} />
            </div>
          </div>
          <div className="container  mt-3">
            <p className="textw text3">© xongroh.com | 2019-23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StillHere;
