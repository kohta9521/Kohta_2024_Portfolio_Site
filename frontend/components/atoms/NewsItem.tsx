import React from "react";

// scss
import styles from "./styles/NewsItem.module.scss";
import Link from "next/link";

// props
export type NewsItemProps = {
  id: number;
  link: string;
  date: string;
  genre: string;
  text: string;
};

const NewsItem = ({ id, link, date, genre, text }: NewsItemProps) => {
  return <Link key={id} className={styles.newsBox} href={link}></Link>;
};

export default NewsItem;
