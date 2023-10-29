import { Project } from "../../../services/data";
import styles from "./Card.module.scss";
import placeholder from "../../../assets/my_projects_tiles/placeholder.svg";
import Button from "../../button/Button";

const tiles: any[] = [placeholder];

const Card = (project: Project) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={tiles[project.image]} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <Button text="Read more" url={project.url} />
    </div>
  );
};
export default Card;
