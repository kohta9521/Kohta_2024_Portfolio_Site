"use client";
import React from "react";

// components import
import Top from "@/components/organisms/Top";

import styles from "../styles/page.module.scss";
import Header from "@/components/organisms/Header";
import RecentWork from "@/components/organisms/RecentWork";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Top />
      <RecentWork />
    </main>
  );
}
