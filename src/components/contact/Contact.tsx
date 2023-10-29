import phone from "../../assets/icons/phone.svg";
import paperPlane from "../../assets/icons/paper_plane.svg";
import linkedin from "../../assets/icons/linkedin.svg";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className={styles.contact}>
        <hr />
        <div className={styles.item}>
          <img src={phone} alt="phone" /> +48 795 597 310
        </div>
        <hr />
        <div className={styles.item}>
          <img src={paperPlane} alt="paper_plane" /> joannamonikamadej@gmail.com
        </div>
        <hr />
        <div className={styles.item}>
          <img src={linkedin} alt="paper_plane" /> /jomadej
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Contact;
