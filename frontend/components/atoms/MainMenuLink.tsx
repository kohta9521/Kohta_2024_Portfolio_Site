import Link from "next/link";
import React from "react";

// scss
import styles from "./styles/MainMenuLink.module.scss";

// props
export type MainmenuLinkProps = {
  id: number;
  number: string;
  title: string;
  link: string;
};

const MainMenuLink = ({ id, number, title, link }: MainmenuLinkProps) => {
  return (
    <Link key={id} href={link} className={styles.link}>
      <p className={styles.number}>{number}</p>
      <h2 className={styles.title}>{title}</h2>
    </Link>
  );
};

export default MainMenuLink;
