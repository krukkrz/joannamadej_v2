import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import hamburger from "../../assets/icons/hamburger.svg";
const Navbar = () => {
  return (
      <>
        <div className={styles.navbar}>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>My projects</Link>
          <Link to={"/"}>About me</Link>
          <Link to={"/"}>Testimonials</Link>
          <Link to={"/"}>Contact</Link>
        </div>
          <div className={styles.hamburger}>
              <img src={hamburger} alt="hamburger" />
          </div>
      </>
  );
};

export default Navbar;
