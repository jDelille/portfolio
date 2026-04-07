import React from "react";
import styles from "./Hero.module.scss";
import Navbar from "../navbar/Navbar";
import { FaLinkedin, FaGithub, FaExternalLinkAlt  } from "react-icons/fa";


const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Justin Delille</h1>
      <h2>Software Engineer</h2>
      <p className={styles.bio}>
        <span>Software Engineer based in Scottsdale, AZ</span>. I build
        production-ready web apps with Next.js and TypeScript, with
        a focus on shipping real features and clean deployments.
      </p>

      <Navbar />

      <div className={styles.info}>
        <img src="../images/me.jpg" alt="" />
        <a
          href="https://www.linkedin.com/in/justin-delille/"
          target="_blank"
          className={styles.icon}
        >
          <FaLinkedin />
          <p>Linkedin</p>
          <FaExternalLinkAlt />
        </a>
        <a
          href="https://github.com/jDelille"
          target="_blank"
          className={styles.icon}
        >
          <FaGithub />
          <p>Github</p>
          <FaExternalLinkAlt />
        </a>
      </div>
    </section>
  );
};

export default Hero;
