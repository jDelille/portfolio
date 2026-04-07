"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [active, setActive] = useState("projects");
  
 const sectionIds = useMemo(() => ['projects', 'about', 'contact'], []);
 const [scrollEnabled, setScrollEnabled] = useState(true);

  useEffect(() => {
  const handleScroll = () => {
   if (scrollEnabled) {
    const currentSection = sectionIds.find((id) => {
     const section = document.getElementById(id);
     if (section) {
      const rect = section.getBoundingClientRect();
      return (
       rect.top <= window.innerHeight / 2 &&
       rect.bottom >= window.innerHeight / 2
      );
     }
     return false;
    });
    if (currentSection) {
     setActive(currentSection);
    }
   }
  };

  const cleanup = () => {
   window.removeEventListener('scroll', handleScroll);
  };

  window.addEventListener('scroll', handleScroll);
  return cleanup;
 }, [sectionIds, setActive, scrollEnabled]);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={active === "projects" ? styles.active : styles.inactive}>
          <span className={styles.number}>01</span>
          <button onClick={() => scrollTo("projects")}>
            <span
              className={
                active === "projects" ? styles.extendedLine : styles.defaultLine
              }
            ></span>
            Projects
          </button>
        </li>
        <li className={active === "about" ? styles.active : styles.inactive}>
          <span className={styles.number}>02</span>
          <button onClick={() => scrollTo("about")}>
            <span
              className={
                active === "about" ? styles.extendedLine : styles.defaultLine
              }
            ></span>
            About
          </button>
        </li>
        <li className={active === "contact" ? styles.active : styles.inactive}>
          <span className={styles.number}>03</span>
          <button onClick={() => scrollTo("contact")}>
            <span
              className={
                active === "contact" ? styles.extendedLine : styles.defaultLine
              }
            ></span>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
