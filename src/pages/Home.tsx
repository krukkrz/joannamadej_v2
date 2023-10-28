import Page from "../components/page/Page";
import Hero from "../components/hero/Hero";
import MyProjects from "../components/my_project/MyProjects";

const Home = () => {
  return (
    <Page>
      <Hero />
      <MyProjects />
      <br />
      <br />
    </Page>
  );
};

export default Home;
