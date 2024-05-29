"use client";
import React from "react";

// hooks
import useGetAllNews from "@/hooks/useGetAllNews";

// scss
import styles from "./styles/News.module.scss";

// components
import MainNewsCard from "../molecules/MainNewsCard";
import SubNewsCard from "../molecules/SubNewsCard";

const News = () => {
  const news = useGetAllNews();
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
              link="/news/top"
              img="/images/news/portfolio.webp"
              title="ポートフォリオサイトをリニューアルしました"
              date="2024年5月2日"
              desc="Next TypeScriptを使用してポートフォリオサイトをリニューアルしました。CMS機能なども搭載しております。"
            />
          </div>
          <div className={styles.rightBox}>
            {news.slice(0, 4).map((news) => (
              <SubNewsCard
                id={1}
                link={`/news/${news.id}`}
                title={news.title}
                desc={news.desc}
                date={news.updatedAt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
