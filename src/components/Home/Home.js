import React, { useEffect, useRef } from "react";
import "./Home.scss";
import Navbar from "../Navbar/Navbar";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import anime from "animejs";
import Animation from "./Animation";
import { gsap, Power2, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".btn-container"),
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        duration: 3,
        delay: 2.4,
        y: 0,
        scrollTrigger: {
          trigger: el.querySelector(".btn-container"),
          start: "top bottom",
          end: "top center",
        },
      }
    );
  }, []);

  return (
    <div className="homepage" ref={ref}>
      <Navbar />
      <div className="left">
        <div className="title">
          <Animation copy="Hey I'm Justin." role="heading" />
          <Animation copy="I'm a web developer." role="heading" />
        </div>
        <div className="btn-container">
          <a href="#projects" className="projects-btn">
            Projects
          </a>
          <a href="#about" className="contact-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;