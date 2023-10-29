import Navbar from "../navbar/Navbar";
import styles from "./Page.module.scss";
import Footer from "../footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
