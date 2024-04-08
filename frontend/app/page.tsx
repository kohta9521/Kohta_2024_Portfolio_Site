"use client";
import React from "react";

// scss
import styles from "../styles/page.module.scss";

// components import
import Top from "@/components/organisms/Top";
import Header from "@/components/organisms/Header";
import RecentWork from "@/components/organisms/RecentWork";
import About from "@/components/organisms/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Top />
      <RecentWork />
      <About />
    </main>
  );
}
