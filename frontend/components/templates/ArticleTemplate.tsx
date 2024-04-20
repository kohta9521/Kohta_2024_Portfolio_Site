import React from "react";

// scss
import styles from "./styles/ArticleTemplate.module.scss";

// component

// props
export interface ArticleTemplateProps {
  id: number;
  children: React.ReactNode;
}

const ArticleTemplate = ({ id, children }: ArticleTemplateProps) => {
  return <div className={styles.article} key={id}></div>;
};

export default ArticleTemplate;
