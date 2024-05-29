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

const Services = () => {
  return (
    <SubPageLayout
      id={3}
      level={["Services"]}
      title="SERVICES"
      subtitle="各種サービス一覧"
      desc="私、kohtaが提供するサービス一覧です。各サービスの概要や価格、納期などを記載しております。"
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
      <SubSecTitle id={2} stringid="summary" text="Web制作" color="green" />
      <SubPageInsertImage
        id={1}
        image={"/images/news/freers.png"}
        alt={"web制作セクション画像"}
      />
      <SubMainText
        id={1}
        text="コーポレートサイトの制作からイベントや単発のLPなど幅広く対応可能です。
        単にWebサイトと言っても対応すべき点は数多くございます。ドメインやサーバー関連の契約・デザイン・コーディング・セキュリティ・SEO対策。お問い合わせフォームや会員登録を促したいけど対応は可能なのか？その疑問にお答えしています。"
      />
      <SubNextButton id={1} link="/services/web" text="Web制作の詳細を見る" />
    </SubPageLayout>
  );
};

export default Services;
