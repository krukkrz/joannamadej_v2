import Navbar from "../navbar/Navbar";
import styles from "./Page.module.scss";
import Footer from "../footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
  return (
    <>
      <div className={styles.page}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Page;
