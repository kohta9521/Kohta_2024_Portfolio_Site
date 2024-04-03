import React from "react";

// scss
import styles from "./styles/RecentWork.module.scss";

// component
import SectionTitle from "../molecules/SectionTitle";

const RecentWork = () => {
  return (
    <div className={styles.recent}>
      <div className={styles.container}>
        <SectionTitle key={1} id="#recent" title="Recent My Works" />
      </div>
    </div>
  );
};

export default RecentWork;
