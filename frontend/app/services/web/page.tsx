import React from "react";

// scss
import styles from "./Web.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";
import BoxTitle from "@/components/molecules/BoxTitle";
import SubMainText from "@/components/molecules/SubMainText";
import SubContactBox from "@/components/organisms/SubContactBox";

const Web = () => {
  return (
    <SubPageLayout
      id={3}
      level={["Services", "Web"]}
      title="WEB"
      subtitle="Web関連サービス"
      desc="私、Kohtaが提供するWeb関連のサービスの一覧と詳細、過去の制作日星機などを記載しております。"
    >
      <SubSecTitle id={1} stringid="about" text="Web制作" color="green" />
      <BoxTitle id={1} jaTitle="サービス概要" enTitle="Service overview" />
      <SubMainText
        id={2}
        text="私の主なフリーランスの活動はWeb制作です。主にLP・ホームページ制作を行っています。Webサービスなどの開発も可能です。LPやホームページ制作はヒアリングからデザイン、コーディング、サーバードメイン契約など一貫して私が行いますので他の競合他社様よりも低価格でサービス提供を行っています。
        金額が安いからといってクオリティが他社よりも下がることはなく学生であるという身から圧倒的に柔軟な対応が可能です。「こんなデザインのサイトが欲しい」「この機能だけは絶対に欲しい」「とりあえずいますぐにサイトが欲しい」と言ったようななかなか会社様に依頼をすることが難しいような案件も大歓迎です。"
      />
      <BoxTitle
        id={5}
        jaTitle="実際の価格やプラン"
        enTitle="Service overview"
      />
      <SubMainText
        id={7}
        text="以下にこれまでのご依頼を元にどのような機能やプランがあるのか一覧で表示させていただきます。
        もちろん全てのプランや機能を掲載することは困難なためさらに詳しく知りたい場合はお問い合わせフォームよりお気軽にご連絡ください。
        プラン一覧の部分に想定、よくご相談をいただく理由なども掲載しているのでそちらを確認しながら依頼者様に一番合うプランをご確認ください。"
      />
      <BoxTitle
        id={2}
        jaTitle="ご依頼者様に寄り添ったWeb制作"
        enTitle="Service overview"
      />
      <BoxTitle
        id={3}
        jaTitle="競合他社様よりも充実したプラン・価格設定"
        enTitle="Service overview"
      />
      <BoxTitle
        id={4}
        jaTitle="高品質・低価格のWeb制作を提供できる理由"
        enTitle="Service overview"
      />
      <BoxTitle
        id={5}
        jaTitle="学生が行うWeb制作、信用度が低いのは事実"
        enTitle="Service overview"
      />

      <SubContactBox />
    </SubPageLayout>
  );
};

export default Web;
