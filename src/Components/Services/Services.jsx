import React from "react";
import { programsData } from "../../data/programsData";
import "./services.css";
import { motion } from "framer-motion";
import { homeAnimations, homeInfoAnimations } from "../../animation";

import RightArrow from "../../assets/rightArrow.png";

const Services = () => {
  return (
    <div className="Service" id="service">
      {/* Header */}
      <div className="Service-header">
        <span></span>
        <span>Our Services</span>
        <span></span>
      </div>
      <motion.div
        variants={homeAnimations}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        className="Services-category"
      >
        {programsData.map((program) => {
          return (
            <div
              className="category"
              style={{
                backgroundImage: `url(${program.backgroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="icon">
                <div>{program.image}</div>
              </div>
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>More</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
