import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/SubContactBox.module.scss";

// icon
import { MdMail } from "react-icons/md";

const SubContactBox = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <span className={styles.jaTitle}>お問い合わせ</span>
          <h1 className={styles.enTitle}>CONTACT</h1>
        </div>
        <p className={styles.mainText}>
          以下のボタンよりお問い合わせフォームの入力をお願いします。
          <br />
          2営業日以内に入力いただいたメールアドレスに返信いたします。
        </p>
        <Link className={styles.contactButton} href={"/contact"}>
          <MdMail className={styles.icon} />
          お問い合わせフォーム
        </Link>
      </div>
    </div>
  );
};

export default SubContactBox;
