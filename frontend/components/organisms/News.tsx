import React from "react";

// scss
import styles from "./styles/News.module.scss";

// components

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <p className={styles.jaTitle}>ニュース</p>
          <h2 className={styles.enTitle}>News</h2>
        </div>
        <div className={styles.newsBox}></div>
      </div>
    </div>
  );
};

export default News;
