import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/WorkCard.module.scss";

// props
export type WorkCardProps = {
  id: number;
  link: string;
  img: string;
  company: string;
  title: string;
  tags: string[];
};

const WorkCard = ({ id, link, img, company, title, tags }: WorkCardProps) => {
  return (
    <Link key={id} href={link} className={styles.card}>
      <Image
        className={styles.image}
        src={img}
        width={380}
        height={210}
        alt="活動実績画像"
      />
      <p className={styles.company}>{company}</p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <p key={index} className={styles.tag}>
            {tag}
          </p>
        ))}
      </div>
    </Link>
  );
};

export default WorkCard;
