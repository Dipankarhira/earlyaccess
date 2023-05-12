import React from "react";

const Card2 = (props) => {
  return (
    <div
      className="card text-center d-flex  justify-content-center align-items-center p-2"
      style={{ width: "23rem", height: "25rem", borderRadius:"12px" }}
    >
      
        <img
          src={props.img}
          className="mt-3 "
          style={{ width: "120px", height: "120px", borderRadius:0 }}
          alt="..."
        />
     
      <div className="card-body p-2 mt-4 textb">
        <h2 className=" fw-bold d-block">{props.title}</h2>
        <p className="card-text mt-4 p-3 w-100 ">{props.desc}</p>
      </div>
    </div>
  );
};

export default Card2;
