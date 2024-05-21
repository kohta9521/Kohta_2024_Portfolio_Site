import React from "react";

// scss
import styles from "./styles/ContactContents.module.scss";

const ContactContents = () => {
  return (
    <div className={styles.contact}>
      <form
        action="https://kohta-engineer-portfolio.form.newt.so/v1/RqLXd0DCc"
        method="post"
      >
        <label htmlFor="name">
          お名前<span className={styles.icon}>*</span>
        </label>
        <input id="name" name="name" required />
        <label htmlFor="email">
          メールアドレス<span className={styles.icon}>*</span>
        </label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="message">
          お問い合わせ内容<span className={styles.icon}>*</span>
        </label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default ContactContents;
