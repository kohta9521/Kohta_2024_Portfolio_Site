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
          <List id={1} text="About" link="/" />
          <List id={2} text="News" link="/" />
          <List id={3} text="Services" link="/" />
          <List id={4} text="Works" link="/" />
          <List id={5} text="Gallery" link="/" />
          <List id={6} text="Blog" link="/" />
          <BoxList id={1} text="資料ダウンロード" link="/" />
          <BoxList id={2} text="お問い合わせ" link="/" />
        </ListBox>
      </div>
    </div>
  );
};

export default Header;
