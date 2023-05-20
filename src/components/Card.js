import React from "react";
import Xongroh from "../assets/Xongroh.svg";
import "../styles/earlyaccess.css";
const Card = (props) => {
  return (
    <div
      className="card m-4 p-3 border border-light box "
      style={{ backgroundColor: "#000000" }}
    >
      <div className="row g-0">
        <div className="col my-auto">
          {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
          <div
            className="card    d-flex justify-content-center align-tems-center"
            style={{ backgroundColor: "#000000" }}
          >
            <img src={Xongroh} className="rsimage mx-auto " alt="..." />
            <div
              className="card-body text-center"
              style={{ backgroundColor: "#000000" }}
            >
              <h5 className="card-title  textw fw-bold">Bisrut Saikia</h5>
              <p className="card-text texto">Singer</p>
            </div>
          </div>
        </div>
        <div className="col-md-8  p-1 ">
          <div className="card-body textw ">
            <p className="card-text textcard">
              Create a Professional Portfolio and let others view your
              work.Create a Professional Portfolio and let others view your
              work. Create a Professional Portfolio and let others view your
              work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
