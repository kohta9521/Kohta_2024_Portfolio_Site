import React from "react";

// scss
import styles from "./styles/ListBox.module.scss";

// props
export type ListBoxProps = {
  children: React.ReactNode;
};

// components

const ListBox = ({ children }: ListBoxProps) => {
  return <div className={styles.listBox}>{children}</div>;
};

export default ListBox;
