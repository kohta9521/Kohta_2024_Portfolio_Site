"use client";
import React, { useEffect } from "react";

// scss
import styles from "./styles/SubSecTitle.module.scss";

// aos imports
import AOS from "aos";
import "aos/dist/aos.css";

// type
export type SubSecTitleProps = {
  id: number;
  stringid: string;
  text: string;
  color?: "white" | "black" | "green";
};

const SubSecTitle = ({
  id,
  stringid,
  text,
  color = "green",
}: SubSecTitleProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className={styles.titleBox} key={id} id={stringid} data-aos="fade-up">
      <span className={`${styles.circle} ${styles[color]}`}></span>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default SubSecTitle;
