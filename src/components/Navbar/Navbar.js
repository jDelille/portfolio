import React, { useState } from "react";
import "./Navbar.scss";
import $ from "jquery";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
function Navbar() {
  function scrollProjects() {
    document.getElementById("projects").scrollIntoView(true);
  }

  function scrollAbout() {
    document.getElementById("about").scrollIntoView(true);
  }

  function scrollHome() {
    document.getElementById("home").scrollIntoView(true);
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

  const [expand, setExpand] = useState(false);

  return (
    <>
      <div className="navbar" id="navbar">
        <div className="nav-contents">
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
          </ul>
          <div className="icons">
          <a href="https://github.com/jDelille" target='_blank'><AiFillGithub className="icon" /></a>
          <a href="https://www.linkedin.com/in/justin-delille/" target='_blank'><AiFillLinkedin className="icon" /></a>
          </div>
          
        </div>
       
        {/* <div
        className="circle-nav"
          id={!expand ? "mini" : "expand"}
          onClick={() => setExpand(!expand)}
        >
          <FaBars className={!expand ? "show-bars" : "hide"} />
          
          
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
