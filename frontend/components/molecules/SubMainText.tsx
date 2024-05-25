import React from "react";

// scss
import styles from "./styles/SubMainText.module.scss";

// type
export type SubMainTextProps = {
  id: number;
  text: string;
};

const SubMainText = ({ id, text }: SubMainTextProps) => {
  return (
    <div className={styles.textBox}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default SubMainText;
