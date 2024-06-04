"use client";
import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/Work.module.scss";

// components
import WorkCard from "../molecules/WorkCard";

const Work = () => {
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
            <WorkCard
              id={1}
              link={`/works/ygozrkrtbw9`}
              img="/images/blog/6.png"
              company="2024/5/10"
              title="友人と大学の学祭をDX化した①(上流工程編)"
              tags={["Next.js", "DX化", "イベント"]}
            />
            <WorkCard
              id={1}
              link={`/works/ccraa7de1`}
              img="/images/blog/10.png"
              company="2024/5/10"
              title="合同大学新歓イベント ~ UFES 2024 ~を開催しました!"
              tags={["DX化", "フリーランス", "イベント"]}
            />
            <WorkCard
              id={1}
              link={`/works/tjxi_4bg9m`}
              img="/images/blog/8.png"
              company="2024/5/10"
              title="株式会社Freers様のコーポレートサイトを作成いたしました。"
              tags={["Web制作", "フリーランス"]}
            />
          </div>
          <div className={styles.flexCardBox}>
            <WorkCard
              id={1}
              link={`/works/7qowt2ku1_c`}
              img="/images/blog/7.png"
              company="2024/5/10"
              title="合同大学卒業イベントで入場管理システムを開発しました"
              tags={["イベント", "DX化", "フリーランス"]}
            />
            <WorkCard
              id={1}
              link={`/works/j7t49ack17`}
              img="/images/blog/6.png"
              company="2024/5/10"
              title="大学の学祭をDX化した②(デザイン編)"
              tags={["Next.js", "DX化", "イベント", "デザイン"]}
            />
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
