import React, { useEffect, useRef } from "react";
import "./Home.scss";
import Navbar from "../Navbar/Navbar";
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

  function scrollProjects() {
    document.getElementById("projects").scrollIntoView(true);
  }

  function scrollAbout() {
    document.getElementById("about").scrollIntoView(true);
  }

  return (
    <div className="homepage" ref={ref}>
      <Navbar />
      <div className="left">
        <div className="title">
          <Animation copy="Hey I'm Justin." role="heading" />
          <Animation copy="I'm a web developer." role="heading" />
        </div>
        <div className="btn-container">
          <button onClick={scrollProjects} className="projects-btn">
            Projects
          </button>
          <button onClick={scrollAbout} className="contact-btn" >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
