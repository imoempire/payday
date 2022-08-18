import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";

const Hearder = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      <ul className="nav__menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
        <li>
          <a href="#">Payment</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Hearder;
