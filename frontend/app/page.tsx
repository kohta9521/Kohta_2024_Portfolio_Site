"use client";
import React, { useState } from "react";

// scss
import styles from "../styles/page.module.scss";

// components import
import ConsoleAnimation from "@/components/molecules/ConsoleAnimation";
import Top from "@/components/organisms/Top";
import Header from "@/components/organisms/Header";
import About from "@/components/organisms/About";
import Work from "@/components/organisms/Work";
import Profile from "@/components/organisms/Profile";
import Footer from "@/components/organisms/Footer";
import Contact from "@/components/organisms/Contact";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleAnimationComplete = () => {
    setLoadingComplete(true);
  };

  if (loadingComplete) {
    return (
      <div className={styles.main}>
        <Header />
        <Top />
        <About />
        <Work />
        {/* <Profile /> */}
        <Contact />
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.top}>
      <ConsoleAnimation onComplete={handleAnimationComplete} />
    </div>
  );
}
