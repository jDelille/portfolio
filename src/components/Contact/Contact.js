import React, { useState, useRef, useEffect } from "react";
import {FiExternalLink} from 'react-icons/fi'
import "./Contact.scss";
import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";
import Parallax from "parallax-js";
init("user_9AzWABg48JM2r7AstLnjU");

function Contact() {
  const [sent, setSent] = useState(false);

  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMsg("");

    emailjs
      .sendForm(
        "service_jn6nq3n",
        "template_kx800bb",
        form.current,
        "user_9AzWABg48JM2r7AstLnjU"
      )
      .then(
        (result) => {
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSent(false);
  };

  useEffect(() => {
    const scene = document.getElementById("scene");
    let parallaxInstance = new Parallax(scene);
  
    const scene2 = document.getElementById("scene-2");
    let parallaxInstance2 = new Parallax(scene2);
  })

  return (
    <div className="contact" id="contact">
    <div id="scene">
        <div className="left-layer" data-depth="0.5">
          <img src="./images/meteor.png" alt="" />
        </div>
      </div>
      <div id="scene-2">
        <div className="right-layer" data-depth="0.6">
          <img src="./images/meteor2.png" alt="" />
        </div>
      </div>
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          
          <div className="wrapper">
            <input
              type="text"
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Name</label>
          </div>
          <div className="wrapper">
            <input
              type="email"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Email</label>
          </div>
          <div className="wrapper">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <label htmlFor="">Message...</label>
          </div>

          {sent ? (
            <p className="btn"> Message Sent! </p>
          ) : (
            <button
              type="submit"
              className="btn"
              onclick={() => setSent(!sent)}
            >
              Send
            </button>
          )}
        </form>
        {/* <div className="my-info">
         <div className="info-wrapper">
          <p>Email: justind7513@gmail.com</p>
          <p>Phone: 203-512-2702</p>
          <p>Linkedin <a href="https://www.linkedin.com/in/justin-delille/" target="_blank" rel="noreferrer"><FiExternalLink /></a></p>
          <p>Github <a href="https://github.com/jDelille" target="_blank" rel="noreferrer"><FiExternalLink /></a></p>
         </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
