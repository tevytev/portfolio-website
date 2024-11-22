import { useState, useEffect, useRef } from "react";
import {
  Outlet,
  NavLink,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import emailImg from "../../assets/email.png";
import phoneImg from "../../assets/smartphone.png";

import "./Contact.css";

export default function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k9xb1va", "template_us083rp", form.current, {
        publicKey: "VIrThvMXppE6Qt3jQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          document.getElementById('sent-div').style.opacity = "1";
          setTimeout(() => {
            document.getElementById('sent-div').style.opacity = "0";
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      document.getElementById('contact-name').value = "";
      document.getElementById('contact-email').value = "";
      document.getElementById('contact-message').value = "";


      
  };

  return (
    <>
      <main className="fg page-container">
        <div className="page-header-container">
          <motion.h1
            initial={{
              opacity: 0,
              transform: "translateX(100px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateX(0px)",
            }}
            transition={{ delay: 0 }}
          >
            Let's Get in <span className="text-stroke">Touch</span>
            <span style={{ color: "#1E61D2" }}>.</span>
          </motion.h1>
        </div>
        <motion.section
          initial={{
            opacity: 0,
            transform: "translateY(10px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
          }}
          transition={{ delay: 0.3 }}
          className="contact-section"
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-card-header">
              <h2 id="email-h2">
                Send me an Email<span style={{ color: "#1E61D2" }}>.</span>
              </h2>
              <div className="email-img-container">
                <div id="sent-div">Email sent!</div>
                <img id="email-img" src={emailImg} alt="" />
              </div>
            </div>
            <input
              className="contact-input"
              placeholder="Name"
              type="text"
              name="from_name"
              id="contact-name"
              required
            />
            <input
              className="contact-input"
              placeholder="Email"
              type="email"
              name="from_email"
              id="contact-email"
              required
            />
            <textarea id="contact-message" placeholder="Message" name="message" required />
            <button className="email-submit" type="submit" value="Send"></button>
          </form>
          <div className="or-container">
            <span className="or-line-2"></span>
            <p>OR</p>
            <span className="or-line-1"></span>
          </div>
          <div className="phone-social-container">
            <div className="contact-card-header">
              <h2 id="phone-h2">
                Give me a Call or DM<span style={{ color: "#1E61D2" }}>.</span>
              </h2>
              <div className="phone-img-container">
                <img id="phone-img" src={phoneImg} alt="" />
              </div>
            </div>
            {/* <div className="social-circle-container">
              <div className="social-circle-top">
                <a className="social-top-left">
                  <i class="fa-brands fa-linkedin-in fa-2xl"></i>
                </a>
                <a className="social-top-right">
                  <i class="fa-solid fa-phone fa-2xl"></i>
                </a>
              </div>
              <div className="social-circle-bottom">
                <a className="social-bottom-left">
                  <i class="fa-brands fa-github fa-2xl"></i>
                </a>
                <a className="social-bottom-right">
                  <i class="fa-brands fa-discord fa-2xl"></i>
                </a>
              </div>
              
            </div> */}
            <a href="tel:+12035511566" className="phone-container">
              <div className="phone-icon-container">
                <i class="fa-solid fa-phone"></i>
              </div>
              <p>+1 (203)-551-1566</p>
            </a>
            <div className="linkedin-container">
              <div className="linkedin-icon-container">
                <i class="fa-brands fa-linkedin-in fa-xl"></i>
              </div>
              <a target="_blank" href="https://www.linkedin.com/in/tevin-cheatham-63594a214/">https://www.linkedin.com/in/tevin-cheatham-63594a214/</a>
            </div>
            <div className="linkedin-container">
              <div className="linkedin-icon-container">
              <i class="fa-brands fa-discord fa-xl"></i>
              </div>
              <p>tevdev13</p>
            </div>
            <div className="linkedin-container">
              <div className="linkedin-icon-container">
              <i class="fa-brands fa-github fa-xl"></i>
              </div>
              <a target="_blank" href="https://github.com/tevytev">https://github.com/tevytev</a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
