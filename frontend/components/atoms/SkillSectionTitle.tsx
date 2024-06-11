import React from "react";

// scss
import styles from "./styles/SkillSectionTitle.module.scss";

// props
export type SectionTitleProps = {
  id: number;
  text: string;
};

const SkillSectionTitle = ({ id, text }: SectionTitleProps) => {
  return (
    <div className={styles.titleBox}>
      <p className={styles.title}>{text}</p>
    </div>
  );
};

export default SkillSectionTitle;
