"use client";
import React from "react";

// hooks
import useGetAllNews from "@/hooks/useGetAllNews";

// scss
import styles from "./NewsDetail.module.scss";

// components
import SubWorkLayout from "@/components/templates/SubWorkLayout";

const NewsDetail = () => {
  return (
    <SubWorkLayout>
      <h1>news main content</h1>
    </SubWorkLayout>
  );
};

export default NewsDetail;
