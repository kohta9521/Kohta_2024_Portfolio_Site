import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ViewMoreBtn.module.scss";

// props
export type ViewMoreBtnProps = {
  id: number;
  link: string;
  text: string;
};

const ViewMoreBtn = ({ id, link, text }: ViewMoreBtnProps) => {
  return (
    <Link key={id} href={link} className={styles.btn}>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default ViewMoreBtn;
