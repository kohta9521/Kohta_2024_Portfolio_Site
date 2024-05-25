import React from "react";

// scss
import styles from "./styles/BoxTitle.module.scss";

// type
export type BoxTitleProps = {
  id: number;
  jaTitle: string;
  enTitle: string;
};

const BoxTitle = ({ id, jaTitle, enTitle }: BoxTitleProps) => {
  return (
    <div key={id} className={styles.titleBox}>
      <p className={styles.enTitle}>{enTitle}</p>
      <h1 className={styles.jaTitle}>{jaTitle}</h1>
    </div>
  );
};

export default BoxTitle;
