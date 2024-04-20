"use client";
import React, { useState } from "react";

// components
import Menu from "../organisms/Menu";

// scss
import styles from "./styles/HamburgerBtn.module.scss";

// lang
// import { useLanguage } from "@/hooks/LanguageContext";
// import translation from "@/data/translation.json";

const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 日本語英語
  // const { language } = useLanguage();
  return (
    <>
      <div className={styles.hamburgerBox}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={isOpen ? styles.open : ""}></span>
          <span className={isOpen ? styles.open : ""}></span>
          <span className={isOpen ? styles.open : ""}></span>
        </button>
        <div className={styles.menu}>
          {/* <p className={styles.text}>{translation.home.menu[language]}</p> */}
          <p className={styles.text}>Menu</p>
        </div>
      </div>
      <Menu isOpen={isOpen} />
    </>
  );
};

export default HamburgerBtn;
