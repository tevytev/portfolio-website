import { useState, useEffect } from "react";
import {
  Outlet,
  NavLink,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import hero from "../../assets/Application programming interface-rafiki.png";
import resume from "../../resources/Tevin_Cheatham_Resume.pdf"

export default function Home(props) {
  const text =
    "A passionate programmer who is dedicated to solving problems while creating scalable and dynamic web applications.".split(
      " "
    );
  return (
    <>
      <main className="fg home-container">
        <div className="home-text-container">
          <motion.h2
            initial={{
              opacity: 0,
              transform: "translateX(10px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateX(0px)",
            }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="home-sub-header"
          >
            Welcome!
          </motion.h2>
          <motion.h1
            initial={{
              opacity: 0,
              transform: "translateY(10px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ delay: 0.3, duration: 0.2 }}
            id="home-header"
          >
            Hi, I'm <span className="text-stroke">Tevin</span>, your next web
            developer<span style={{ color: "#1E61D2" }}>.</span>
          </motion.h1>
          <motion.h3
            initial={{
              opacity: 0,
              transform: "translateY(-10px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateX(0px)",
            }}
            transition={{ delay: 0.6, duration: 0.2 }}
            className="home-info-header"
          >
            A passionate web developer focused on building scalable, dynamic web applications that solve real-world problems
          </motion.h3>
          <div className="home-btn-container">
            {/* <a href="" id="contact-me-btn">
              Contact me
            </a> */}
            {/* <a href="" id="resume-btn">Resume</a> */}
            <motion.a
              initial={{
                opacity: 0,
                transform: "translateX(20px)",
              }}
              animate={{
                opacity: 1,
                transform: "translateX(0px)",
              }}
              transition={{ delay: 1, duration: 0.1 }}
              class="contact-button"
              href="http://localhost:5173/contact"
            >
              Contact me
            </motion.a>
            <motion.a
              href={resume}
              target="_blank"
              initial={{
                opacity: 0,
                transform: "translateX(20px)",
              }}
              animate={{
                opacity: 1,
                transform: "translateX(0px)",
              }}
              transition={{ delay: 1.2, duration: 0.1 }}
              class="resume-button"
            >
              Resume
            </motion.a>
          </div>
          <div></div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateY(20px)",
            // transform: "scale(0)"
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            // transform: "scale(1)"

          }}
          transition={{ delay: .5, duration: 0.5 }}
          class="resume-button"
          className="home-media-container"
        >
          <img src={hero} alt="" />
        </motion.div>
      </main>
    </>
  );
}
