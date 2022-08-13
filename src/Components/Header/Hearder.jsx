import React from "react";
import "./header.css";
import Logo from '../../assets/logo.png';

const Hearder = () => {
  return <div className="header">
   <img className="logo" src={Logo} alt="" />
   <ul className="nav__menu">
      <li>Home</li>
      <li>Search</li>
      <li>Payment</li>
      <li>Contact</li>
   </ul>
  </div>;
};

export default Hearder;
