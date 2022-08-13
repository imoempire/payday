import React from "react";
import { programsData } from "../../data/programsData";
import "./services.css";

import RightArrow from '../../assets/rightArrow.png'

const Services = () => {
  return (
    <div className="Service" id="service">
      {/* Header */}
      <div className="Service-header">
        <span></span>
        <span>Our Services</span>
        <span></span>
      </div>
      <div className="Services-category">
        {programsData.map((program) => {
          return (
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
