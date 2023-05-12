import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import Card2 from "./Card2";
import analytics from "../assets/analytics.png";
import spamfree from "../assets/spamfree.png";
import eventcalender from "../assets/eventcalender.png";

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

  return (
    <div className="container  vh-100 ">
      <div>
        <h1 className="d-flex align-items-center fw-bold justify-content-center mt-5 mb-5">
          <p className="textb m-2" style={{ fontSize: "5rem" }}>
            What's{" "}
          </p>
          <p className="texto m-2" style={{ fontSize: "5rem" }}>
            New?
          </p>
        </h1>

        <Carousel responsive={responsive}>
          <div className="">
            <Card2 {...card1} />
          </div>
          <div className="">
            <Card2 {...card2} />
          </div>
          <div className="">
            <Card2 {...card3} />
          </div>
          <div className="">
            <Card2 {...card1} />
          </div>
          <div className="">
            <Card2 {...card3} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Whatsnew;
