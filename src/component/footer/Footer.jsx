import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer__logo">
        George Udonte
      </a>

      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/george-udonte/">
          <BsLinkedin />{" "}
        </a>
        <a href="https://github.com/udonte">
          <BsGithub />
        </a>
        <a href="https://twitter.com/GeorgeUdonte">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <p>Built with ReactJS, SwiperJS & EmailJS</p>
        <small>&copy; George Udonte 2023. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
