import React from "react";

// scss
import styles from "./styles/ConsoleAnimation.module.scss";

// lib
import { TypeAnimation } from "react-type-animation";

const ConsoleAnimation = ({ onComplete }: any) => {
  return (
    <div className={styles.animationBox}>
      <pre className={styles.pre}>
        <TypeAnimation
          sequence={[
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\n", // Gitリポジトリをクローン
            10,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\n", // クローン中
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\n", // クローン中
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\n", // クローン中
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\n", // クローン中
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\n", // クローン中
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\n", // クローン中
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\n", // クローン中
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\n", // ディレクトリ変更
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\n", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\n", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\n", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\n", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\nnpm WARN EBADENGINE   current: { node: 'v18.18.1', npm: '9.8.1' }\n", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\nnpm WARN EBADENGINE   current: { node: 'v18.18.1', npm: '9.8.1' }\nnpm WARN EBADENGINE }\n", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\nnpm WARN EBADENGINE   current: { node: 'v18.18.1', npm: '9.8.1' }\nnpm WARN EBADENGINE }\n", // npmでパッケージをインストール", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\nnpm WARN EBADENGINE   current: { node: 'v18.18.1', npm: '9.8.1' }\nnpm WARN EBADENGINE }\ncp .env.example .env\n", // 環境設定ファイルをコピー", // npmでパッケージをインストール", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\nnpm WARN EBADENGINE   current: { node: 'v18.18.1', npm: '9.8.1' }\nnpm WARN EBADENGINE }\ncp .env.example .env\nnpm run lint\n", // コードの構文チェック", // 環境設定ファイルをコピー", // npmでパッケージをインストール", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\nnpm WARN EBADENGINE   current: { node: 'v18.18.1', npm: '9.8.1' }\nnpm WARN EBADENGINE }\ncp .env.example .env\nnpm run lint\nnpm test\n", // テストを実行", // コードの構文チェック", // 環境設定ファイルをコピー", // npmでパッケージをインストール", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\nnpm WARN EBADENGINE   current: { node: 'v18.18.1', npm: '9.8.1' }\nnpm WARN EBADENGINE }\ncp .env.example .env\nnpm run lint\nnpm test\nnpm run build\n", // 本番ビルドの作成", // テストを実行", // コードの構文チェック", // 環境設定ファイルをコピー", // npmでパッケージをインストール", // npmでパッケージをインストール
            1,
            "git clone https://github.com/kohta9521/Kohta_2024_Portfolio_Site.git\nCloning into 'Kohta_2024_Portfolio_Site'...\nremote: Counting objects: 100% (591/591), done.\nremote: Total 591 (delta 207), reused 480 (delta 113), pack-reused 0\nReceiving objects: 100% (591/591), 12.48 MiB | 2.48 MiB/s, done.\ncd portfolio-site\nnpm install\nnpm WARN EBADENGINE Unsupported engine {\nnpm WARN EBADENGINE   current: { node: 'v18.18.1', npm: '9.8.1' }\nnpm WARN EBADENGINE }\ncp .env.example .env\nnpm run lint\nnpm test\nnpm run build\nnpm start\n", // 開発サーバーを起動", // 本番ビルドの作成", // テストを実行", // コードの構文チェック", // 環境設定ファイルをコピー", // npmでパッケージをインストール", // npmでパッケージをインストール
            10,
            () => onComplete(),
          ]}
          speed={{ type: "keyStrokeDelayInMs", value: 1 }}
          cursor={false} // カーソルを非表示にする
          repeat={0} // 繰り返しを行わない
          style={{ display: "block" }} // スタイル設定
        />
      </pre>
    </div>
  );
};

export default ConsoleAnimation;
