import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type Props = {
  text: string;
  url: string;
};
const Button = ({ text, url }: Props) => {
  return (
    <Link to={url}>
      <div className={styles.button}>
        <div>{text}</div>
      </div>
    </Link>
  );
};

export default Button;
