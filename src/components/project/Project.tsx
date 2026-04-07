import React from "react";
import styles from "./Project.module.scss";

type Project = {
  project: any;
  isHovered?: boolean;
  isAnyHovered?: boolean;
};

const Project = ({ project, isHovered, isAnyHovered }: Project) => {
  return (
    <div className={styles.project}>
      <div className={!isHovered && isAnyHovered ? styles.overlay : undefined}></div>
      <div className={styles.projectContent}>
        <p className={styles.build}>{project.build}</p>
        <h1 className={styles.name}>{project.name}</h1>
        <p className={styles.description}>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
