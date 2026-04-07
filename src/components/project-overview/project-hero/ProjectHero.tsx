"use client";
import { useRouter } from "next/navigation";
import styles from "./ProjectHero.module.scss";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { animate } from "@/components/Animations/Animations";

type ProjectHeroProps = {
  project: any;
  app: any;
};

const ProjectHero = ({ project, app }: ProjectHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const bioRef = useRef<HTMLParagraphElement | null>(null);
  const laptopRef = useRef<HTMLImageElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animate(app, heroRef, nameRef, bioRef, laptopRef, infoRef);
    }, app);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.projectHero} ref={heroRef}>
      <div className={styles.backBtn}>
        <button onClick={() => router.push("/")}>Back</button>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.text}>
          <h1 ref={nameRef}>{project?.name}</h1>
          <p ref={bioRef}>
            {project?.projectBio}
          </p>
        </div>
        <div className={styles.image}>
          <img
            src={project?.projectImageSmall}
            alt={`${project?.name} screenshot`}
            className={styles.laptop}
            ref={laptopRef}
          />
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.infoWrapper} ref={infoRef}>
            <div className={styles.infoItem}>
              <span style={{ color: project.projectColor }}>Role</span>
              {project.projectRole}
            </div>
            <p className={styles.infoItem}>
              <span style={{ color: project.projectColor }}>Context</span>
              {project.projectContext}
            </p>
            <p className={styles.infoItem}>
              <span style={{ color: project.projectColor }}>Period</span>
              {project.projectPeriod}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
