import Link from "next/link";
import Image from "next/image";
import React from "react";

// scss
import styles from "./styles/RecentWorkCard.module.scss";

// props
export interface RecentWorkCardProps {
  key: number;
  id: string;
  title: string;
  img: string;
  link: string;
  text: string;
}

const RecentWorkCard = ({
  key,
  id,
  title,
  img,
  link,
  text,
}: RecentWorkCardProps) => {
  return (
    <Link id={id} key={key} href={link} className={styles.linkBox}>
      <h3 className={styles.title}>{title}</h3>
      <Image
        className={styles.img}
        src={img}
        width={300}
        height={250}
        alt="recent work card img"
      />
      <div className={styles.hoverBox}>
        <p className={styles.mainText}>{text}</p>
        <span className={styles.circle}></span>
      </div>
      <span className={styles.arrow}></span>
    </Link>
  );
};

export default RecentWorkCard;
