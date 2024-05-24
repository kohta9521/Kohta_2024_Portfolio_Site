import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./Service.module.scss";
import SubPageLayout from "@/components/templates/SubPageLayout";

// components

const Services = () => {
  return (
    <SubPageLayout
      id={3}
      level={["Services"]}
      title="SERVICES"
      subtitle="各種サービス一覧"
      desc="私、kohtaが提供するサービス一覧です。各サービスの概要や価格、納期などを記載しております。"
    >
      <h1>サービス一覧</h1>
    </SubPageLayout>
  );
};

export default Services;
