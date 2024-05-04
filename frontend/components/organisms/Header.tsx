import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import ListBox from "../molecules/ListBox";
import List from "../atoms/List";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftBox}></div>
      <div className={styles.rightBox}>
        <ListBox>
          <List id={1} text="About" link="/" />
          <List id={2} text="News" link="/" />
          <List id={3} text="Service" link="/" />
          <List id={4} text="Work" link="/" />
        </ListBox>
      </div>
    </div>
  );
};

export default Header;