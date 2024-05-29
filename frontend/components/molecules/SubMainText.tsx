"use client";
import React, { useEffect } from "react";

// scss
import styles from "./styles/SubMainText.module.scss";

// aos imports
import AOS from "aos";
import "aos/dist/aos.css";

// type
export type SubMainTextProps = {
  id: number;
  text: string;
};

const SubMainText = ({ id, text }: SubMainTextProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className={styles.textBox} data-aos="fade-up">
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default SubMainText;
