import React from "react";
import "./Main.css";
import img from "../../assets/img1.JPG";
import { FaGithubSquare } from "react-icons/fa";
import { RiMessengerFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
function Main() {
  return (
    <div className="container main">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="main-container">
        <div className="main-container-first">
          <img src={img} alt="" />
          <p>Hi i'm </p>
          <p className="name">JARGALSAIKHAN</p>
          <p>Web Mobile Developer</p>
        </div>
        <div className="main-container-second">
          <a href="" download className="btn">
            Download CV
          </a>
          <a href="#about" className="btn">
            Contact
          </a>
        </div>
        <div className="main-container-third">
          <a href="https://github.com/iwillchangelater" className="item">
            <FaGithubSquare size={40} className="icon" />
          </a>
          <a href="https://m.me/jagaabnoo" className="item">
            <RiMessengerFill size={40} className="icon" color="#429ae8" />
          </a>
          <a href="mailto:lkhagvasurenjarglasaikhan@gmail.com" className="item">
            <SiGmail size={40} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
