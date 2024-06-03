import React from "react";

// scss
import styles from "./Design.module.scss";
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";
import BoxTitle from "@/components/molecules/BoxTitle";
import SubContactBox from "@/components/organisms/SubContactBox";

// components

const Design = () => {
  return (
    <SubPageLayout
      id={3}
      level={["Services", "Design"]}
      title="DESIGN"
      subtitle="デザイン関連サービス"
      desc="私、Kohtaが提供するWeb関連のサービスの一覧と詳細、過去の制作日星機などを記載しております。"
    >
      <SubSecTitle id={1} stringid="about" text="Web制作" color="green" />
      <BoxTitle id={1} jaTitle="サービス概要" enTitle="Service overview" />
      <BoxTitle
        id={5}
        jaTitle="実際の価格やプラン"
        enTitle="Service overview"
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

export default Design;
