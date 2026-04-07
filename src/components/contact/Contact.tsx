"use client";

import React, { useRef } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uwjrkuc",
        "template_j4pd9wj",
        form.current!,
        "ckYQsaKiHayd6Sw9N",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section className={styles.contact}>
      <h1>Contact</h1>

      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
