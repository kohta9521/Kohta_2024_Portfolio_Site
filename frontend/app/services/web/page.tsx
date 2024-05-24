import React from "react";

// scss
import styles from "./Web.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";

const Web = () => {
  return (
    <SubPageLayout
      id={3}
      level={["Services", "Web"]}
      title="WEB"
      subtitle="Web関連サービス"
      desc="私、Kohtaが提供するWeb関連のサービスの一覧と詳細、過去の制作日星機などを記載しております。"
    >
      <h1>Web</h1>
    </SubPageLayout>
  );
};

export default Web;
