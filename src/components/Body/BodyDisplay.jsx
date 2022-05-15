import React, { useEffect, useState } from "react";
import img from "../../assets/img2.JPG";
import imgProject from "../../assets/img3.png";
// front
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
// back
import { FaNodeJs } from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
function BodyDisplay({ activeTab }) {
  const [html, setHtlml] = useState();
  useEffect(
    (activeTab) => {
      setHtlml(check(activeTab));
    },
    [activeTab]
  );

  const check = (a) => {
    switch (a) {
      case 1:
        return (
          <div className="body-about">
            <div className="about-img">
              <img src={img} alt="img" />
            </div>
            <div className="body-about-content">
              <div className="flex">
                <p>Name:</p>
                <p>Jargalsaikhan</p>
              </div>
              <div className="flex">
                <p>currently Live in:</p>
                <p> Ulaanbaatar Mongolia</p>
              </div>
              <div className="flex">
                <p>Bio:</p>
                <p>
                  Junior Developer <br /> Graduated at 2020 <br />
                </p>
              </div>
              <div className="flex">
                <p> Hobby :</p> <p>anime, video games , training</p>
              </div>
              <div className="flex">
                <p>Currently learning :</p>
                <p> Full stack web dev , mobile Dev</p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          //
          <div className="body-skills">
            <div className="front">
              <p className="title">Front End</p>
              <div className="skills-list">
                <div className="icon-container">
                  <AiOutlineHtml5 size={60} />
                  <p className="icon-desc">HTML5</p>
                </div>
                <div className="icon-container">
                  <DiCss3 size={60} />
                  <p className="icon-desc">CSS3</p>
                </div>
                <div className="icon-container">
                  <DiJavascript1 size={60} />
                  <p className="icon-desc">JAVASCRIPT</p>
                </div>
                <div className="icon-container">
                  <FaReact size={60} />
                  <p className="icon-desc">REACT</p>
                </div>
                <div className="icon-container">
                  <SiMaterialui size={60} />
                  <p className="icon-desc">MATERIAL UI</p>
                </div>
                <div className="icon-container">
                  <SiTailwindcss size={60} />
                  <p className="icon-desc">TAILWIND CSS</p>
                </div>
              </div>
            </div>
            <div className="back">
              <p className="title">Back End</p>
              <div className="skills-list">
                <div className="icon-container">
                  <FaNodeJs size={60} />
                  <p className="icon-desc">NODE.JS</p>
                </div>
                <div className="icon-container">
                  <SiMicrosoftsqlserver size={60} />
                  <p className="icon-desc">MSSQL</p>
                </div>
                <div className="icon-container">
                  <SiMysql size={60} />
                  <p className="icon-desc">MYSQL</p>
                </div>
                <div className="icon-container">
                  <DiPostgresql size={60} />
                  <p className="icon-desc">POSTGRESQL</p>
                </div>
                <div className="icon-container">
                  <SiMongodb size={60} />
                  <p className="icon-desc">MONGODB</p>
                </div>
                <div className="icon-container">
                  <FaPhp size={60} />
                  <p className="icon-desc">PHP</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="Body-project">
            <img src={imgProject} alt="" />
          </div>
        );

      default:
        break;
    }
  };
  return <div className="BodyDisplay">{check(activeTab)}</div>;
}

export default BodyDisplay;
