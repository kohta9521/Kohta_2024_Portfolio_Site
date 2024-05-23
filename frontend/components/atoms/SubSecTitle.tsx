import React from "react";

// scss
import styles from "./styles/SubSecTitle.module.scss";

// hooks
import useAOS from "@/hooks/useAOS";

// props
export type SubSecTitleProps = {
  id: number;
  title: string;
};

const SubSecTitle = ({ id, title }: SubSecTitleProps) => {
  useAOS();
  return (
    <div className={styles.box} key={id} data-aos="fade-up">
      <span className={styles.bar}></span>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default SubSecTitle;
