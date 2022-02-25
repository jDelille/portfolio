import React from "react";
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
} from "react-icons/si";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Animation from "../Home/Animation";
import TDemo from "./mp4/pixel.mp4";

function Travel() {
  return (
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
            <Animation copy="Pixelator" role="heading" />
            <p> Create and download pixel art </p>
          </div>

          <img src="../images/pixel-mac.png" alt="" />
        </div>
        <div className="footer-info">
          <p>
            <span>Context</span> Personal Project
          </p>
          {/* <p>
            <span>Type</span> CRUD
          </p> */}
        </div>
      </div>
      <section className="detail-overview">
        <div className="detail-intro">
          <h1> Introduction</h1>
          <p>
            Pixelator is a webite I created that allows a user to make pixel
            art. They can then download the art as a JPG or PNG. If the user
            chooses the favicon canvas size, they can easily make their artwork
            a favicon in their web project.
          </p>
          <p>
            {" "}
            This website was created using{" "}
            <span>React, Javascript, and Sass</span> For the export
            functionality, I use <span>React-component-export-image</span> which
            allows for fast and easy downloads.{" "}
          </p>
          <p className="disclaimer">
            This website is not fully working on iPhones yet.
          </p>
        </div>
      </section>
      <div className="demo-section">
        <p>Watch the demo and see how it works.</p>
        <video src={TDemo} controls="controls"></video>
      </div>
      <section className="images">
        <div className="img">
          <img src="../images/pixel-1.JPG" alt="" />
          <p> Start with an empty canvas </p>
        </div>
        <div className="img">
          <img src="../images/pixel-2.JPG" alt="" />
          <p> Make your masterpiece </p>
        </div>
        <div className="img">
          <img src="../images/pixel-3.JPG" alt="" />
          <p> Download your art as a PNG or JPG </p>
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
  );
}

export default Travel;
