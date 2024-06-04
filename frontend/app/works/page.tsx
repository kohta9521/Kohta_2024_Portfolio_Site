"use client";
import React from "react";

// scss
import styles from "./Works.module.scss";



// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";
import BoxTitle from "@/components/molecules/BoxTitle";
import SubMainText from "@/components/molecules/SubMainText";
import WorkCard from "@/components/molecules/WorkCard";

const Works = () => {
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
