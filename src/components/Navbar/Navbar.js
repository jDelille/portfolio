import React, {useState} from "react";
import "./Navbar.scss";

function Navbar() {




  return (
    <div className="navbar" id="navbar">
      <div className="nav-contents">
        <div className="brand">
          <h1> Justin </h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#projects"> Projects </a>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
          <li className="hide">
            <a href="#about"> Contact </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
