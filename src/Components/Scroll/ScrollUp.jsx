import React, { useState } from "react";
import "./styles.css";
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const ScrollUp = () => {
  const [visible, setvisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setvisible(true) : setvisible(false);
  });
  return (
    <div className="scrollUp">
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <BsFillArrowUpCircleFill color="white" size={25}/>
      </a>
    </div>
  );
};

export default ScrollUp;
