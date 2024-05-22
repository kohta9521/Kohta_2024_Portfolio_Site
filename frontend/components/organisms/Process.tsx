"use client";
import React from "react";

// scss
import styles from "./styles/Process.module.scss";

// hooks
import useAOS from "@/hooks/useAOS";

// icon
// import { IoIosArrowForward } from "react-icons/io";

// components

const Process = () => {
  useAOS();

  return (
    <div className={styles.process}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <p className={styles.jaTitle}>依頼後の流れ</p>
          <h2 className={styles.enTitle}>Process</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.step}>
            <p className={styles.text}>
              <span className={styles.number}>1.</span>
              お問い合わせ
            </p>
            <p className={styles.mainText}>
              最初のステップは、お問い合わせフォームやメール、電話などを通じてご連絡いただくことです。ご要望やプロジェクトの概要についてお聞かせいただきます。初めてのご相談でも構いません。お客様の抱えている課題や実現したいことを詳しくお伺いするために、できるだけ具体的な情報を共有していただけると助かります。初回のお問い合わせからスムーズにプロジェクトが進行できるようにいたします。
            </p>
          </div>
          <span className={styles.bar}></span>
          <div className={styles.step}>
            <p className={styles.text}>
              <span className={styles.number}>2.</span>
              ご連絡とヒアリング
            </p>
            <p className={styles.mainText}>
              お問い合わせ後、こちらからご連絡を差し上げ、さらに詳しいヒアリングを行います。ヒアリングでは、プロジェクトの目的やターゲット、具体的な機能やデザインの希望について深く掘り下げていきます。お客様のビジネスの背景やターゲットユーザーについてもお聞きし、最適なウェブサイトを提案するための重要な情報を収集します。このプロセスは、プロジェクトの成功に直結する重要なステップです。
            </p>
          </div>
          <span className={styles.bar}></span>
          <div className={styles.step}>
            <p className={styles.text}>
              <span className={styles.number}>3.</span>
              デザイン入稿・見積もり
            </p>
            <p className={styles.mainText}>
              ヒアリング内容をもとに、初期デザイン案を作成し、ご提出いたします。デザイン案は、お客様のブランドイメージやターゲットユーザーに最適なものを提案いたします。併せて、プロジェクト全体の見積もりもご提示します。デザイン案と見積もりにご納得いただいた上で、正式にプロジェクトをスタートさせます。この段階で不明点やご要望があれば、遠慮なくお知らせください。
            </p>
          </div>
          <span className={styles.bar}></span>
          <div className={styles.step}>
            <p className={styles.text}>
              <span className={styles.number}>4.</span>
              デザイン確認と修正
            </p>
            <p className={styles.mainText}>
              ご提出したデザイン案をご確認いただき、必要に応じて修正を行います。お客様からのフィードバックをもとに、細部にわたってデザインの調整を行います。色合いやレイアウト、フォントの選定など、お客様が納得いくまで何度でも修正いたします。最終的にデザインが確定した時点で、次のステップに進みます。
            </p>
          </div>
          <span className={styles.bar}></span>
          <div className={styles.step}>
            <p className={styles.text}>
              <span className={styles.number}>5.</span>
              コーディング
            </p>
            <p className={styles.mainText}>
              デザインが確定しましたら、実際のコーディング作業に入ります。HTML、CSS、JavaScriptなどを用いて、レスポンシブデザインを意識しながら、機能的で美しいウェブサイトを構築します。また、SEO対策やパフォーマンスの最適化にも配慮し、検索エンジンに強いサイトを作り上げます。コーディングの進行状況については、定期的にご報告いたします。
            </p>
          </div>
          <span className={styles.bar}></span>
          <div className={styles.step}>
            <p className={styles.text}>
              <span className={styles.number}>6.</span>
              サーバー・ドメイン設定
            </p>
            <p className={styles.mainText}>
              コーディングが完了したら、サーバーとドメインの設定を行います。必要に応じて、適切なサーバーの選定やドメインの取得もサポートいたします。サーバーへのアップロードや動作確認を行い、サイトが問題なく稼働することを確認します。また、セキュリティ対策やバックアップ設定なども行い、安心して運用できる環境を整えます。
            </p>
          </div>
          <span className={styles.bar}></span>
          <div className={styles.step}>
            <p className={styles.text}>
              <span className={styles.number}>7.</span>
              納品とアフターサポート
            </p>
            <p className={styles.mainText}>
              最終的なチェックを行い、問題がなければ納品となります。納品後も、運用に関するサポートや、必要な更新・修正に対応いたします。お客様のビジネスの成長に合わせて、ウェブサイトの改善や機能追加なども承ります。長期的なサポート体制を整え、お客様のサイト運営を支援し続けます。サイトの運用に関するご質問やお困りのことがあれば、いつでもご相談ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
