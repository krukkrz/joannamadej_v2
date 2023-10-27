import Navbar from "../navbar/Navbar";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Page;
