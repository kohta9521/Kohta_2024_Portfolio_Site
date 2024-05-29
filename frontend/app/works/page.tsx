import React from "react";

// scss
import styles from "./Works.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";

const Works = () => {
  return (
    <SubPageLayout
      id={5}
      level={["Works"]}
      title="WORKS"
      subtitle="制作実績"
      desc="これまでに積み上げてきた制作実績をまとめています。"
    >
      <h1>haha</h1>
    </SubPageLayout>
  );
};

export default Works;
