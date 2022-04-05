import React, {useRef, useEffect} from "react";
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
import NDemo from "./mp4/vibrofret.mp4";
import Transition from "../Transition/Transition";
import { gsap } from "gsap";

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
              <Animation copy="Vibrofret" role="heading" />
              <p> Interactive guitar fretboard </p>
            </div>

            <img src="../images/vibromac.png" alt="" />
          </div>
          <div className="footer-info">
            <p>
              <span>Context</span> Personal Project
            </p>
          </div>
        </div>
        <section className="detail-overview">
          <div className="detail-intro">
            <h1> Introduction</h1>
            <p>
              Vibrofret is an interative guitar fretboard which you can use to
              master the guitar.
            </p>
            <p>
              {" "}
              This website was created using{" "}
              <span>React, Javascript, and SCSS.</span>
            </p>

            <p className="disclaimer">
              {" "}
              In the future this website will feature more options for the user
              to choose such as CAGED System and usig backing tracks.
            </p>

            <a href="https://vibrofret.netlify.app/">Visit Site</a>
          </div>
        </section>
        <div className="demo-section">
          <p>Watch the demo and see how it works.</p>
          <video src={NDemo} controls="controls"></video>
        </div>
        <section className="images">
          <div className="img">
            <img src="../images/dm.JPG" alt="" />
            <p> View the site in dark mode. </p>
          </div>
          <div className="img">
            <img src="../images/lm.JPG" alt="" />
            <p> View the site in light mode.</p>
          </div>
          <div className="img">
            <img src="../images/modal.JPG" alt="" />
            <p> Choose an option </p>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Poolhost;
