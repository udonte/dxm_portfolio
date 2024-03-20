import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
// import { RiServiceLine } from 'react-icons/ri'
import { MdWork } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { useState } from "react";

import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#top");
  return (
    <nav>
      <a
        href="#top"
        onClick={() => setActiveNav("#top")}
        className={activeNav === "#top" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUserCircle />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDots />
      </a>
    </nav>
  );
};

export default Nav;
