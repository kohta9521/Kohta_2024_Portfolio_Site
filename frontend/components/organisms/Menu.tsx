"use client";
import React from "react";

// scss import
import styles from "./styles/Menu.module.scss";

// components
import MainMenuLink from "../atoms/MainMenuLink";
import SubMenuLink from "../atoms/SubMenuLink";

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.contianer}>
        <div className={styles.header}>
          <h1 className={styles.logo}>Kohta Portfolio Site</h1>
        </div>
        <div className={styles.flexBox}>
          <div className={styles.leftBox}>
            <h2 className={styles.menuTitle}>MainMenu</h2>
            <MainMenuLink
              id={1}
              number="01"
              title="Top of this website"
              link="/"
            />
            <MainMenuLink id={2} number="02" title="Recent works" link="/" />
            <MainMenuLink id={3} number="03" title="About me" link="/" />
            <MainMenuLink
              id={4}
              number="04"
              title="List of skills I possess"
              link="/"
            />
            <MainMenuLink
              id={5}
              number="05"
              title="Past achievements"
              link="/"
            />
          </div>
          <div className={styles.rightBox}>
            <h2 className={styles.menuTitle}>PageMenu</h2>
            <SubMenuLink id={1} title="Home" link="/" />
            <SubMenuLink id={1} title="About" link="/" />
            <SubMenuLink id={1} title="Work" link="/" />
            <SubMenuLink id={1} title="Blog" link="/" />
            <SubMenuLink id={1} title="Company" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
