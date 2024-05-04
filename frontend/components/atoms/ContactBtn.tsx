import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ContactBtn.module.scss";

// icons
import { MdContactSupport } from "react-icons/md";

const ContactBtn = () => {
  return (
    <Link className={styles.btn} href="/contact">
      <MdContactSupport className={styles.icon} />
      <p className={styles.text}>話を聞いてみる</p>
    </Link>
  );
};

export default ContactBtn;
