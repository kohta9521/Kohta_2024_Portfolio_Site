import React from "react";
import Link from "next/link";

// scss
import styles from "./styles/TopMoreBtn.module.scss";

// icons
import { AiOutlineArrowRight } from "react-icons/ai";

const TopMoreBtn = () => {
  return (
    <Link href="#about" className={styles.button}>
      <p className={styles.buttonText}>私について</p>
      <div className={styles.circle}>
        <AiOutlineArrowRight className={styles.icon} />
      </div>
    </Link>
  );
};

export default TopMoreBtn;
