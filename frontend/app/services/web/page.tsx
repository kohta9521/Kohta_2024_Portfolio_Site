import React from "react";

// scss
import styles from "./Web.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";

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
      <SubSecTitle id={1} stringid="about" text="Web制作" color="green" />
      <SubSecTitle id={1} stringid="about" text="Web制作" color="green" />
    </SubPageLayout>
  );
};

export default Web;
