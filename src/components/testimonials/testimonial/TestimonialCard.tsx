import { Testimonial } from "../../../services/data";
import styles from "./TestimonialCard.module.scss";

const TestimonialCard = ({ title, description }: Testimonial) => {
  return (
    <div className={styles.testimonial}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TestimonialCard;
