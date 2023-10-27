import Navbar from "../navbar/Navbar";
import styles from "./Page.module.css";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
  return (
    <div className={styles.page}>
      <Navbar />
      {children}
    </div>
  );
};

export default Page;
