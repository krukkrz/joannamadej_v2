import { Project } from "../../../services/projects";
import styles from "./Card.module.scss";
import Button from "../../button/Button";

const Card = (project: Project) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={project.tile} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <Button text="Read more" url={project.url} />
    </div>
  );
};
export default Card;
