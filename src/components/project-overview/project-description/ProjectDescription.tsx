import React, { useLayoutEffect, useRef } from "react";
import styles from "./ProjectDescription.module.scss";
import Link from "next/link";
import {
  createParagraphAnimation,
  createScrollTrigger,
  createTitleAnimation,
} from "@/components/Animations/Animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

type ProjectDescriptionProps = {
  project: any;
};

const ProjectDescription = ({ project }: ProjectDescriptionProps) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useLayoutEffect(() => {
    const titleAnimation = createTitleAnimation(titleRef);
    const titleTimeline = gsap.timeline();
    titleTimeline.add(titleAnimation);
    createScrollTrigger(titleRef, titleTimeline, "top bottom-=100px");

    const paragraphAnimation = createTitleAnimation(paragraphRef);
    const paragraphTimeline = gsap.timeline();
    paragraphTimeline.add(paragraphAnimation);
    createScrollTrigger(paragraphRef, paragraphTimeline, "top bottom-=200px");

    const buttonAnimation = createParagraphAnimation(buttonRef);
    const buttonTimeline = gsap.timeline();
    buttonTimeline.add(buttonAnimation);
    createScrollTrigger(buttonRef, buttonTimeline, "top bottom-=150px");

    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      className={styles.projectDescription}
      style={{ background: project.projectColor }}
    >
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.backgroundText}>
          {project.projectBackgroundText}
        </h2>
        <h1 className={styles.introText} ref={titleRef}>
          Introduction
        </h1>
        <p ref={paragraphRef}>{project.projectIntro}</p>

        <Link
          href={project.link}
          target="_blank"
          className={styles.websiteLink}
          ref={buttonRef}
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectDescription;
