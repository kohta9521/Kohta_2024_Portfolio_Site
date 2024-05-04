import React from "react";
// next
import Link from "next/link";

// scss
import styles from "./styles/List.module.scss";

// props
export type ListProps = {
  id: number;
  text: string;
  link: string;
};

const List = ({ id, text, link }: ListProps) => {
  return (
    <Link className={styles.linkBox} href={link} key={id}>
      <p className={styles.linkText}>{text}</p>
    </Link>
  );
};

export default List;
