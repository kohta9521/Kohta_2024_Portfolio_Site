import React from "react";

// scss
import styles from "./styles/SkillCard.module.scss";

// props
export type SkillCardProps = {
  id: number;
  name: string;
  version?: string[];
  iconName: React.ReactNode;
  periodOfUse: string;
  usage: string;
};

const SkillCard = ({
  id,
  name,
  version,
  iconName,
  periodOfUse,
  usage,
}: SkillCardProps) => {
  return (
    <div className={styles.card} key={id}>
      <h2 className={styles.langName}>{name}</h2>
      <div className={styles.iconBox}>{iconName}</div>
      <p className={styles.versionText}>{version?.join(", ")}</p>
      <p className={styles.year}>{periodOfUse}</p>
      <p className={styles.desc}>{usage}</p>
    </div>
  );
};

export default SkillCard;
