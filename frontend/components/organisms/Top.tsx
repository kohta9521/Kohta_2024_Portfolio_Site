import React from "react";

// components
import Logo from "../atoms/Logo";
import LangBtn from "../molecules/LangBtn";
import Sidebar from "./Sidebar";

// scss
import styles from "./styles/Top.module.scss";

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.leftBox}>
        <Sidebar />
      </div>
      <div className={styles.rightBox}>
        <div className={styles.topBox}>
          <div className={styles.header}>
            <Logo id={1} link="/" color="black" size="medium" />
            <LangBtn />
          </div>
          <h1 className={styles.title}>
            KOHTA
            <br />
            ENGINEER
            <br />
            MAKES PROJECTS
            <br />
            COME TRUE
          </h1>
          <div className={styles.circle}>EXPLORE</div>
        </div>
        <div className={styles.bottomBox}></div>
      </div>
    </div>
  );
};

export default Top;
