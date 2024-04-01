import React from "react";

// components
import HamburgerBtn from "../molecules/HamburgerBtn";

// scss
import styles from "./styles/Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <HamburgerBtn />
      </div>
      <div className={styles.middle}></div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Sidebar;
