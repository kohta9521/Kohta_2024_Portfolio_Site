import React from "react";

// scss
import styles from "./About.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/atoms/SubSecTitle";

const About = () => {
  return (
    <SubPageLayout
      id={1}
      level={["About"]}
      title="About"
      subtitle="サイト概要"
      desc="kohta portfolio siteの概要となぜこのサイトを作成したのか、どのような技術スタックでこのサイトを制作しているのかをご覧いただけます。"
    >
      <SubSecTitle id={1} title="概要" />
    </SubPageLayout>
  );
};

export default About;
