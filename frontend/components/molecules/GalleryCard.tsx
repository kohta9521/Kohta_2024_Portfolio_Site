import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/GalleryCard.module.scss";

// icon
import { FaExternalLinkAlt } from "react-icons/fa";

// types
export type GalleryCardProps = {
  id: number;
  link: string;
  date: string;
  lang: string;
  title: string;
  desc: string;
  img: string;
};

const GalleryCard = ({
  id,
  link,
  date,
  lang,
  title,
  desc,
  img,
}: GalleryCardProps) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.contentBox}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>制作期間：{date}</p>
        <p className={styles.lang}>使用技術：{lang}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
      <div className={styles.imageBox}>
        <Link href={link} className={styles.link}>
          <FaExternalLinkAlt className={styles.icon} />
          <Image
            className={styles.image}
            src={img}
            alt={title}
            width={400}
            height={300}
            layout="responsive"
          />
        </Link>
      </div>
    </div>
  );
};

export default GalleryCard;
