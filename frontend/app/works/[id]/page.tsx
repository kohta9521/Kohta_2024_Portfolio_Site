import React from "react";

// scss
import styles from "./Blog.module.scss";

// components
import BlogGet from "../components/BlogGet";
import SubWorkLayout from "@/components/templates/SubWorkLayout";

const WorkDetails = () => {
  return (
    <div className={styles.detail}>
      <SubWorkLayout>
        <BlogGet />
      </SubWorkLayout>
    </div>
  );
};

export default WorkDetails;
