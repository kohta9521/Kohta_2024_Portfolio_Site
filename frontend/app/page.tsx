import React from "react";

// scss
import styles from "../styles/page.module.scss";
import Top from "@/components/organisms/Top";

// components import

export default function Home() {
  return (
    <main className={styles.main}>
      <Top />
    </main>
  );
}
