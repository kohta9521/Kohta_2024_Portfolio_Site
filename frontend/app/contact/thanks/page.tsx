"use client";
import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./Thanks.module.scss";

const Thanks = () => {
  return (
    <div className={styles.thanks}>
      <Link href="/">Back to Previous Page</Link>
    </div>
  );
};

export default Thanks;
