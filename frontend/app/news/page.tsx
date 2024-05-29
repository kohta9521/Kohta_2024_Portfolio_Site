"use client";
import React from "react";

// hooks
import useGetAllNews from "@/hooks/useGetAllNews";

// scss
import styles from "./News.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";
import BoxTitle from "@/components/molecules/BoxTitle";
import SubMainText from "@/components/molecules/SubMainText";

const News = () => {
  const news = useGetAllNews();
  console.log(news);
  return (
    <SubPageLayout
      id={1}
      level={["News"]}
      title="News"
      subtitle="お知らせ"
      desc="kohtaの普段の活動についてお知らせをご覧いただけます。普段の活動や現在のフリーランスの進行状況を更新いたします。"
    >
      <SubSecTitle id={1} stringid="news" text="News" color="green" />
      <BoxTitle id={1} jaTitle="このページについて" enTitle="About this page" />
      <SubMainText id={2} text="sample code" />
    </SubPageLayout>
  );
};

export default News;
