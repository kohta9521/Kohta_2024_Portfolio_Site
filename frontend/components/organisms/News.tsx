import React from "react";

// scss
import styles from "./styles/News.module.scss";
// import DefaultBtn from "../atoms/DefaultBtn";

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.titleBox}></div>
      <div className={styles.itemBox}></div>
    </div>
  );
};

export default News;
