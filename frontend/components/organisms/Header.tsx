import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import ListBox from "../molecules/ListBox";
import List from "../atoms/List";
import Logo from "../atoms/Logo";

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
