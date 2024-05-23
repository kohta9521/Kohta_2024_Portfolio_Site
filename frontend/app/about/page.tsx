import React from "react";

// scss
import styles from "./About.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";

const About = () => {
  return (
    <SubPageLayout
      id={1}
      level={["About"]}
      title="About"
      subtitle="サイト概要"
      desc="サイトについての説明を記載しています。"
    >
      <h1>sample</h1>
    </SubPageLayout>
  );
};

export default About;
