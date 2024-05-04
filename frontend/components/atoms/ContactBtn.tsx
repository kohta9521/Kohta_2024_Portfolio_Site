import React from "react";

// next
import Link from "next/link";

// hooks
import useAOS from "@/hooks/useAOS";

// scss
import styles from "./styles/ContactBtn.module.scss";

// icons
import { MdContactSupport } from "react-icons/md";

const ContactBtn = () => {
  useAOS();
  return (
    <Link className={styles.btn} href="/contact" data-aos="fade-up">
      <MdContactSupport className={styles.icon} />
      <p className={styles.text}>話を聞いてみる</p>
    </Link>
  );
};

export default ContactBtn;
