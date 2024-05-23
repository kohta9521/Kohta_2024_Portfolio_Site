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
              ここでは私の活動実績をご覧いただけます。たんにWeb制作だけではなく、イベント運営やシステム開発なども行っております。
            </p>
          </div>
          <div className={styles.flexCardBox}>
            <WorkCard
              id={1}
              link="/works/1"
              img="/images/sample.png"
              company="個人制作"
              title="大学生のための最大級新歓UFESを開催/公式サイト構築をしました。"
              tags={["#Event", "#UFES", "#新歓", "#大学生"]}
            />
            <WorkCard
              id={1}
              link="/works/1"
              img="/images/news/gate.jpg"
              company="共同開発"
              title="合同大学卒業イベントで入場管理システムを開発しました。#DX化"
              tags={[
                "#DX",
                "#自動化",
                "#脱紙",
                "#入場管理",
                "QRシステム",
                "#自動送信",
              ]}
            />
            <WorkCard
              id={1}
              link="/works/1"
              img="/images/news/freers.jpg"
              company="株式会社Freers様"
              title="株式会社Freers様の会社サイトを制作させていただきました。"
              tags={[
                "#Web制作",
                "#Next.js",
                "#TypeScript",
                "#デザイン",
                "#SEO",
              ]}
            />
          </div>
          <div className={styles.flexCardBox}>
            <WorkCard
              id={1}
              link="/works/1"
              img="/images/news/blog.png"
              company="個人制作"
              title="個人テックブログを開発しました。#CMS"
              tags={["#TechBlog", "#MicroCMS", "#ブログ制作", "#エンジニア"]}
            />
            <WorkCard
              id={1}
              link="/works/1"
              img="/images/news/reginavi.jpg"
              company="共同開発"
              title="学祭でレジ/LINE呼び出しサービスをリリースいたしました。"
              tags={[
                "#DX",
                "#自動化",
                "#LINE呼び出し",
                "#レジ",
                "QRシステム",
                "#自動送信",
              ]}
            />
            <Link className={styles.moreBox} href="/news">
              <p className={styles.moreText}>View More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
