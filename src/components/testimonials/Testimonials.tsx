import { getTestimonials } from "../../services/data";
import TestimonialCard from "./testimonial/TestimonialCard";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = getTestimonials();
  return (
    <div>
      <h1>Testimonials</h1>
      <div className={styles.testimonials}>
        <div className={styles.testimonials_col1}>
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className={styles.testimonials_col2}>
          <TestimonialCard {...testimonials[2]} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
