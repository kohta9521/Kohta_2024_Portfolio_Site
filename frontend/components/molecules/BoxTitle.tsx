"use client";
import React, { useEffect } from "react";

// scss
import styles from "./styles/BoxTitle.module.scss";

// aos imports
import AOS from "aos";
import "aos/dist/aos.css";

// type
export type BoxTitleProps = {
  id: number;
  jaTitle: string;
  enTitle: string;
};

const BoxTitle = ({ id, jaTitle, enTitle }: BoxTitleProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div key={id} className={styles.titleBox} data-aos="fade-up">
      <p className={styles.enTitle}>{enTitle}</p>
      <h1 className={styles.jaTitle}>{jaTitle}</h1>
    </div>
  );
};

export default BoxTitle;
