import React from "react";

// components
import TopMoreBtn from "../atoms/TopMoreBtn";

// scss
import styles from "./styles/Top.module.scss";

const Top = () => {
  return (
    <div className={styles.top}>
      <TopMoreBtn />
    </div>
  );
};

export default Top;
