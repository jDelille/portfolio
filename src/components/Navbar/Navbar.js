import React, { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  function scrollProjects() {
    document.getElementById("projects").scrollIntoView(true);
  }

  function scrollAbout() {
    document.getElementById("about").scrollIntoView(true);
  }

  return (
    <div className="navbar" id="navbar">
      <div className="nav-contents">
        <div className="brand">
          <h1> Justin </h1>
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
      </div>
    </div>
  );
}

export default Navbar;
