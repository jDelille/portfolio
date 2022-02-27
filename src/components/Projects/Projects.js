import React, { useRef, useEffect } from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import { gsap, Power2, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "./projects.json";

function Projects() {
  // gsap animations
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelectorAll(".left"),
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        scrollTrigger: {
          trigger: el.querySelectorAll(".left"),
          start: "top center",
          end: "top center",
        },
      }
    );
    gsap.fromTo(
      el.querySelectorAll(".r-two"),
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        scrollTrigger: {
          trigger: el.querySelectorAll(".r-two"),
          start: "top center",
          end: "top center",
          ease: Elastic.easeIn,
        },
      }
    );
  }, []);

  return (
    <div className="projects" id="projects" ref={ref}>
      {projects.projects.map((project, index) => {
        return (
          <div className="project-box"  key={index}>
            <div className="left l-two">
              <h1 className="header"> {project.type} </h1>
              <h1 className="site"> {project.title} </h1>
              <p className="desc">{project.description}</p>
              <div className="project-btns">
                <a href={project.website} target="_blank" rel="noreferrer">
                  Visit site
                </a>
                <Link to={project.details} className="link" target="_blank">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="right r-two">
              <img src={project.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
