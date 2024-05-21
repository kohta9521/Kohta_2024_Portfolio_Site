"use client";
import React from "react";

// scss
import styles from "./styles/About.module.scss";

// hooks
// import useAOS from "@/hooks/useAOS";

// components
import AboutCard from "../molecules/AboutCard";
import ViewMoreBtn from "../atoms/ViewMoreBtn";

const About = () => {
  // useAOS()
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>
            Web / アプリ制作
            <br />
            全ての期待値を超えるサービス提供を
          </h1>
        </div>
        <div className={styles.flexBox}>
          <AboutCard
            id={1}
            title="ご依頼者様に寄り添ったWeb制作"
            desc="何よりもWeb制作はご依頼者様ありきのサービスです。お客様のご要望を最大限引き出し形にする。これを意識したサービス提供を行っております。ご依頼後に私を選んで良かったなと思っていただけるように行っています。"
            link="/services/web"
            linkText="詳しく見る 📌"
          />
          <AboutCard
            id={2}
            title="競合他社様よりも充実したプラン・価格設定"
            desc="他社様と比較しても、充実したプラン・価格設定を行っております。お客様のご要望に合わせたプランをご提案いたします。私が学生ということもあり予算や納期、アフターサポートなど他社様よりもフレキシブルな対応が可能です。"
            link="/services/web"
            linkText="なぜ可能なのか？ 🤷🏻‍♂️"
          />
          <AboutCard
            id={3}
            title="高品質・低価格のWeb制作を提供できる理由"
            desc="高品質・低価格のWeb制作を提供できる理由は、当社が持つ技術力と経験によるものです。お客様のご要望に合わせたWeb制作を行っております。サーバー関連の契約・ドメイン取得・デザイン・コーディング・テスト・納品まで一貫して行っております。"
            link="/services/web"
            linkText="詳しく見る 📝"
          />
        </div>
        <div className={styles.scrollBox}>
          <span className={styles.triangle}></span>
        </div>
        <div className={styles.mainFlexBox}>
          <div className={styles.leftBox}>
            <h2 className={styles.title}>
              学生が行うWeb制作、
              <br />
              信用度が低いのは事実です
              <br />
              それでも私に任せてほしい
              <br />
              自信を持ってサービスを
              <br />
              提供いたします
            </h2>
          </div>
          <div className={styles.rightBox}>
            <p className={styles.mainText}>
              本当に学生にWeb制作を依頼しても大丈夫なのか？
              <br />
              技術力も信用度も低いだろうし、、
              <br />
              学生という身分であることを理由に、Web制作の信用度が低いという事実はあります。
              しかしそれだけを理由にして、Web制作を依頼することを躊躇する必要はありません。
              <br />
              確かな実績と技術力を持つ私が、お客様のご要望に合わせたWeb制作を行います。
              <br />
              学生であることを"強み"と捉え、お客様に最高のサービスを提供いたします。
            </p>
            <ViewMoreBtn id={1} link="/about" text="もっと見る 👀" />
            {/* btn components */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
