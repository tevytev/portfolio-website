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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                  ex sapiente doloremque distinctio alias ratione pariatur
                  tenetur qui rem ad atque corporis, neque quas suscipit nobis
                  velit facilis eligendi quis.
                </p>
                <h2>Soft skills</h2>
                <div className="skillset-icon-container">
                  <div className="skillset-icon"></div>
                  <div className="skillset-icon"></div>
                  <div className="skillset-icon"></div>
                  <div className="skillset-icon"></div>
                  <div className="skillset-icon"></div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  voluptas suscipit, nam distinctio perspiciatis ab, commodi eos
                  odit reprehenderit quod magni sunt ducimus modi? Pariatur quo
                  hic magni beatae doloremque.
                </p>
              </div>
            </div>
            <div className="form-container about">
              <div className="about-content">
                <h2>My Background</h2>
                <p style={{ marginBottom: "1rem" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quia, earum accusantium expedita vel recusandae odit omnis
                  nulla atque odio. Expedita accusamus temporibus quasi eaque
                  nesciunt asperiores fuga adipisci necessitatibus nihil.
                </p>
                <h2>Who is Tevin?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  a quos accusamus quaerat, quas illum hic perspiciatis animi.
                  Officiis laboriosam unde soluta reprehenderit, obcaecati
                  officia. Vero atque vitae temporibus nihil?
                </p>
              </div>
            </div>
            <div className="toggle-container">
              <div className="toggle">
                <div className="toggle-panel toggle-left">
                  <div
                    className="portrait-placeholder"
                    style={{ color: "black" }}
                  >
                    (graphic)
                  </div>
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
                  <div
                    className="portrait-placeholder"
                    style={{ color: "black" }}
                  >
                    (portrait)
                  </div>
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
                    <div
                      className="portrait-placeholder"
                      style={{ color: "black" }}
                    >
                      (graphic)
                    </div>
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
                    <div
                      className="portrait-placeholder"
                      style={{ color: "black" }}
                    >
                      (portrait)
                    </div>
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
                    transform: ["translateY(-480px)", "translateY(-480px)", "translateY(0px)"],
                    // transform: 'scale(1)'
                  },
                  skills: {
                    transform: ["translateY(0px)", "translateY(-480px)", "translateY(-480px)"],
                    display: 'none'
                    // transform: 'scale(0)'
                  },
                }}
                id="about"
                className="about-content"
              >
                <h2>My Background</h2>
                <p style={{ marginBottom: "1rem" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quia, earum accusantium expedita vel recusandae odit omnis
                  nulla atque odio. Expedita accusamus temporibus quasi eaque
                  nesciunt asperiores fuga adipisci necessitatibus nihil.
                </p>
                <h2>Who is Tevin?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  a quos accusamus quaerat, quas illum hic perspiciatis animi.
                  Officiis laboriosam unde soluta reprehenderit, obcaecati
                  officia. Vero atque vitae temporibus nihil?
                </p>
              </motion.div>
              <motion.div
                style={{
                  transform: "translateY(-480px)",
                }}
                variants={{
                  about: {
                    transform: ["translateY(0px)", "translateY(-480px)", "translateY(-480px)"],
                    display: "none",
                    maxHeight: ['380px', '380px', '380px']
                  },
                  skills: {
                    transform: ["translateY(-480px)", "translateY(-480px)", "translateY(0px)"],
                    maxHeight: ['380px', '480px', '100%', '100%']
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                  ex sapiente doloremque distinctio alias ratione pariatur
                  tenetur qui rem ad atque corporis, neque quas suscipit nobis
                  velit facilis eligendi quis.
                </p>
                <h2>Soft skills</h2>
                <div className="skillset-icon-container">
                  <div className="skillset-icon"></div>
                  <div className="skillset-icon"></div>
                  <div className="skillset-icon"></div>
                  <div className="skillset-icon"></div>
                  <div className="skillset-icon"></div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  voluptas suscipit, nam distinctio perspiciatis ab, commodi eos
                  odit reprehenderit quod magni sunt ducimus modi? Pariatur quo
                  hic magni beatae doloremque.
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
