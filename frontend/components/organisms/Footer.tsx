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
                  <p className={styles.item}>なぜ選ばれるのか</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#work">
                  <p className={styles.item}>制作・活動実績</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#profile">
                  <p className={styles.item}>私について</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#news">
                  <p className={styles.item}>ニュース</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#process">
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
                  <p className={styles.item}>なぜ選ばれるのか</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#work">
                  <p className={styles.item}>制作・活動実績</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#profile">
                  <p className={styles.item}>私について</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#news">
                  <p className={styles.item}>ニュース</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#process">
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
              Services
            </Link>
            <ul>
              <li>
                <Link className={styles.link} href="#about">
                  <p className={styles.item}>なぜ選ばれるのか</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#work">
                  <p className={styles.item}>制作・活動実績</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#profile">
                  <p className={styles.item}>私について</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#news">
                  <p className={styles.item}>ニュース</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#process">
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
              Works
            </Link>
            <ul>
              <li>
                <Link className={styles.link} href="#about">
                  <p className={styles.item}>なぜ選ばれるのか</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#work">
                  <p className={styles.item}>制作・活動実績</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#profile">
                  <p className={styles.item}>私について</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#news">
                  <p className={styles.item}>ニュース</p>
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="#process">
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
              News
            </Link>
            <ul>
              <li>
                <Link className={styles.link} href="#about">
                  <p className={styles.item}>News一覧</p>
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
