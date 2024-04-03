import React from "react";

// scss
import styles from "./styles/SectionTitle.module.scss";

// props
export interface SectionTitleProps {
  key: number;
  id: string;
  title: string;
}

const SectionTitle = ({ key, id, title }: SectionTitleProps) => {
  return (
    <div key={key} id={id} className={styles.titleBox}>
      <h2 className={styles.titleText}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
