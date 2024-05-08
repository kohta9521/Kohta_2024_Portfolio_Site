import React from "react";

// scss
import styles from "./styles/Contact.module.scss";

// components

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.titleBox}>
            <p className={styles.jaTitle}>お問い合わせ</p>
            <h2 className={styles.enTitle}>Contact</h2>
          </div>
          <p className={styles.text}>
            こちらからお問い合わせいただけます。
            <br />
            お気軽にご連絡ください。
            <br />
            また、お問い合わせいただいたメールアドレスに登録完了メールが届きますので、ご確認ください。
            お問い合わせいただいた内容については、原則として3営業日以内に返信いたします。
          </p>
        </div>
        <div className={styles.rightBox}></div>
      </div>
    </div>
  );
};

export default Contact;
