import React, { useState } from "react";

const Earlyaccess = () => {
 let name,value;

const [user , setUser] = useState({
    name:"",
    email:""
})

const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className=" ">
      <div className="card text-center d-flex align-items-center vh-100 justify-content-evenly bg-black ">
      
          <div className="d-block container mb-1 p-3">
            <h1 className="card-title textb display-4 d-flex align-items-center fw-bold justify-content-center ">
              <p className="textw">get-early-</p>
              <p className="texto">access!</p>
            </h1>
          </div>
     
        <form method="POST" className="p-4 rounded border border-opacity-25" style={{
            height
            :"auto",
            width:"30%"
        }}>
          <div className="mb-3" >
            <input type="text" className="form-control form-control-lg" placeholder="Name" name="name"  />
          </div>
          <div className=" mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Your Best E-mail!"
              name="email"
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-lg fw-bold w-100">
          I’M IN!
          </button>
        </form>
        <div className="d-flex">
          <p className="textw m-2">
            Psstt... Wanna let your friends know about this?
          </p>
          <p className="texto m-2 fw-bold">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Earlyaccess;
