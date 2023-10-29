import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>My projects</Link>
      <Link to={"/"}>About me</Link>
      <Link to={"/"}>Testimonials</Link>
      <Link to={"/"}>Contact</Link>
    </div>
  );
};

export default Navbar;
