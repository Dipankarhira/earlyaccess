import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import analytics from "../assets/analytics.png";
import spamfree from "../assets/spamfree.png";
import eventcalender from "../assets/eventcalender.png";
const Earlyaccess = () => {
  let name, value;

  const [user, setUser] = useState({
    name: "",
    email: "",
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

  return (
    <div className="p-3 " style={{backgroundColor:"#000000"}}>
      <div className="card text-center d-flex align-items-center vh-100 justify-content-evenly  " style={{backgroundColor:"#000000", borderRadius:0}}>
        <div className="d-block container mb-1 p-3">
          <h1 className="card-title textb  d-flex align-items-center fw-bold justify-content-center ">
            <p className="textw" style={{ fontSize: "5rem" }}>get-early-</p>
            <p className="texto" style={{ fontSize: "5rem" }}>access!</p>
          </h1>
        </div>

        <form
          method="POST"
          className="p-4 rounded border border-opacity-25"
          style={{
            height: "auto",
            width: "30%",
          }}
        >
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className=" mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Your Best E-mail!"
              name="email"
            />
          </div>

          <button
            type="submit"
            className="btn btn-lg fw-bold w-100 textw"
            style={{backgroundColor:"#EF6831"}}
          >
            I’M IN!
          </button>
        </form>

        <div className="d-block container p-3">
          <h1 className="card-title textb display-4 d-flex align-items-center  justify-content-center ">
            <p className="textw">100+</p>
            <p className="texto mx-2">sign ups </p>
            <p className="textw">and counting</p>
          </h1>
        </div>
      </div>


      <Carousel responsive={responsive}>
          <div className="" >
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

     

      <div className="d-flex justify-content-center" style={{backgroundColor:"#000000"}}>
       
        <p className="textw m-2">
          Psstt... Wanna let your friends know about this?
        </p>
        <p className="texto m-2 fw-bold">Share</p>
      </div>
    </div>
  );
};

export default Earlyaccess;
