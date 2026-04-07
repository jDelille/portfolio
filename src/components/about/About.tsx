import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <h1>About Me</h1>
      <p>
        I'm Justin, a Software Engineer based in Scottsdale, AZ. I studied
        Applied Computing at Arizona State University, trained at DevMountain,
        and built real production features during my time at 808 Partners. My
        go-to stack is Next.js, TypeScript, React, SCSS, and Supabase. 
        <br />
        <br />
        When I'm
        not coding I'm on the golf course or playing guitar and I love when my
        hobbies inspire what I build.
      </p>

      <div className={styles.skills}>
        <h1>Skills</h1>
        <ul>
          <li>Next.js</li>
          <li>NoSQL</li>
          <li>SCSS</li>
          <li>TypeScript</li>
          <li>SQL</li>
          <li>Git</li>
          <li>React</li>
          <li>PostgreSQL</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div className={styles.experience}>
        <h1>Experience</h1>

        <div className={styles.wrapper}>
          <div className={styles.date}>
            <p>2022 — 2023</p>
          </div>
          <div className={styles.company}>
            <h2>808 Partners — Software Engineer</h2>
            <p>
              At 808 Partners I led frontend development on Muunifi, a social
              platform for financial communities. Built with Next.js, React,
              TypeScript, MobX, and Firebase, I owned weekly deployments,
              conducted code reviews, and collaborated closely with designers
              and project managers on a small agile team.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.education}>
        <h1>Education</h1>
        <div className={styles.wrapper}>
          <div className={styles.date}>
            <p>2022 — 2026</p>
          </div>
          <div className={styles.company}>
            <h2>Arizona State University — B.S., Applied Computing</h2>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.date}>
            <p>2021 — 2022</p>
          </div>
          <div className={styles.company}>
            <h2>DevMountain — Software Engineering</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
