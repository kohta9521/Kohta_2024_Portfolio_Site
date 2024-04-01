import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components import

// このheaderはレスポンシブの時に表示する

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}></div>
    </div>
  );
};

export default Header;
