"use client";
import React from "react";

// scss
import styles from "./styles/Top.module.scss";

// spline
import Spline from "@splinetool/react-spline";

// components

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.leftBox}>
        <Spline scene="https://prod.spline.design/7I2ng5jCiUGfTDl3/scene.splinecode" />
      </div>
      <div className={styles.rightBox}></div>
    </div>
  );
};

export default Top;
