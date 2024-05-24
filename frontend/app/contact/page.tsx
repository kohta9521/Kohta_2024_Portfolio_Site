import React from "react";

// scss
import styles from "./Contact.module.scss";

// components
import SubPageLayout from "@/components/templates/SubPageLayout";

const Contact = () => {
  return (
    <SubPageLayout
      id={3}
      level={["Contact"]}
      title="CONTACT"
      subtitle="お問い合わせ"
      desc="私に関するお問い合わせ・Web制作のご依頼はこちらからお問い合わせください。"
    >
      <h1>Contact us</h1>
      <form
        action="https://kohta-engineer-portfolio.form.newt.so/v1/RqLXd0DCc"
        method="post"
      >
        <label htmlFor="name">Name</label>
        <input id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </SubPageLayout>
  );
};

export default Contact;
