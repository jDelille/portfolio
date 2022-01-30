import React, { useRef, useEffect } from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import { gsap, Power2, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Projects() {
  // gsap animations
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".l-one"),
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        scrollTrigger: {
          trigger: el.querySelector(".l-one"),
          start: "top center",
          end: "top center",
        },
      }
    );
  }, []);
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".r-one"),
      {
        opacity: 0,
        x: 0,
      },
      {
        opacity: 1,
        duration: 2,
        x: 0,
        scrollTrigger: {
          trigger: el.querySelector(".r-one"),
          start: "top center",
          end: "top center",
        },
      }
    );
  }, []);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".l-two"),
      {
        opacity: 0,
        x: 0,
      },
      {
        opacity: 1,
        duration: 2,

        x: 0,
        scrollTrigger: {
          trigger: el.querySelector(".l-two"),
          start: "top center",
          end: "top center",
        },
      }
    );
  }, []);
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".r-two"),
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        scrollTrigger: {
          trigger: el.querySelector(".r-two"),
          start: "top center",
          end: "top center",
          ease: Elastic.easeIn
        },
      }
    );
  }, []);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".l-three"),
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        duration: 2,

        y: 0,
        scrollTrigger: {
          trigger: el.querySelector(".l-three"),
          start: "top center",
          end: "top center",
        },
      }
    );
  }, []);
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".r-three"),
      {
        opacity: 0,
        x: 0,
      },
      {
        opacity: 1,
        duration: 2,
        x: 0,
        scrollTrigger: {
          trigger: el.querySelector(".r-three"),
          start: "top center",
          end: "top center",
        },
      }
    );
  }, []);

  // image animation 


  return (
    <div className="projects" id="projects" ref={ref}>
      <div className="project-box box-1">
        <div className="left l-one">
          <h1 className="header"> featured project </h1>
          <h1 className="site"> Shmagity.com </h1>
          <p className="desc">
            Shmagity is a website I created that allows a user to store and save
            their reuseable lines of code. You don't just save code, you save
            time.
          </p>
          <div className="project-btns">
            <a
              href="https://www.shmagity.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </a>
            <Link to="/shmagity" className="link" target="_blank">
              Learn More
            </Link>
          </div>
        </div>
        <div className="right r-one">
          {/* <img src="../images/spiral.png" alt="" id="spiral"/> */}

          <img src="../images/shmagity.png" alt="" className="shmag-img" />
        </div>
      </div>
      <div className="project-box">
        <div className="left l-two">
          <h1 className="header"> featured project </h1>
          <h1 className="site"> poolhostnfl.com </h1>
          <p className="desc">
            Poolhost is a project I created for my capstone. It's an NFL weekly
            pick 'em pool where users get the chance to compete against others.
          </p>
          <div className="project-btns">
            <a href="https://poolhostnfl.com/" target="_blank" rel="noreferrer">
              Visit site
            </a>
            <Link to="/poolhostNFL" className="link" target="_blank">
              Learn More
            </Link>
          </div>
        </div>
        <div className="right r-two">
          <img src="../images/poolhost.png" alt="" />
        </div>
      </div>
      <div className="project-box">
        <div className="left l-three">
          <h1 className="header"> upcomming project </h1>
          <h1 className="site"> Travel Planner </h1>
          <p className="desc">
            Travel app is a project I am currently working on. It helps you plan
            your trip and budget.
          </p>
          <div className="project-btns">
            <a href="#"> Visit site </a>
            <Link to="/travel" className="link" target="_blank">
              Learn More
            </Link>
          </div>
        </div>
        <div className="right r-three">
          <img src="../images/travel.JPG" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
