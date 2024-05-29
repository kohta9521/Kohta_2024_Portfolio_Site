import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/SnsBox.module.scss";

// icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiWantedly } from "react-icons/si";

const SnsBox = () => {
  return (
    <div className={styles.sns}>
      <span className={styles.border}></span>
      <Link href="https://github.com/kohta9521" className={styles.link}>
        <FaGithub className={styles.icon} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/%E5%85%89%E5%A4%AA-%E6%B2%B3%E5%86%85-89476b2a2/?originalSubdomain=jp"
        className={styles.link}
      >
        <FaLinkedin className={styles.icon} />
      </Link>
      <Link href="https://x.com/kohta_piano" className={styles.link}>
        <FaSquareXTwitter className={styles.icon} />
      </Link>
      <Link
        href="https://www.wantedly.com/id/kouta_kochi_f"
        className={styles.link}
      >
        <SiWantedly className={styles.icon} />
      </Link>
    </div>
  );
};

export default SnsBox;
