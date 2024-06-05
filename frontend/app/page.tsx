"use client";
import React, { useState, useEffect } from "react";

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
import Process from "@/components/organisms/Process";
import News from "@/components/organisms/News";
import ContactButton from "@/components/atoms/ContactButton";
import SnsBox from "@/components/organisms/SnsBox";
import Gallery from "@/components/organisms/Gallery";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setLoadingComplete(false);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleAnimationComplete = () => {
    setLoadingComplete(true);
  };

  if (loadingComplete) {
    return (
      <div className={styles.main}>
        <Header />
        <ContactButton />
        <SnsBox />
        <Top />
        <About />
        <Gallery />
        <Work />
        <Profile />
        <News />
        <Process />
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
