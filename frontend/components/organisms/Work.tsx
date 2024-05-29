"use client";
import React from "react";

// next
import Link from "next/link";

// hooks
import useDesignationBlogData from "@/hooks/useDesignationArticles";

// scss
import styles from "./styles/Work.module.scss";

// components
import WorkCard from "../molecules/WorkCard";

const Work = () => {
  const blogIds = [
    "ygozrkrtbw9",
    "ccraa7de1",
    "tjxi_4bg9m",
    "7qowt2ku1_c",
    "j7t49ack17",
  ];
  const recommendBlogs = useDesignationBlogData({ ids: blogIds });
  return (
    <div className={styles.work}>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.titleBox}>
            <p className={styles.jaTitle}>制作・活動実績</p>
            <h1 className={styles.enTitle}>Works</h1>
            <p className={styles.desc}>
              ここでは私の活動実績をご覧いただけます。たんにWeb制作だけではなく、イベント運営やシステム開発なども行っております。詳しい内容は全てブログにまとめているためブログのサイトへと遷移いたします。
            </p>
          </div>
          <div className={styles.flexCardBox}>
            {recommendBlogs.slice(0, 3).map((blog) => (
              <WorkCard
                id={1}
                link={`/works/${blog.id}`}
                img={blog.topImage}
                company={blog.updatedAt}
                title={blog.title}
                tags={blog.tags.map((tag) => tag.tag)}
              />
            ))}
          </div>
          <div className={styles.flexCardBox}>
            {recommendBlogs.slice(3, 5).map((blog) => (
              <WorkCard
                id={1}
                link={`/works/${blog.id}`}
                img={blog.topImage}
                company={blog.updatedAt}
                title={blog.title}
                tags={blog.tags.map((tag) => tag.tag)}
              />
            ))}
            <Link className={styles.moreBox} href="/works">
              <p className={styles.moreText}>View More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
