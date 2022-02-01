/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useRef, useState } from "react";
import "./About.scss";

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
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AiFillApi, AiOutlineSend } from "react-icons/ai";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Animation from "../Home/Animation";
import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";
init("user_9AzWABg48JM2r7AstLnjU");

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".left"),
      {
        opacity: 0,
        x: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        x: 0,
        scrollTrigger: {
          trigger: el.querySelector(".left"),
          start: "top center",
          end: "top center",
        },
      }
    );
  }, []);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".right"),
      {
        opacity: 0,
        x: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        x: 0,
        scrollTrigger: {
          trigger: el.querySelector(".right"),
          start: "top center",
          end: "top center",
        },
      }
    );
  }, []);

  // email stuff

  const [sent, setSent] = useState(false);

  const form = useRef();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "gmail-template",
        e.target,
        "user_9AzWABg48JM2r7AstLnjU"
      )
      .then(
        (result) => {
          setSent(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName = "";
    setEmail = "";
    setMsg = "";
    setSent(false);
  };

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="left">
          <div className="top">
            <h1>About me</h1>
            <p>
              Hey there, I'm Justin, I'm a <span>Front-End Developer</span>.
            </p>

            <p>
              I love solving problems, learning about code, and creating
              websites with engaging and interactive experiences.
            </p>

            <p>
              I am currently learning and polishing my skills with React,
              Typescript, and using APIs. Also, on the road to rank 1 in
              Codewars.
            </p>
            <p> Checkout my Github and Linkedin. </p>
            <div className="icons">
              <a href="https://github.com/jDelille" target="_blank">
                <AiFillGithub className="icon-ab" />
              </a>
              <a
                href="https://www.linkedin.com/in/justin-delille/"
                target="_blank"
              >
                <AiFillLinkedin className="icon-ab" />
              </a>
            </div>
            <p>
              <span> Looking for work </span> and opportunities to gain
              experience.
            </p>
          </div>
          <div className="bottom">
            <h1> Skills </h1>
            <div className="skills">
              <ul className="client-skills">
                <li className="skill">
                  <DiReact className="skill-icon" /> React
                </li>
                <li className="skill">
                  <SiJavascript className="skill-icon" />
                  Javascript
                </li>

                <li className="skill">
                  <DiCss3 className="skill-icon" /> CSS
                </li>
                <li className="skill">
                  <SiSass className="skill-icon" /> Sass
                </li>
              </ul>
              <ul className="server-skills">
                <li className="skill">
                  <SiNodedotjs className="skill-icon" />
                  Node.js
                </li>
                <li className="skill">
                  <SiMongodb className="skill-icon" /> MongoDB
                </li>

                <li className="skill">
                  <SiFirebase className="skill-icon" /> Firebase
                </li>
                <li className="skill">
                  <AiFillApi className="skill-icon" /> API
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <form onSubmit={sendEmail}>
            <h1>
              {" "}
              Let's talk <span>.</span>
            </h1>
            <label htmlFor=""> Name </label>
            <input
              className="inpt"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor=""> Email </label>
            <input
              className="inpt"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor=""> Message </label>
            <textarea
              id=""
              cols="30"
              rows="80"
              placeholder="..."
              required
              name="msg"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <button onclick={() => setSent(!sent)}>
              {!sent ? <p>Send Message </p> : <p> Message Sent</p>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
