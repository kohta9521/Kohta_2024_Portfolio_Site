import React from "react";

// scss
import styles from "./styles/Work.module.scss";
import WorkCard from "../molecules/WorkCard";

// components

const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.titleBox}>
            <p className={styles.jaTitle}>制作・活動実績</p>
            <h1 className={styles.enTitle}>Works</h1>
            <p className={styles.desc}>
              ここでは私の活動実績をご覧いただけます。
            </p>
          </div>
          <div className={styles.flexCardBox}>
            <WorkCard
              id={1}
              link="/works/1"
              img="/images/works/1.jpg"
              company="株式会社〇〇様"
              title="Web制作"
              tags={["#HTML", "#CSS", "#JavaScript"]}
            />
            <WorkCard
              id={1}
              link="/works/1"
              img="/images/works/1.jpg"
              company="株式会社〇〇様"
              title="Web制作"
              tags={["#HTML", "#CSS", "#JavaScript"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
