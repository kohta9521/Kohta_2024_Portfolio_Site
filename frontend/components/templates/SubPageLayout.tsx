import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/SubPageLayout.module.scss";

// components
import Header from "../organisms/Header";

// icon
import { IoIosHome } from "react-icons/io";
import SubContactBox from "../organisms/SubContactBox";
import Footer from "../organisms/Footer";

// hooks
// import useAOS from "@/hooks/useAOS";

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
          {level.map((item, index) => (
            <p key={index} className={styles.level}>
              <span className={styles.slash}>/</span>
              {item}
            </p>
          ))}
        </div>
        <div className={styles.titleBox} data-aos="fade-up">
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
      <div className={styles.container} data-aos="fade-up">
        <div className={styles.main}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default SubPageLayout;
