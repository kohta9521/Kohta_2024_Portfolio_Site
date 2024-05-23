import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/AboutCard.module.scss";

// props
export type AboutProps = {
  id: number;
  title: string;
  desc: string;
  link: string;
  linkText: string;
};

const AboutCard = ({ id, title, desc, link, linkText }: AboutProps) => {
  return (
    <div className={styles.card} key={id}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      <Link href={link} className={styles.link}>
        {linkText}
      </Link>
    </div>
  );
};

export default AboutCard;
