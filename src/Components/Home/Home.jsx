import React from "react";
import Hearder from "../Header/Hearder";
import "./home.css";
import CountUp from "react-countup";
// Images
import hero from "../../assets/hero_image.png";

const Home = () => {
  return (
    <div className="hero">
      <div className="left-hand">
        <Hearder />
        {/* Heading */}
        <div className="hero-text">
          {/* 1st Text */}
          <div>
            <span className="stroke-Text">Get </span>
            <span>Your</span>
          </div>
          {/* 2nd Text */}
          <div>
            <span>Work Done</span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              +<CountUp start={0} end={140} />
            </span>
            <span>Workers</span>
          </div>
          <div>
            <span>
              +<CountUp start={0} end={978} />
            </span>
            <span>members</span>
          </div>
          <div>
            <span>+<CountUp start={0} end={50} /></span>
            <span>conections</span>
          </div>
        </div>
        {/* End */}

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get a Service</button>
          <button className="btn">Join our Team</button>
        </div>
        {/* End */}
      </div>

      <div className="right-hand">
        {/* Hero Images */}
        <div className="hero-Image">
          <img src={hero} alt="" className="hero-image" />
        </div>
        {/* <img src={hero_image_back} alt="" className="hero-image-back" /> */}
      </div>
    </div>
  );
};

export default Home;
