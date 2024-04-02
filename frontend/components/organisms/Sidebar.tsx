import React from "react";

// components
import HamburgerBtn from "../molecules/HamburgerBtn";
import ContactBtn from "../atoms/ContactBtn";

// scss
import styles from "./styles/Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <HamburgerBtn />
      </div>
      <div className={styles.middle}></div>
      <div className={styles.bottom}>
        <ContactBtn />
      </div>
    </div>
  );
};

export default Sidebar;
