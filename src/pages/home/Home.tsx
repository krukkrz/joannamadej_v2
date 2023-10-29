import Page from "../../components/page/Page";
import Hero from "../../components/hero/Hero";
import MyProjects from "../../components/my_project/MyProjects";
import AboutMe from "../../components/about_me/AboutMe";
import styles from "./Home.module.scss";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <Page>
      <Hero />
      <div className={styles.home}>
        <MyProjects />
        <AboutMe />
        <Testimonials />
        <Contact />
      </div>
    </Page>
  );
};

export default Home;
