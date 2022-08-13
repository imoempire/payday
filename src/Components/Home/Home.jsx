import React from "react";
import Hearder from "../Header/Hearder";
import "./home.css";

// Images
import hero from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Home = () => {
  return (
    <div className="hero">
      <div className="left-hand">
        <Hearder />
        {/* Ad */}
        <div className="ad">
          <div></div>
          <span>Get Your Work Done Faster</span>
        </div>
        {/* Heading */}
        <div className="hero-text">
          {/* 1st Text */}
          <div>
            <span className="stroke-Text">Shape </span>
            <span>Your</span>
          </div>
          {/* 2nd Text */}
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to Shape and build your ideal body and
              live up your life to the fullest.
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Workers</span>
          </div>
          <div>
            <span>+978</span>
            <span>members</span>
          </div>
          <div>
            <span>+50</span>
            <span>conections</span>
          </div>
        </div>
        {/* End */}

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get a Service</button>
          <button className="btn">Join our Workers</button>
        </div>
        {/* End */}
      </div>
      <div className="right-hand">

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* Hero Images */}
        <img src={hero} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* Calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>100%</span>
            <span>Done</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
