import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/Footer.module.scss";

// components

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <p className={styles.logo}>Kohta Portfolio Site</p>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.sectionBox}>
            <Link className={styles.pagetitle} href="/">
              Home
            </Link>
            <ul>
              <li>
                <Link className={styles.link} href="#about">
                  <p className={styles.item}>サービスについて</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#work">
                  <p className={styles.item}>事例紹介</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#profile">
                  <p className={styles.item}>これまでの実績</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#news">
                  <p className={styles.item}>Profile</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#process">
                  <p className={styles.item}>私について</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#contact">
                  <p className={styles.item}>最新ニュース</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#contact">
                  <p className={styles.item}>依頼後の流れ</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#contact">
                  <p className={styles.item}>お問い合わせ</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.sectionBox}>
            <Link className={styles.pagetitle} href="/">
              About
            </Link>
            <ul>
              <li>
                <Link className={styles.link} href="#about">
                  <p className={styles.item}>このサイトについて</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#work">
                  <p className={styles.item}>基本情報</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#profile">
                  <p className={styles.item}>これまでの経歴</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#contact">
                  <p className={styles.item}>技術スタック</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.sectionBox}>
            <Link className={styles.pagetitle} href="/">
              Services
            </Link>
            <ul>
              <li>
                <Link className={styles.link} href="#about">
                  <p className={styles.item}>サービス一覧</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#work">
                  <p className={styles.item}>制作・活動実績</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#profile">
                  <p className={styles.item}>Web制作</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#news">
                  <p className={styles.item}>System開発</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#process">
                  <p className={styles.item}>デザイン</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#contact">
                  <p className={styles.item}>動画編集</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#contact">
                  <p className={styles.item}>DJ活動</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.sectionBox}>
            <Link className={styles.pagetitle} href="/">
              Works
            </Link>
            <ul>
              <li>
                <Link className={styles.link} href="#about">
                  <p className={styles.item}>これまでの実績</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#work">
                  <p className={styles.item}>Web制作</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#profile">
                  <p className={styles.item}>System開発</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#news">
                  <p className={styles.item}>Dj活動</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.sectionBox}>
            <Link className={styles.pagetitle} href="/">
              Contact
            </Link>
            <ul>
              <li>
                <Link className={styles.link} href="#about">
                  <p className={styles.item}>お問い合わせについて</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#about">
                  <p className={styles.item}>お問い合わせ後の流れ</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#about">
                  <p className={styles.item}>お問い合わせフォーム</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>&copy; kohta portfolio site</p>
    </div>
  );
};

export default Footer;
