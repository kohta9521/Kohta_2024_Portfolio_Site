import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components import
import HamburgerBtn from "../molecules/HamburgerBtn";
// このheaderはレスポンシブの時に表示する

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Kohta Portfolio Site</h1>
      <HamburgerBtn />
    </div>
  );
};

export default Header;
