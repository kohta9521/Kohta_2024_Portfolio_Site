import React from "react";

// scss
import styles from "./Contact.module.scss";

// components

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact us</h1>
      <form action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT} method="post">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
