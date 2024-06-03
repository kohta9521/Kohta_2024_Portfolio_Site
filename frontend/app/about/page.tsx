import React from "react";

// scss
import styles from "./About.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";
import BoxTitle from "@/components/molecules/BoxTitle";
import SubMainText from "@/components/molecules/SubMainText";
import SubContactBox from "@/components/organisms/SubContactBox";

const About = () => {
  return (
    <SubPageLayout
      id={1}
      level={["About"]}
      title="About"
      subtitle="サイト概要"
      desc="kohta portfolio siteの概要となぜこのサイトを作成したのか、どのような技術スタックでこのサイトを制作しているのかをご覧いただけます。"
    >
      <SubSecTitle
        id={1}
        stringid="summary"
        text="About this website"
        color="green"
      />
      <BoxTitle
        id={1}
        jaTitle="このサイトについて"
        enTitle="About this website"
      />
      <SubMainText
        id={2}
        text="このサイトはkohtaのエンジニアとしてのポートフォリオサイトです。普段行っている業務や受託しているフリーランスの案件・自身のイベントなどをご覧いただけます。私kohtaは現在大学3年生で大学では法学を学んでいます。大学に在学しながらエンジニアとして働いている中様々な案件やお仕事をいただいています。 スタートアップの会社様のコーポレートサイトであったり個人のブログサイト、イベントなどの特設サイトからイベントの入場システムなど案件は多岐にわたります。自身の強みであるコミュニケーション能力を駆使してどんなクライアント様でも最大限要望を引き出します。また私一人ではなく複数人のエンジニアの横のつながりを活用し自分だけでは難しい案件でもご依頼いただけます。"
      />
      <BoxTitle id={2} jaTitle="基本情報" enTitle="My Profile" />
      <SubMainText
        id={3}
        text="トップページでも簡単に自己紹介させていただきましたがここでは詳細な自己紹介をご覧いただけます。"
      />
      <div className={styles.list}>
        <ul>
          <li>2003年生まれ 現21歳 東京都生まれ</li>
          <li>プログラミングの勉強を大学1年生で始める</li>
          <li>勉強は全て独学 無料のサービスやYouTubeなどの動画教材を使用</li>
          <li>
            趣味は楽器で高校時代はバンドをやっていた（楽器はピアノ・ギター）
          </li>
          <li>音楽好きが高じて不定期でDJ活動を行っている</li>
          <li>最近は高校生向けや大学生に向けたイベントを開催している</li>
        </ul>
      </div>
      <BoxTitle id={2} jaTitle="これまでの経歴" enTitle="My Career" />
      <SubMainText
        id={3}
        text="トップページでも簡単に自己紹介させていただきましたがここでは詳細にこれまでの経歴などをご覧いただけます。"
      />
      <div className={styles.list}>
        <ul>
          <li>学習院高等科を卒業</li>
          <li>学習院大学法学部法学科に入学</li>
          <li>プログラミングの勉強を始め熱中する</li>
          <li>
            インターンとして株式会社Reagal
            Coreにて薬機法のAIチェッカーのフロントエンド・コーポレートサイトなどを制作
          </li>
          <li>
            大学生でスキルを持ったエンジニアの活動場所を提供したいという理由からエンジニアコミュニティ「Enter」を創設。主に日本を中心にオンラインで世界中のエンジニアを志す大学生を集める。（現在休止中）
          </li>
          <li>
            インターンとしてSimple株式会社にてコーポレートサイト・自社サービスの書き換え業務を行う
          </li>
          <li>
            フリラーンスとして活動を始める。初めは知り合いの会社のコーポレート制作
          </li>
          <li>運営メンバーとして大学エンジニアサークルSpechTechに参加</li>
          <li>Simple株式会社にてインターンから正社員に採用される</li>
          <li>
            正社員として社内の新規プロジェクトを考案
            モバイルアプリの制作などに携わる
          </li>
          <li>現在に至る</li>
        </ul>
      </div>
      <SubContactBox />
    </SubPageLayout>
  );
};

export default About;
