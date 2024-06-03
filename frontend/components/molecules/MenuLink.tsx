import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/MenuLink.module.scss";

// props
export type MenuLinkProps = {
  id: number;
  link: string;
  title: string;
  size?: "large" | "small";
};

const MenuLink = ({ id, link, title, size = "small" }: MenuLinkProps) => {
  return (
    <Link className={styles.link} key={id} href={link}>
      <p className={`${styles.title} ${styles[size]}`}>{title}</p>
    </Link>
  );
};

export default MenuLink;
