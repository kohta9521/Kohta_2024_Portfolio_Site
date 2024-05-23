import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/Logo.module.scss";

const Logo = () => {
  return (
    <Link className={styles.logo} href="/">
      <p className={styles.text}>Kohta Portfolio Site</p>
    </Link>
  );
};

export default Logo;
