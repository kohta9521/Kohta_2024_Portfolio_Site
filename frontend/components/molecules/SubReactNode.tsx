"use client";
import React from "react";

// scss
import styles from "./styles/SubReactNode.module.scss";

// type
export type SubReactNodeProps = {
  children: React.ReactNode;
};

const SubReactNode = ({ children }: SubReactNodeProps) => {
  return <div className={styles.box}>{children}</div>;
};

export default SubReactNode;
