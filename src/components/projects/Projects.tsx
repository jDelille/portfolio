"use client";

import { projects } from "@/data/projects.json";
import styles from "./Projects.module.scss";
import Link from "next/link";
import Project from "../project/Project";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isAnyProjectHovered, setIsAnyProjectHovered] = useState(false);

  const handleProjectHover = (projectId: number) => {
    setHoveredProject(projectId);
    setIsAnyProjectHovered(true);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
    setIsAnyProjectHovered(false);
  };

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.link}
          className={styles.project}
          onMouseEnter={() => handleProjectHover(project.id)}
          onMouseLeave={handleProjectLeave}
        >
          <Project
            project={project}
            isHovered={hoveredProject === project.id}
            isAnyHovered={isAnyProjectHovered}
          />
        </Link>
      ))}
    </div>
  );
};

export default Projects;
