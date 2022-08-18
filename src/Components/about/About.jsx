import React from "react";
import "./styles.css";

import Image from ".././../assets/work.jpg";

const About = () => {
  return (
    <div className="About">
      {/* Header */}
      <div className="About-header">
        <span></span>
        <span>About Us</span>
        <span></span>
      </div>
      {/* Contents */}
      <div className="content">
        <div className="content_image">
          <img src={Image} alt="" />
        </div>
        <div className="content_Text">
          <h1>About Us</h1>
          <div className="about_info">
            “Empire first started payDay in order to help reduce the rate of
            unemployment among ghanaians. That is why we started build payDay.
            During our journey, we reach a lot great thinkers who help in
            achieveiving what we have now. We strive to be more reachable to
            everyone in ghana and this will help in achieveiving the dreams of
            payDay.”
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
