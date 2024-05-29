import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./Service.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";
import BoxTitle from "@/components/molecules/BoxTitle";
import SubMainText from "@/components/molecules/SubMainText";
import SubPageInsertImage from "@/components/molecules/SubPageInsertImage";
import SubNextButton from "@/components/molecules/SubNextButton";
import SubContactBox from "@/components/organisms/SubContactBox";
import SpaceBox from "@/components/atoms/SpaceBox";

const Services = () => {
  return (
    <SubPageLayout
      id={3}
      level={["Services"]}
      title="SERVICES"
      subtitle="各種サービス一覧"
      desc="私、kohtaが提供するサービス一覧です。各サービスの概要を簡単に紹介しています。さらに詳しく確認をしたい方は各サービスのセクションの下部にある詳細ページへのボタンよりお願いします。"
    >
      <SubSecTitle id={1} stringid="summary" text="my services" color="green" />
      <BoxTitle
        id={1}
        jaTitle="kohtaが提供しているサービス一覧"
        enTitle="List of services provided by kohta"
      />
      <SubMainText
        id={1}
        text="こちらのページでは私kohtaが提供しているサービス一覧をご覧いただくことが可能です。サービスの内容としてはWeb制作・システム開発・デザイン制作・イベント制作・イベントなどのDJ出演など多岐に渡っております。それぞれのサービスページにさらに詳細の情報が掲載されております。"
      />
      {/* web */}
      <SubSecTitle id={2} stringid="summary" text="Web制作" color="green" />
      <SubPageInsertImage
        id={1}
        image={"/images/news/freers.png"}
        alt={"web制作セクション画像"}
      />
      <SubMainText
        id={1}
        text="コーポレートサイトの制作からイベントや単発のLPなど幅広く対応可能です。
        単にWebサイトと言っても対応すべき点は数多くございます。ドメインやサーバー関連の契約・デザイン・コーディング・セキュリティ・SEO対策。お問い合わせフォームや会員登録を促したいけど対応は可能なのか？お問合せに対して自動返信でメールを投げたいけど可能？ブログなどの機能を追加したいけどコードはさわれないし簡単に編集できる機能はつけれるの？その疑問にお答えしています。"
      />
      <SubNextButton
        id={1}
        link="/services/web"
        text="Web制作の詳細を見る 👉"
      />
      {/* system */}
      <SubSecTitle id={3} stringid="summary" text="System開発" color="green" />
      <SubPageInsertImage
        id={1}
        image={"/images/subpage/gate.webp"}
        alt={"system開発セクション画像"}
      />
      <SubMainText
        id={1}
        text="イベントなどのQRコードなどを用いた自動入場システムなど主に自動化という部分でお役に立てるのではないでしょうか。スプレッドシートに溜まった顧客へのメール配信、LINEを使用した自動送信システムなど幅広く対応可能です。"
      />
      <SubNextButton
        id={2}
        link="/services/system"
        text="System開発の詳細を見る 👉"
      />
      {/* design */}
      <SubSecTitle id={4} stringid="summary" text="デザイン" color="green" />
      <SubPageInsertImage
        id={1}
        image={"/images/subpage/design.webp"}
        alt={"デザインセクション画像"}
      />
      <SubMainText
        id={1}
        text="デザインツールを使用してお客様のご要望に沿ったデザインを作成可能です。デザインはWeb・バナーなどこちらも幅広く対応可能です。"
      />
      <SubNextButton
        id={2}
        link="/services/system"
        text="デザインの詳細を見る 👉"
      />
      {/* movie */}
      <SubSecTitle id={4} stringid="summary" text="動画編集" color="green" />
      <SubPageInsertImage
        id={1}
        image={"/images/subpage/movie.webp"}
        alt={"動画編集セクション画像"}
      />
      <SubMainText
        id={1}
        text="動画編集のご依頼も可能です。YouTube動画の編集やイベントのアフタームービーなど幅広く対応可能です。動画編集ソフトそ使用して横・縦両方の対応をいたします。簡単な字幕入れやBGMの追加なども可能です。"
      />
      <SubNextButton
        id={2}
        link="/services/movie"
        text="動画編集の詳細を見る 👉"
      />
      {/* dj */}
      <SubSecTitle id={4} stringid="summary" text="DJ" color="green" />
      <SubPageInsertImage
        id={1}
        image={"/images/subpage/dj.webp"}
        alt={"djセクション画像"}
      />
      <SubMainText
        id={1}
        text="不定期ではありますがDJ活動を行っております。専門はHouseですがそれ以外のEDM・HipHopなども対応可能です。イベントの際に少し音楽が欲しいな、いい感じのDJ知り合いにいない？といったご要望にも応えさせていただきます。"
      />
      <SubNextButton id={2} link="/services/dj" text="DJ活動の詳細を見る 👉" />
      <SpaceBox id={1} level="medium" />
      <SubContactBox />
    </SubPageLayout>
  );
};

export default Services;
