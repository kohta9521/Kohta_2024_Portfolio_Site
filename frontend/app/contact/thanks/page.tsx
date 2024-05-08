"use client";
import React from "react";

// next
import { useRouter } from "next/navigation";

// scss
import styles from "./Thanks.module.scss";

const Thanks = () => {
  const router = useRouter();
  return (
    <div className={styles.thanks}>
      <button type="button" onClick={() => router.back()}>
        Back to Previous Page
      </button>
    </div>
  );
};

export default Thanks;
