"use client";
import React, { useRef } from "react";
import styles from "./ProjectOverview.module.scss";
import ProjectHero from "./project-hero/ProjectHero";
import Loader from "../loader/Loader";
import { projects } from "@/data/projects.json";
import ProjectDescription from "./project-description/ProjectDescription";
import ProjectDetails from "./project-details/ProjectDetails";
import NextWork from "./next-work/NextWork";

type ProjectOverviewProps = {
  projectName: string;
};

const ProjectOverview = ({ projectName }: ProjectOverviewProps) => {
  const appRef = useRef<HTMLDivElement>(null);

  const project =
    projects.find((p) => p.link.toLowerCase() === projectName.toLowerCase()) ||
    projects.find((p) =>
      p.name.toLowerCase().includes(projectName.toLowerCase()),
    );

  console.log("Project found:", project);

  return (
    <>
      <Loader backgroundColor={project?.projectColor} />
      <div className={styles.projectOverview}>
        <ProjectHero project={project} app={appRef}/>
        <ProjectDescription project={project} />
        <ProjectDetails project={project} />
        <NextWork project={project} />
      </div>
    </>
  );
};

export default ProjectOverview;
