import React from "react";

// scss
import styles from "./About.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";
import BoxTitle from "@/components/molecules/BoxTitle";
import SubMainText from "@/components/molecules/SubMainText";

const About = () => {
  return (
    <SubPageLayout
      id={1}
      level={["About"]}
      title="About"
      subtitle="サイト概要"
      desc="kohta portfolio siteの概要となぜこのサイトを作成したのか、どのような技術スタックでこのサイトを制作しているのかをご覧いただけます。"
    >
      <SubSecTitle
        id={1}
        stringid="summary"
        text="About this website"
        color="green"
      />
      <BoxTitle
        id={1}
        jaTitle="このサイトについて"
        enTitle="About this website"
      />
      <SubMainText
        id={2}
        text="このサイトはkohtaのエンジニアとしてのポートフォリオサイトです。普段行っている業務や受託しているフリーランスの案件・自身のイベントなどをご覧いただけます。私kohtaは現在大学3年生で大学では法学を学んでいます。大学に在学しながらエンジニアとして働いている中様々な案件やお仕事をいただいています。 スタートアップの会社様のコーポレートサイトであったり個人のブログサイト、イベントなどの特設サイトからイベントの入場システムなど案件は多岐にわたります。自身の強みであるコミュニケーション能力を駆使してどんなクライアント様でも最大限要望を引き出します。また私一人ではなく複数人のエンジニアの横のつながりを活用し自分だけでは難しい案件でもご依頼いただけます。"
      />
      <BoxTitle id={2} jaTitle="基本情報" enTitle="My Profile" />
      <SubMainText
        id={3}
        text="トップページでも簡単に自己紹介させていただきましたがここでは詳細にこれまでの経歴などをご覧いただけます。"
      />
      <SubMainText
        id={3}
        text="トップページでも簡単に自己紹介させていただきましたがここでは詳細にこれまでの経歴などをご覧いただけます。"
      />
    </SubPageLayout>
  );
};

export default About;
