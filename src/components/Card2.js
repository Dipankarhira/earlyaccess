import React from "react";
import "../styles/whatsnew.css";
const Card2 = (props) => {
  return (
    <div className="card m-4 p-3 text-center d-flex rscard  justify-content-center align-items-center p-2">
      <img src={props.img} className="mt-3 rsimage" alt="..." />

      <div className="card-body p-2 mt-4 textb">
        <h2 className=" fw-bold texto d-block">{props.title}</h2>
        <p className="card-text  w-100 ">{props.desc}</p>
      </div>
    </div>
  );
};

export default Card2;
