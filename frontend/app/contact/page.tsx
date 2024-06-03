import React from "react";

// scss
import styles from "./Contact.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubSecTitle from "@/components/molecules/SubSecTitle";
import BoxTitle from "@/components/molecules/BoxTitle";
import SubMainText from "@/components/molecules/SubMainText";

const Contact = () => {
  return (
    <SubPageLayout
      id={3}
      level={["Contact"]}
      title="CONTACT"
      subtitle="お問い合わせ"
      desc="私に関するお問い合わせ・Web制作のご依頼はこちらからお問い合わせください。"
    >
      <SubSecTitle id={1} stringid="summary" text="Contact me" color="green" />
      <BoxTitle id={1} jaTitle="お問い合わせフォーム" enTitle="Contact Form" />
      <SubMainText
        id={2}
        text="こちらからお問い合わせいただけます。お仕事についてのご相談、見積もりを出して欲しいなどお気軽にご連絡ください。また、お問い合わせいただいたメールアドレスに登録完了メールが届きますので、ご確認ください。お問い合わせいただいた内容については、原則として３営業日以内に返信をいたします。"
      />
      <form
        className={styles.form}
        action="https://kohta-engineer-portfolio.form.newt.so/v1/RqLXd0DCc"
        method="post"
      >
        <label className={styles.label} htmlFor="name">
          ○ Name
        </label>
        <input className={styles.input} id="name" name="name" />
        <label className={styles.label} htmlFor="email">
          ○ Email
        </label>
        <input className={styles.input} id="email" name="email" type="email" />
        <label className={styles.label} htmlFor="message">
          ○ Message
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
        ></textarea>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </SubPageLayout>
  );
};

export default Contact;
