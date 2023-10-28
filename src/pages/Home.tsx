import Page from "../components/page/Page";
import Hero from "../components/hero/Hero";
import MyProjects from "../components/my_project/MyProjects";
import AboutMe from "../components/about_me/AboutMe";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Page>
      <Hero />
      <div className={styles.home}>
        <MyProjects />
        <AboutMe />
      </div>
      <br />
      <br />
    </Page>
  );
};

export default Home;
