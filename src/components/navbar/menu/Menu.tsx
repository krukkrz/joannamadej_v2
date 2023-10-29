import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
import close from "../../../assets/icons/close.svg";

type Props = {
  onClose: () => void;
};

const Menu = (props: Props) => {
  return (
    <div className={styles.widget}>
      <div className={styles.background}></div>
      <div className={styles.menu}>
        <div className={styles.items_wrapper}>
          <div className={styles.items}>
            <Link to={"/"}>Home</Link>
            <hr />
            <Link to={"/"}>My projects</Link>
            <hr />
            <Link to={"/"}>About me</Link>
            <hr />
            <Link to={"/"}>Testimonials</Link>
            <hr />
            <Link to={"/"}>Contact</Link>
          </div>
        </div>
        <img src={close} alt="close" onClick={props.onClose} />
      </div>
    </div>
  );
};

export default Menu;
