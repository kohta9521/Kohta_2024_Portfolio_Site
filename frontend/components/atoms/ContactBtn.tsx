import Link from "next/link";
import React from "react";

// scss
import styles from "./styles/ContactBtn.module.scss";

// react icons
import { FaPhoneAlt } from "react-icons/fa";

const ContactBtn = () => {
  return (
    <Link href={"/contact"} className={styles.contactBtn}>
      <p className={styles.contactText}>Contact Me</p>
      <FaPhoneAlt className={styles.contactIcon} />
    </Link>
  );
};

export default ContactBtn;
