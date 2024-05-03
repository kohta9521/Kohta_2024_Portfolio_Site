"use client";
import React, { useState } from "react";

// scss
import styles from "../styles/page.module.scss";

// components import
import ConsoleAnimation from "@/components/molecules/ConsoleAnimation";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false); // ローディングの状態を管理

  // アニメーションが終了したときの処理
  const handleAnimationComplete = () => {
    console.log("Portfolio setup completed");
    setLoadingComplete(true); // ローディング完了状態をtrueに設定
  };

  if (loadingComplete) {
    // ローディングが完了したらメインコンテンツを表示
    return (
      <div className={styles.main}>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main content of your website.</p>
      </div>
    );
  }

  // ローディング中の表示
  return (
    <div className={styles.top}>
      <ConsoleAnimation onComplete={handleAnimationComplete} />
    </div>
  );
}
