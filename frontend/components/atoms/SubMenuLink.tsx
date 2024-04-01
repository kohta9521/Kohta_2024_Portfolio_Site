import Link from "next/link";
import React from "react";

// scss import
import styles from "./styles/SubMenuLink.module.scss";

// peops
export type SubMenuLinkProps = {
  id: number;
  title: string;
  link: string;
};

const SubMenuLink = ({ id, title, link }: SubMenuLinkProps) => {
  return (
    <Link key={id} href={link} className={styles.linkBox}>
      <p className={styles.linkText}>{title}</p>
    </Link>
  );
};

export default SubMenuLink;
