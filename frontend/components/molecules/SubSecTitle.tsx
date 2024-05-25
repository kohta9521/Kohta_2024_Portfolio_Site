import React from "react";

// scss
import styles from "./styles/SubSecTitle.module.scss";

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
  return (
    <div className={styles.titleBox} key={id} id={stringid}>
      <span className={`${styles.circle} ${styles[color]}`}></span>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default SubSecTitle;
