import React from "react";

// scss
import styles from "./styles/News.module.scss";

// components
import MainNewsCard from "../molecules/MainNewsCard";
import SubNewsCard from "../molecules/SubNewsCard";

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <p className={styles.jaTitle}>ニュース</p>
          <h2 className={styles.enTitle}>News</h2>
        </div>
        <div className={styles.newsBox}>
          <div className={styles.leftBox}>
            <MainNewsCard
              id={1}
              link="/news"
              img="/images/blog.png"
              title="新しいサービスを開始しました"
              date="2021.10.10"
              desc="新しいサービスを開始しました。"
            />
          </div>
          <div className={styles.rightBox}>
            <SubNewsCard
              id={1}
              link="/news"
              title="新しいサービスを開始しました"
              desc="新しいサービスを開始しました。"
              date="2021.10.10"
            />
            <SubNewsCard
              id={1}
              link="/news"
              title="新しいサービスを開始しました"
              desc="新しいサービスを開始しました。"
              date="2021.10.10"
            />
            <SubNewsCard
              id={1}
              link="/news"
              title="新しいサービスを開始しました"
              desc="新しいサービスを開始しました。"
              date="2021.10.10"
            />
            <SubNewsCard
              id={1}
              link="/news"
              title="新しいサービスを開始しました"
              desc="新しいサービスを開始しました。"
              date="2021.10.10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
