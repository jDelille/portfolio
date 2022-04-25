/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.scss";
import $ from "jquery";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const [expand, setExpand] = useState(false);

  function scrollProjects() {
    document.getElementById("projects").scrollIntoView(true);
    setExpand(false)
  }

  function scrollAbout() {
    document.getElementById("about").scrollIntoView(true);
    setExpand(false)

  }

  function scrollHome() {
    document.getElementById("home").scrollIntoView(true);
    setExpand(false)

  }

  $(window).scroll(function () {
    /* affix after scrolling 100px */
    if ($(document).scrollTop() > 100) {
      $(".nav-contents").addClass("hide");
      $(".circle-nav").addClass("scrolled");
    } else {
      $(".nav-contents").removeClass("hide");
      $(".circle-nav").removeClass("scrolled");
    }
  });


  return (
    <>
      <div className="navbar" id="navbar">
        <div className="brand">
          <h1 onClick={scrollHome}> Justin </h1>
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={scrollProjects}> Projects </a>
          </li>
          <li>
            <a onClick={scrollAbout}> About </a>
          </li>
          <li className="hide">
            <a onClick={scrollAbout}> Contact </a>
          </li>
          <div className="icons">
            <a
              href="https://github.com/jDelille"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/justin-delille/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="icon" />
            </a>
          </div>
        </ul>
        <div className="burger">
          <FaBars
            className="mobile-burger"
            onClick={() => setExpand(!expand)}
          />
        </div>
      </div>
      {expand && <div className="expanded-menu">
      <ul className="nav-links-mobile">
          <li>
            <a onClick={scrollProjects}> Projects </a>
          </li>
          <li>
            <a onClick={scrollAbout}> About </a>
          </li>
          <li>
            <a onClick={scrollAbout}> Contact </a>
          </li>
        </ul>
        </div>}
    </>
  );
}

export default Navbar;
