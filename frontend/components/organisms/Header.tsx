import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import ListBox from "../molecules/ListBox";
import List from "../atoms/List";
import Logo from "../atoms/Logo";
import BoxList from "../atoms/BoxList";

const Header = () => {
  useAOS();
  return (
    <div className={styles.header}>
      <div className={styles.leftBox} data-aos="fade-up">
        <Logo />
      </div>
      <div className={styles.rightBox} data-aos="fade-up">
        <ListBox>
          <List id={1} text="About" link="/about" />
          <List id={2} text="News" link="/news" />
          <List id={3} text="Services" link="/services" />
          <List id={4} text="Works" link="/works" />
          <List id={6} text="Blog" link="https://www.kohta-tech-blog.com/" />
          <BoxList id={1} text="資料ダウンロード" link="/pdf/portfolio.pdf" />
          <BoxList id={2} text="お問い合わせ" link="/contact" />
        </ListBox>
      </div>
    </div>
  );
};

export default Header;
