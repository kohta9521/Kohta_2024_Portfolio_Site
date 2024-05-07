import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/Profile.module.scss";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import SkillChart from "../molecules/SkillChart";

const Profile = () => {
  useAOS();
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <p className={styles.jaTitle}>私について</p>
          <h2 className={styles.enTitle}>Profile</h2>
        </div>
        <div className={styles.main}>
          <div className={styles.leftBox}>
            <p className={styles.text}>
              2003年生まれの東京都出身のエンジニア。
              <br />
              大学1年生でプログラミングと出会い没頭、勉強を始めてから数年間ほぼ毎日コーディングをしている。
              主にフロントエンドを中心にWeb開発を行っており、Reactを使った開発が得意。最近はバックエンドも勉強中。
              <br />
              現在は会社にエンジニアとして所属しながら、フリーランス、業務委託という形で開発を行っている。
              <br />
              その他にも、イベント運営・イベントのDX化などを自身で行っておりコーディングだけではないクライアントとのやり取りも得意。
              大学学内で友人と共同開発でサービスをリリースしたり、学内でエンジニアになりたい学生の支援なども行っている。
              音楽が好きということもあり趣味でDJなども行っている。
            </p>
            <div className={styles.snsBox}></div>
          </div>
          <div className={styles.rightBox}>
            <Image
              className={styles.image}
              src="/images/profile.jpeg"
              width={400}
              height={400}
              alt="プロフィール画像"
            />
          </div>
        </div>
        {/* skill */}
        <div className={styles.skillBox}>
          <SkillChart />
        </div>
      </div>
    </div>
  );
};

export default Profile;
