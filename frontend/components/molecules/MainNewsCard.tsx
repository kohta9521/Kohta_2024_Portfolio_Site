import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/MainNewsCard.module.scss";

// props
export type MainNewsCardProps = {
  id: number;
  link: string;
  img: string;
  title: string;
  desc: string;
  date: string;
};

const MainNewsCard = ({
  id,
  link,
  img,
  title,
  desc,
  date,
}: MainNewsCardProps) => {
  return (
    <Link key={id} className={styles.card} href={link}>
      <Image
        className={styles.image}
        src={img}
        width={520}
        height={390}
        alt="main news image"
      />
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </Link>
  );
};

export default MainNewsCard;
