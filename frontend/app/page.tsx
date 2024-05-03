"use client";
import React from "react";

// scss
import styles from "../styles/page.module.scss";

// components import
import Header from "@/components/organisms/Header";
import Top from "@/components/organisms/Top";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Top />
    </main>
  );
}
