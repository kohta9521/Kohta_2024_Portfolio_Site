import React from "react";

// scss
import styles from "./styles/Footer.module.scss";

// components

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftBox}></div>
        <div className={styles.rightBox}>
          <div className={styles.topBox}></div>
          <div className={styles.bottomBox}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
