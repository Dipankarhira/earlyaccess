import React, { useState,useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import analytics from "../assets/analytics.png";
import spamfree from "../assets/spamfree.png";
import eventcalender from "../assets/eventcalender.png";
import "../styles/earlyaccess.css";






const Earlyaccess = () => {
  let name, value;

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const card1 = {
    img: `${analytics}`,
    title: "Analytics",
    desc: "Track, observe, and analyse data from your Creations.",
  };

  const card2 = {
    img: `${spamfree}`,
    title: "Spam Free",
    desc: "On our platform, we have zero tolerance for fake accounts and spam activity.",
  };

  const card3 = {
    img: `${eventcalender}`,
    title: "Event Calender",
    desc: "View upcoming events and get tickets for your favourite Creators.",
  };

const [totalUser,setTotalUser]=useState(1000);

const handleClick=async()=>{

 

}

  return (
    <div className="p-3" style={{ background: "#000000" }}>
      <div
        className="card text-center d-flex align-items-center  justify-content-evenly  "
        style={{ backgroundColor: "#000000", borderRadius: 0 }}
      >
        <div className="d-block container mb-1 p-3">
          <h1 className=" fw-bold responsivetitle ">
            <span className="textw  ">get-early-</span>
            <span className="texto  ">access!</span>
          </h1>
        </div>

        <form method="POST" className="p-4 rsform ">
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg rsinputs"
              placeholder="Name"
              name="name"
              onChange={handleInputs}
              value={user.name}
            />
          </div>
          <div className=" mb-3">
            <input
              type="email"
              className="form-control form-control-lg rsinputs"
              placeholder="Your Best E-mail!"
              name="email"
              onChange={handleInputs}
              value={user.email}
            />
          </div>

          <div className=" mb-3">
            <input
              type="number"
              className="form-control form-control-lg rsinputs"
              placeholder="Your phone (optional!)"
              name="phone"
              onChange={handleInputs}
              value={user.phone}
            />
          </div>

          <button
            type="submit"
            className="btn  fw-bold textw rsbtn d-flex align-items-center  justify-content-center"
            onClick={handleClick}
          >
            I’M IN!
          </button>
        </form>

        
        <div className="d-block container m-3 p-3">
          <h1 className=" fw-bold responsivetitle ">
            <span className="textw  ">Only {totalUser} </span>
            <span className="texto mx-2 ">Sign-ups</span>
            <span className="textw  ">left , hurry!</span>
          </h1>
        </div>
      </div>

      <Carousel responsive={responsive}>
        <div className="">
          <Card />
        </div>
        <div className="">
          <Card />
        </div>
        <div className="">
          <Card />
        </div>
        <div className="">
          <Card />
        </div>
        <div className="">
          <Card />
        </div>
      </Carousel>

      <h1
        className="d-flex justify-content-center smalltext"
        style={{ backgroundColor: "#000000" }}
      >
        <span className="textw ">
          Psstt... Wanna let your friends know about this?
          <span className="texto d-inline  fw-bold">Share</span>
        </span>
      </h1>
    </div>
  );
};

export default Earlyaccess;
