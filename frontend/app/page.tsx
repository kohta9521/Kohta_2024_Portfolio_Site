"use client";
import React from "react";

// scss
import styles from "../styles/page.module.scss";

// components import
import Top from "@/components/organisms/Top";
import Header from "@/components/organisms/Header";
import News from "@/components/organisms/News";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Top />
      <News />
    </main>
  );
}
