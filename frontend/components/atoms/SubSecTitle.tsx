import React from "react";

// scss
import styles from "./styles/SubSecTitle.module.scss";

// props
export type SubSecTitleProps = {
  id: number;
  title: string;
};

const SubSecTitle = ({ id, title }: SubSecTitleProps) => {
  return (
    <div className={styles.box} key={id} data-aos="fade-up">
      <span className={styles.bar}></span>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default SubSecTitle;
