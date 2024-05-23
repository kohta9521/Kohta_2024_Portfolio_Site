import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ContactButton.module.scss";

// icons
import { GrContact } from "react-icons/gr";

const ContactButton = () => {
  return (
    <Link href="/contact" className={styles.button}>
      <GrContact className={styles.icon} />
      <p className={styles.text}>お問い合わせはこちら</p>
    </Link>
  );
};

export default ContactButton;
