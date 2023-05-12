import {React, useState} from "react";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
const StillHere = () => {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  };

  const boxStyle = {
    
  };

  return (
    <div className=" ">
      <div className="bg-dark card text-center d-flex align-items-center vh-100 justify-content-center bg-black  vh-100 ">
        <div
          className=""
          style={{
            height: "50%",
            width: "75%",
          }}
        >
          <div className="d-block container my-2 p-4">
            <h1 className="card-title display-4 d-flex align-items-center fw-bold justify-content-center textb">
              <p className="m-2 textw" style={{ fontSize: "5rem" }}>Still</p>
              <p className="m-2 texto" style={{ fontSize: "5rem" }}>Here?</p>
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
                className="btn border-opacity-25 fw-bold fs-4 m-2 border border-light"
                style={{
                  width: "170px",
                  height: "60px",
                  backgroundColor: isHover ? '#F69C27' : '#000000',
                  color:isHover ? '#000000' : '#f5f5f7'
                  
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
