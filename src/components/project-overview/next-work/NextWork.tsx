import styles from "./NextWork.module.scss";
import { CgArrowLongRight } from "react-icons/cg";

type NextWorkProps = {
  project: any;
};

const NextWork = ({ project }: NextWorkProps) => {
  return (
    <a href={project.nextProjectLink} className={styles.nextWorkContainer}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <p className={styles.label}>Next Work</p>
          <p className={styles.projectLink}>{project.nextProject}</p>
        </div>
        <div className={styles.arrow}>
          <CgArrowLongRight size={100} />
        </div>
      </div>
    </a>
  );
};

export default NextWork;
