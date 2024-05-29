"use client";
import React, { useEffect } from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/SubNextButton.module.scss";

// aos import
import Aos from "aos";
import "aos/dist/aos.css";

// props
export type SubNextButtonProps = {
  id: number;
  link: string;
  text: string;
};

const SubNextButton = ({ id, link, text }: SubNextButtonProps) => {
  return (
    <Link className={styles.button} href={link} key={id} data-aos="fade-up">
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default SubNextButton;
