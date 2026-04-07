import styles from './ProjectDetails.module.scss';

type ProjectDetailsProps = {
    project: any;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className={styles.projectDetails}>
        <div className={styles.detailsWrapper}>
            <div className={styles.text}>
                <div className={styles.purpose}>
                    <h2>Purpose</h2>
                    <p>{project.projectPurpose}</p>
                </div>
                <div className={styles.build}>
                    <h2>Build</h2>
                    <p>{project.projectBuild}</p>
                </div>
            </div>
            <div className={styles.siteImages}>
                <img src={project.projectImageSmall} alt=""  />
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails