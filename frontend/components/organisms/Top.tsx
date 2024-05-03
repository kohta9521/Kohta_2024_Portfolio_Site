"use client";
import React from "react";

// scss
import styles from "./styles/Top.module.scss";

// components
import ConsoleAnimation from "../molecules/ConsoleAnimation";

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.leftBox}></div>
      <div className={styles.rightBox}>
        <h1>Welcome to my portfolio stte</h1>
      </div>
    </div>
  );
};

export default Top;
