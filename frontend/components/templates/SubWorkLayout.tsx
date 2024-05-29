import React from "react";

// scss
import styles from "./styles/SubWorkLayout.module.scss";

// components
import Header from "../organisms/Header";
import SubContactBox from "../organisms/SubContactBox";
import Footer from "../organisms/Footer";

// props
export type SubWorkLayoutProps = {
  children: React.ReactNode;
};

const SubWorkLayout = ({ children }: SubWorkLayoutProps) => {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.box}>{children}</div>
      <div className={styles.contactBox}>
        <SubContactBox />
      </div>
      <Footer />
    </div>
  );
};

export default SubWorkLayout;
