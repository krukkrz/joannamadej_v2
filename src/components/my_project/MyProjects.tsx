import Card from "./card/Card";
import { getProjects } from "../../services/data";
import styles from "./MyProjects.module.scss";

const MyProjects = () => {
  const projects = getProjects();
  return (
    <div>
      <h1>My Projects</h1>
      <div className={styles.cards}>
        {projects.map((project) => (
          <Card {...project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
