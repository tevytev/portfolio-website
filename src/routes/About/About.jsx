import { useState, useEffect } from "react";
import {
  Outlet,
  NavLink,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import "./About.css";
import pfp from "../../assets/pfp.png";
import skillset from "../../assets/Pair programming-rafiki.png";

export default function About(props) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const registrationBtn = document.getElementById("register");
    const container = document.getElementById("about-container");
    const loginBtn = document.getElementById("login");
    const mobLog = document.getElementById("mobile-login");
    const mobReg = document.getElementById("mobile-register");
    const mobContainer = document.getElementById("about-top-container");

    registrationBtn.addEventListener("click", () => {
      container.classList.add("active");
    });
    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });

    mobReg.addEventListener("click", () => {
      mobContainer.classList.add("active");
      setActive(false);
    });
    mobLog.addEventListener("click", () => {
      mobContainer.classList.remove("active");
      setActive(true);
    });
  }, []);

  return (
    <>
      <main className="fg page-container about-cont">
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
            About <span className="text-stroke">Me</span>
            <span style={{ color: "#1E61D2" }}>.</span>
          </motion.h1>
        </div>
        <section className="about-section">
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateY(10px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ delay: 0.3 }}
            className="about-container"
            id="about-container"
          >
            <div className="form-container skills">
              <div className="about-content">
                <h2>Hard skills</h2>
                <div className="skillset-icon-container">
                  <div className="skillset-icon">
                    <i class="fa-brands fa-html5 fa-2xl"></i>
                  </div>
                  <div className="skillset-icon">
                    <i class="fa-brands fa-css3 fa-2xl"></i>
                  </div>
                  <div className="skillset-icon">
                    <i class="fa-brands fa-js fa-2xl"></i>
                  </div>
                  <div className="skillset-icon">
                    <i class="fa-brands fa-python fa-2xl"></i>
                  </div>
                  <div className="skillset-icon">
                    <i class="fa-brands fa-react fa-2xl"></i>
                  </div>
                </div>
                <p>
                  My foundational skillset includes HTML, CSS, and
                  JavaScript/Node.js. I've also gained additional experience
                  with frameworks and libraries like Express.js and React.js.
                  Currently, I am focusing on honing my skills in relational
                  database management and sql, data structures and algorithms, and Python.
                </p>
                <h2>Soft skills</h2>
                <div className="skillset-icon-container">
                  <div className="skillset-icon">
                    <i class="fa-solid fa-ear-listen fa-xl"></i>
                  </div>
                  <div className="skillset-icon">
                    <i class="fa-solid fa-people-group fa-xl"></i>
                  </div>
                  <div className="skillset-icon">
                    <i class="fa-solid fa-brain fa-xl"></i>
                  </div>
                  <div className="skillset-icon">
                    <i class="fa-solid fa-hourglass-start fa-xl"></i>
                  </div>
                </div>
                <p>
                  I am an active listener and a collaborative team player,
                  always striving to think both analytically and synergetically.
                  I prioritize effective time management and organization,
                  understanding that these habits are essential for maintaining
                  clear, open communication with my colleagues and stakeholders.
                  By staying punctual and accountable, I ensure that my work
                  aligns with team goals and expectations.
                </p>
              </div>
            </div>
            <div className="form-container about">
              <div className="about-content">
                <h2>My Background</h2>
                <p style={{ marginBottom: "1rem" }}>
                  I have a Bachelor’s degree in Digital Media & Design from the
                  University of Connecticut. During my time at UConn, I
                  developed a keen understanding of the aesthetic and functional
                  demands of the digital marketplace, which translates
                  advantageously into my UI/UX designs.
                </p>
                <h2>Who is Tevin?</h2>
                <p>
                  Greetings! I'm from Bridgeport, Connecticut. I'm a
                  twenty-seven year old geezer who has chronic back pain. And
                  even though my body begs me to hang up the jersey, I love to
                  workout and play sports with my friends. I’m a huge horror
                  movie fan—so much so that I even watch them alone sometimes! I
                  have a passion for drawing and enjoy diving into all things
                  creative. Above all, my family is my greatest
                  inspiration—they’re my beacon of strength and support.
                </p>
              </div>
            </div>
            <div className="toggle-container">
              <div className="toggle">
                <div className="toggle-panel toggle-left">
                  <img
                    src={skillset}
                    className="portrait-placeholder"
                    style={{ color: "black" }}
                  ></img>
                  <h2>
                    What I bring to the table
                    <span style={{ color: "#1E61D2" }}>.</span>
                  </h2>
                  <p>(And still learning!)</p>
                  <button className="hidden" id="login">
                    About me
                  </button>
                </div>
                <div className="toggle-panel toggle-right">
                  <img
                    src={pfp}
                    className="portrait-placeholder"
                    style={{ color: "black" }}
                  ></img>
                  <h2>
                    Tevin Cheatham<span style={{ color: "#1E61D2" }}>.</span>
                  </h2>
                  <p>(It's a pleasure to meet you.)</p>
                  <button className="hidden" id="register">
                    My Skill set
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateY(10px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
            }}
            transition={{ delay: 0.3 }}
            className="about-container-mobile"
          >
            <div id="about-top-container" className="about-top-container">
              <div className="toggle-container">
                <div className="toggle">
                  <div className="toggle-panel toggle-left">
                    <img
                      src={skillset}
                      className="portrait-placeholder"
                      style={{ color: "black" }}
                    ></img>
                    <h2>
                      What I bring to the table
                      <span style={{ color: "#1E61D2" }}>.</span>
                    </h2>
                    <p>(And still learning!)</p>
                    <button className="hidden" id="mobile-login">
                      About me
                    </button>
                  </div>
                  <div className="toggle-panel toggle-right">
                    <img
                      src={pfp}
                      className="portrait-placeholder"
                      style={{ color: "black" }}
                    ></img>
                    <h2>
                      Tevin Cheatham<span style={{ color: "#1E61D2" }}>.</span>
                    </h2>
                    <p>(It's a pleasure to meet you.)</p>
                    <button className="hidden" id="mobile-register">
                      My Skill set
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <MotionConfig
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              <motion.div
                animate={active ? "about" : "skills"}
                id="about-bottom-container"
                className="about-bottom-container"
              >
                <motion.div
                  style={{
                    display: "none",
                    transform: "translateY(0px)",
                    // transform: 'scale(0)'
                  }}
                  variants={{
                    about: {
                      display: "flex",
                      transform: [
                        "translateY(-480px)",
                        "translateY(-480px)",
                        "translateY(0px)",
                      ],
                      // transform: 'scale(1)'
                    },
                    skills: {
                      transform: [
                        "translateY(0px)",
                        "translateY(-480px)",
                        "translateY(-480px)",
                      ],
                      display: "none",
                      // transform: 'scale(0)'
                    },
                  }}
                  id="about"
                  className="about-content"
                >
                  <h2>My Background</h2>
                  <p style={{ marginBottom: "1rem" }}>
                    I have a Bachelor’s degree in Digital Media & Design from
                    the University of Connecticut. During my time at UConn, I
                    developed a keen understanding of the aesthetic and
                    functional demands of the digital marketplace, which
                    translates advantageously into my UI/UX designs.
                  </p>
                  <h2>Who is Tevin?</h2>
                  <p>
                  Greetings! I'm from Bridgeport, Connecticut. I'm a
                  twenty-seven year old geezer who has chronic back pain. And
                  even though my body begs me to hang up the jersey, I love to
                  workout and play sports with my friends. I’m a huge horror
                  movie fan—so much so that I even watch them alone sometimes! I
                  have a passion for drawing and enjoy diving into all things
                  creative. Above all, my family is my greatest
                  inspiration—they’re my beacon of strength and support.
                  </p>
                </motion.div>
                <motion.div
                  style={{
                    transform: "translateY(-480px)",
                  }}
                  variants={{
                    about: {
                      transform: [
                        "translateY(0px)",
                        "translateY(-480px)",
                        "translateY(-480px)",
                      ],
                      display: "none",
                      maxHeight: ["380px", "380px", "380px"],
                    },
                    skills: {
                      transform: [
                        "translateY(-480px)",
                        "translateY(-480px)",
                        "translateY(0px)",
                      ],
                      maxHeight: ["380px", "480px", "100%", "100%"],
                    },
                  }}
                  id="skills"
                  className="about-content"
                >
                  <h2>Hard skills</h2>
                  <div className="skillset-icon-container">
                    <div className="skillset-icon">
                      <i class="fa-brands fa-html5 fa-2xl"></i>
                    </div>
                    <div className="skillset-icon">
                      <i class="fa-brands fa-css3 fa-2xl"></i>
                    </div>
                    <div className="skillset-icon">
                      <i class="fa-brands fa-js fa-2xl"></i>
                    </div>
                    <div className="skillset-icon">
                      <i class="fa-brands fa-python fa-2xl"></i>
                    </div>
                    <div className="skillset-icon">
                      <i class="fa-brands fa-react fa-2xl"></i>
                    </div>
                  </div>
                  <p>
                  My foundational skillset includes HTML, CSS, and
                  JavaScript/Node.js. I've also gained additional experience
                  with frameworks and libraries like Express.js and React.js.
                  Currently, I am focusing on honing my skills in relational
                  database management, data structures and algorithms, and Python.
                  </p>
                  <h2>Soft skills</h2>
                  <div className="skillset-icon-container">
                    <div className="skillset-icon">
                      <i class="fa-solid fa-ear-listen fa-xl"></i>
                    </div>
                    <div className="skillset-icon">
                      <i class="fa-solid fa-people-group fa-xl"></i>
                    </div>
                    <div className="skillset-icon">
                      <i class="fa-solid fa-brain fa-xl"></i>
                    </div>
                    <div className="skillset-icon">
                      <i class="fa-solid fa-hourglass-start fa-xl"></i>
                    </div>
                  </div>
                  <p>
                    I am an active listener and a collaborative team player,
                    always striving to think both analytically and
                    synergetically. I prioritize effective time management and
                    organization, understanding that these habits are essential
                    for maintaining clear, open communication with my colleagues
                    and stakeholders. By staying punctual and accountable, I
                    ensure that my work aligns with team goals and expectations.
                  </p>
                </motion.div>
              </motion.div>
            </MotionConfig>
          </motion.div>
        </section>
      </main>
    </>
  );
}
