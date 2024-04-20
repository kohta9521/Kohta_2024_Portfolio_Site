import React from "react";

// scss
import styles from "./styles/AboutCard.module.scss";

// props
export interface AboutCardProps {
  id: number;
  content: string;
  title: string;
}

const AboutCard = ({ id, content, title }: AboutCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.content}>{content}</h2>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default AboutCard;
