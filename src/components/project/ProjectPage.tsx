import { Project } from "../../services/projects";
import Page from "../page/Page";
import styles from "./ProjectPage.module.scss";

type Props = {
  project: Project;
  children: React.ReactNode;
};
const ProjectPage = ({ project, children }: Props) => {
  return (
    <Page>
      <img src={project.heroXXL} alt="hero" className={styles.heroXXL} />
      <div className={styles.content}>
        <h1>{project.title}</h1>
        <div className={styles.projectData}>
          <div>
            <span>Project type: </span>
            {project.type}
          </div>
          <div>
            <a rel="noreferrer" target="_blank" href={project.figmaFile}>
              Click here to open Figma file
            </a>
          </div>
        </div>
        {children}
      </div>
    </Page>
  );
};

export default ProjectPage;
