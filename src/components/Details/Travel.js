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
import { HashLink } from 'react-router-hash-link';
import Animation from "../Home/Animation";

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
          <HashLink to="/#contact" className="hide">Contact</HashLink>
        </div>
      </div>
      <div className="detail-header">
        <div className="content">
          <div className="desc">
            <Animation copy="Trekked" role="heading" />
            <p> Plan and organize your next trip </p>
          </div>

          <img src="../images/trekked.png" alt="" />
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
            Trekked is a website I created that allows a user to plan their next trip. Using Mapbox, the user can easily find their planned destination on the map and see what's nearby.
          </p>
          <p> This website was created using <span>React, Javascript, Sass, Node.js, Express, and MongoDB.</span> For the user authentication I used <span>Bcrypt and JWT</span> as well as implemented error handling for incorrect data during the login process. </p>
          <p className="disclaimer">
            This website is not deployed yet since there is still some things I would like to include that will bring this project to life.
          </p>

          
        </div>
      </section>
      <section className="images">
        <div className="img">
          <img src="../images/travel-1.JPG" alt="" />
          <p> Fast and easy registration </p>
        </div>
        <div className="img">
          <img src="../images/travel-2.JPG" alt="" />
          <p> View your trip history </p>
        </div>
        <div className="img">
          <img src="../images/travel-3.JPG" alt="" />
          <p> Start planning your next trip </p>
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
  );
}

export default Travel;
