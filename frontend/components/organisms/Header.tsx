import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components import
import HamburgerBtn from "../molecules/HamburgerBtn";
// このheaderはレスポンシブの時に表示する

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <h1 className={styles.logo}>K Portfolio</h1>
      </div>
      <HamburgerBtn />
    </div>
  );
};

export default Header;
