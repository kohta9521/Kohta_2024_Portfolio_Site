"use client";
import React from "react";

// scss
import styles from "./Works.module.scss";

// hooks
import useDesignationBlogData from "@/hooks/useDesignationArticles";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";
import BoxTitle from "@/components/molecules/BoxTitle";
import SubMainText from "@/components/molecules/SubMainText";
import WorkCard from "@/components/molecules/WorkCard";

const Works = () => {
  const blogIds = [
    "ygozrkrtbw9",
    "ccraa7de1",
    "tjxi_4bg9m",
    "7qowt2ku1_c",
    "j7t49ack17",
  ];
  const recommendBlogs = useDesignationBlogData({ ids: blogIds });
  return (
    <SubPageLayout
      id={5}
      level={["Works"]}
      title="WORKS"
      subtitle="制作実績"
      desc="これまでに積み上げてきた制作実績をまとめています。"
    >
      <SubSecTitle
        id={1}
        stringid="summary"
        text="About this page"
        color="green"
      />
      <BoxTitle
        id={1}
        jaTitle="これまでの実績"
        enTitle="Past Achievements and Requests"
      />
      <SubMainText
        id={2}
        text="こちらではこれまでに行ってきた制作実績をご覧いただけます。"
      />
      <div className={styles.contentBox}></div>
    </SubPageLayout>
  );
};

export default Works;
