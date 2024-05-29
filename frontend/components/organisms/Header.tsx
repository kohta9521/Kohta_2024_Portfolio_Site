import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import ListBox from "../molecules/ListBox";
import List from "../atoms/List";
import Logo from "../atoms/Logo";
import BoxList from "../atoms/BoxList";
import HamburgerBtn from "../atoms/HamburgerBtn";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftBox}>
        <Logo />
      </div>
      <div className={styles.rightBox}>
        <ListBox>
          <List id={1} text="About" link="/about" />
          <List id={3} text="Services" link="/services" />
          <List id={4} text="Works" link="/works" />
          <List id={2} text="News" link="/news" />
          <List id={6} text="Blog" link="https://www.kohta-tech-blog.com/" />
          <BoxList id={2} text="資料ダウンロード" link="/pdf/portfolio.pdf" />
          <HamburgerBtn />
        </ListBox>
      </div>
    </div>
  );
};

export default Header;
