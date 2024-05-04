import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import ListBox from "../molecules/ListBox";
import List from "../atoms/List";
import Logo from "../atoms/Logo";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftBox}>
        <Logo />
      </div>
      <div className={styles.rightBox}>
        <ListBox>
          <List id={1} text="About" link="/" />
          <List id={2} text="News" link="/" />
          <List id={3} text="Service" link="/" />
          <List id={4} text="Work" link="/" />
          <List id={5} text="Gallery" link="/" />
          <List id={6} text="Blog" link="/" />
        </ListBox>
      </div>
    </div>
  );
};

export default Header;
