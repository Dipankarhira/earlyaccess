import React from "react";
import Xongroh from "../assets/Xongroh.svg";
const Card = (props) => {
  return (
    <div className="card m-4 p-3 border border-light" style={{ maxWidth: 540 , backgroundColor:"#000000"}}>
      <div className="row g-0">
        <div className="col-md-4">
          {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
          <div className="card" style={{ width: "auto" ,backgroundColor:"#000000" }}>
            <img
              src={Xongroh}
              className="rounded-circle "
              alt="..."
              style={{ width: "120px", height: "120px" }}
            />
            <div className="card-body text-center" style={{backgroundColor:"#000000"}}>
              <h5 className="card-title textw fw-bold">Bisrut Saikia</h5>
              <p className="card-text texto">Singer</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body textw p-3">
            <p className="card-text">
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
