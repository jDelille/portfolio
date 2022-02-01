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
  SiCss3,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import PLDemo from './mp4/poolhost-demo.mp4'
import Animation from "../Home/Animation";

function Poolhost() {
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
            <Animation copy="PoolhostNFL" role="heading" />
            <p> Weekly NFL pick 'em pool </p>
          </div>

          <img src="../images/poolhost_mac.png" alt="" />
        </div>
        <div className="footer-info">
          <p>
            <span>Context</span> Capstone Project
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
            Poolhost is the first full stack website I created that allows a user to make weekly NFL picks. They can view current scores, betting odds, and even chat with other users.
          </p>
          <p> This website was created using <span>React, Javascript, CSS, Node.js, Express, and Firebase.</span> I used Firebase for the database and user authentication because I wanted to learn more about how to use Firebase and it was perfect for the scale of this site. </p>
          
          <p className="disclaimer"> With the season coming to an end, there is a lot less data on this website which is a huge reason why it is so awesome. In the near future I wish to also include NBA and MLB games to the site.</p>

          
          <a href="https://poolhostnfl.com/">Visit Site</a>
        </div>
      </section>
      <section className="images">
        <div className="img">
          <p> Watch the demo video to see how it works </p>
          <video src={PLDemo} controls="controls"></video>
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
              <SiCss3 className="skill-icon" /> CSS
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
              <SiFirebase className="skill-icon" /> Firebase
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Poolhost;
