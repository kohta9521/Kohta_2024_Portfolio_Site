import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/BoxList.module.scss";

// icons
import { FaFilePdf } from "react-icons/fa6";

// props
export type BoxListProps = {
  id: number;
  text: string;
  link: string;
};

const BoxList = ({ id, text, link }: BoxListProps) => {
  return (
    <Link key={id} href={link} className={styles.btn}>
      <FaFilePdf className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default BoxList;
