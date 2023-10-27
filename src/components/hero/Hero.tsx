import joannaxl from "../../assets/hero/xl.png";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.headline}>
        <p>
          Hi, Jo here!
          <br />
          I am UX/UI
          <br />
          Designer.
        </p>
      </div>
      <img src={joannaxl} alt="Joanna" />
    </div>
  );
};

export default Hero;
