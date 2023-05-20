import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card2 from "./Card2";
import analytics from "../assets/analytics.png";
import spamfree from "../assets/spamfree.png";
import eventcalender from "../assets/eventcalender.png";
import "../styles/whatsnew.css";

const Whatsnew = () => {
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

  const responsive = {
    superLargeDesktop: {
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

  return (
    <div className="container  main  ">
      <div className=" py-2">
        <h1 className="d-flex align-items-center fw-bold justify-content-center mt-5 mb-5">
          <p className="textb m-2 responsivetitle">What's </p>
          <p className="texto m-2 responsivetitle">New?</p>
        </h1>
        <div className="mx-auto">
          <Carousel responsive={responsive}>
            
              <Card2 {...card1} />
            
            
              <Card2 {...card2} />
            
            
              <Card2 {...card3} />
            
            
              <Card2 {...card1} />
            
            
              <Card2 {...card3} />
              <Card2 {...card1} />
              <Card2 {...card3} />
            
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Whatsnew;
