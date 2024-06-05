import React from "react";

// scss
import styles from "./styles/Gallery.module.scss";

// components
import GalleryCard from "../molecules/GalleryCard";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>これまでに制作したWebサイト</h1>
          <p className={styles.subtitle}>
            製作し実際にアクセスできるサイトです 是非ご覧ください
          </p>
        </div>
        <div className={styles.main}>
          <GalleryCard
            id={1}
            link="https://www.hokulea-community.com/"
            date="2024/5/10 ~ 2024/5/20"
            lang="Next.js / React / TypeScript / Three.js"
            title="HOKULEA公式サイト"
            desc="私が所属するHOKULEAというサーフィンを中心としたアウトドアサークルの公式サイトを構築させていただきました。各コミュニティの特色の紹介やこれまでの実績を掲載しております。"
            img="/images/gallery/hokulea.png"
          />
          <GalleryCard
            id={2}
            link="https://ufes-2024-official-site.vercel.app/"
            date="2024/5/10 ~ 2024/5/20"
            lang="Next.js / React / TypeScript / Three.js"
            title="UFES イベントLP"
            desc="私が代表を務めた大学生のための合同新歓イベントの紹介サイト兼、事前入場の登録サイトです。登録をしていただけると自動メールでQRコードが送信され当日の入場で使用可能です。"
            img="/images/gallery/ufes.png"
          />
          <GalleryCard
            id={3}
            link="https://www.kohta-tech-blog.com/"
            date="2024/5/10 ~ 2024/5/20"
            lang="Next.js / React / TypeScript / Three.js"
            title="個人ブログサイト"
            desc="普段の勉強内容をアウトプットする場としてtechブログを運営しております。React Next.jsを使用して作成、CMS機能を付け記事の管理や編集を行えます。"
            img="/images/gallery/blog.png"
          />
          <GalleryCard
            id={4}
            link="https://kokogohan-kohta9521s-projects.vercel.app/"
            date="2024/5/10 ~ 2024/5/20"
            lang="Next.js / React / TypeScript / Three.js"
            title="ここごはんサービスサイト"
            desc="自作サービスのサービスサイトです。社内やコミュニティ内といったクローズドな環境での飲食店やカフェなどの共有サービスです。現在サービスを構築中です。"
            img="/images/gallery/kokogohan.png"
          />
          <GalleryCard
            id={4}
            link="https://www.freers.co.jp/"
            date="2024/5/10 ~ 2024/5/20"
            lang="Next.js / React / TypeScript / Three.js"
            title="株式会社Freers様コーポレートサイト"
            desc="株式会社Freers様よりご依頼を受け制作を致しました。シンプルでかつ必要な情報をみやすくするためデザインに重点を置いて制作いたしました。"
            img="/images/gallery/freers.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
