"use client";
import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/SubPageLayout.module.scss";

// components
import Header from "../organisms/Header";

// icon
import { IoIosHome } from "react-icons/io";

// props
export type SubPageLayoutProps = {
  id: number;
  level: string[];
  title: string;
  subtitle: string;
  desc: string;
  children: React.ReactNode;
};

const SubPageLayout = ({
  id,
  level,
  title,
  subtitle,
  desc,
  children,
}: SubPageLayoutProps) => {
  return (
    <div className={styles.layout} key={id}>
      <Header />
      <div className={styles.hero}>
        <div className={styles.levelBox}>
          <Link href="/" className={styles.homeButton}>
            <IoIosHome className={styles.icon} />
            <p className={styles.home}>Home</p>
          </Link>
          <p className={styles.slash}>/</p>
          {level.map((item, index) => (
            <p key={index} className={styles.level}>
              {item}
            </p>
          ))}
        </div>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};

export default SubPageLayout;
