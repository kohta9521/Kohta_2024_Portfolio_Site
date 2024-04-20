import React from "react";
import Image from "next/image";

// scss
import styles from "./styles/SectionTitle.module.scss";

// props
export interface SectionTitleProps {
  key: number;
  id: string;
  jaTitle: string;
  enTitle: string;
}

const SectionTitle = ({ key, id, jaTitle, enTitle }: SectionTitleProps) => {
  return (
    <div className={styles.titleBox}>
        <p className={styles.jaTitle}>{jaTitle}</p>
        <h1 className={styles.enTitle}></h1>
    </div>
  );
};

export default SectionTitle;
