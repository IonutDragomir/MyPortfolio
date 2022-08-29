import React, { useState, useEffect } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const messagesCollectionRef = collection(db, "messages");

  async function storeMessage() {
    await addDoc(messagesCollectionRef, {
      name: name,
      email: email,
      message: message,
    });
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    setLoading(true);
    storeMessage();

    setTimeout(() => {
      setLoading(false);
      setIsFormSubmited(true);
    }, 500);
  }

  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.envelope} alt="email" />
          <a href="mailto:ionutdragomir1410@yahoo.com" className="p-text">
            ionutdragomir1410@yahoo.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +40 (731) 758-114" className="p-text">
            +40 (731) 758-114
          </a>
        </div>
      </div>

      {!isFormSubmited ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>

          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>

          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for your getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
