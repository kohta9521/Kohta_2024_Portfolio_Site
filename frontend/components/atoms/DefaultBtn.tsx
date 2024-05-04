import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/DefaultBtn.module.scss";

// props
export type DefaultBtnProps = {
  link: string;
  text: string;
};

const DefaultBtn = ({ link, text }: DefaultBtnProps) => {
  return (
    <Link className={styles.btn} href={link}>
      {text}
    </Link>
  );
};

export default DefaultBtn;
