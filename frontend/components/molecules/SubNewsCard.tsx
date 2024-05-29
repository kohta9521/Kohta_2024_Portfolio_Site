import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/SubNewsCard.module.scss";

// props
export type SubNewsCardProps = {
  id: number;
  link: string;
  title: string;
  desc: string;
  date: string;
};

// date format function
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("ja-JP", options).format(date);
};

const SubNewsCard = ({ id, link, title, desc, date }: SubNewsCardProps) => {
  return (
    <Link className={styles.card} key={id} href={link}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      <p className={styles.date}>{formatDate(date)}</p>
    </Link>
  );
};

export default SubNewsCard;
