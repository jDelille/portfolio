import React, { useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Shmagity.scss";
import { DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiSass,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiCss3,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PLDemo from "./mp4/poolhost-demo.mp4";
import Animation from "../Home/Animation";
import NDemo from "./mp4/nba.mp4";
import { gsap } from "gsap";
import Transition from "../Transition/Transition";

function Poolhost() {
  const home = gsap.timeline();
  const homePage = useRef(null);

  useEffect(() => {
    home.from(homePage.current, {
      duration: 0.6,
      skewX: 10,
      x: -100,
      opacity: 0,
    });
  });
  return (
    <>
      <Transition timeline={home} />
      <section className="shmagity-page">
        <div className="details-nav">
          <div className="brand">
            <h1> Justin </h1>
          </div>
          <div className="links">
            <Link to="/" className="link">
              Home
            </Link>
            <HashLink to="/#projects">Projects</HashLink>
            <HashLink to="/#contact" className="hide">
              Contact
            </HashLink>
          </div>
        </div>
        <div className="detail-header">
          <div className="content">
            <div className="desc">
              <Animation copy="NBA Pick'em" role="heading" />
              <p> Daily NBA pick 'em pool </p>
            </div>

            <img src="../images/sock-mac.png" alt="" />
          </div>
          <div className="footer-info">
            <p>
              <span>Context</span> Personal Project
            </p>
            <p>
              <span>Type</span> CRUD
            </p>
          </div>
        </div>
        <section className="detail-overview">
          <div className="detail-intro">
            <h1> Introduction</h1>
            <p>
              Socklord Pick'em Pool is a website I created that allows a user to
              make daily NBA picks. They can view scores, betting odds, and live
              data.
            </p>
            <p>
              This website was created using
              <span>
                React, Javascript, SCSS, Node.js, Express, and MongoDB.
              </span>
            </p>

            <p className="disclaimer">
              In the future this website will feature other sports as well as
              better features for the user to make their experience awesome.
            </p>

            <a href="https://www.nbapickem.org/">Visit Site</a>
          </div>
        </section>
        <div className="demo-section">
          <p>Watch the demo and see how it works.</p>
          <video src={NDemo} controls="controls"></video>
        </div>
        <section className="images">
          <div className="img">
            <img src="../images/sock-1.JPG" alt="" />
            <p> Create an account or login to an existing one </p>
          </div>
          <div className="img">
            <img src="../images/sock-2.JPG" alt="" />
            <p> Make your daily NBA picks</p>
          </div>
          <div className="img">
            <img src="../images/sock-3.JPG" alt="" />
            <p> Review and edit your picks if needed </p>
          </div>
        </section>
        <div className="tech-used">
          <h1> Technologies Used </h1>
          <div className="skills-wrapper">
            <ul className="frontend">
              <li className="skill">
                <DiReact className="skill-icon" /> React
              </li>
              <li className="skill">
                <SiJavascript className="skill-icon" />
                Javascript
              </li>
              <li className="skill">
                <SiSass className="skill-icon" /> Sass
              </li>
            </ul>
            <ul className="backend">
              <li className="skill">
                <SiExpress className="skill-icon" /> Express
              </li>
              <li className="skill">
                <SiNodedotjs className="skill-icon" />
                Node.js
              </li>
              <li className="skill">
                <SiMongodb className="skill-icon" /> MongoDB
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Poolhost;
