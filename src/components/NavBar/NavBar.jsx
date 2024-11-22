import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  easeInOut,
  motion,
  MotionConfig,
  AnimatePresence,
  delay,
  color,
} from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import "./NavBar.css";
import logo from "../../assets/logo-2.png";

export default function NavBar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const ref = useRef(null);

  return (
    <>
      <header className="fg" id="nav-header">
        <div className="nav-logo-container">
          <img className="nav-image-logo" src={logo} alt="" />
          {/* <div className="nav-logo">
            <p className="text-stroke">TC</p>
          </div> */}
        </div>
        <div className="nav-burger-container">
          <AnimatedHamburgerButton />
        </div>
        <nav
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          id="nav"
        >
          <Cursor position={position} />
          <Tab tab={"tab"} setPosition={setPosition} link={"/home"}>
            Home
          </Tab>
          <Tab tab={"tab"} setPosition={setPosition} link={"/portfolio"}>
            Portfolio
          </Tab>
          <Tab tab={"tab"} setPosition={setPosition} link={"/about"}>
            About me
          </Tab>
          <Tab contact={"contact"} setPosition={setPosition} link={"/contact"}>
            Hire Me
          </Tab>
        </nav>
      </header>
    </>
  );
}

const Tab = ({ children, link, setPosition, contact, tab }) => {
  const ref = useRef(null);
  return (
    <>
      <NavLink
        ref={ref}
        onMouseEnter={() => {
          if (!ref.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft,
            mixBlendMode: 'multiply'
          });
        }}
        style={({ isActive, isPending, isTransitioning, hover }) => {
          return {
            background: isActive ? "rgba(217, 217, 217, 50%)" : "",
            borderRadius: isActive ? "150px" : "",
          };
        }}
        to={link}
        id={contact ? contact : null}
        className={tab ? tab : null}
      >
        {children}
      </NavLink>
    </>
  );
};

const Cursor = ({ position }) => {
  return (
    <>
      <motion.div animate={position} className="nav-cursor-container">
        <li className="nav-cursor"></li>
      </motion.div>
    </>
  );
};

const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <AnimatePresence>
        <motion.button
          id="burger"
          onClick={() => setActive((prev) => !prev)}
          animate={active ? "open" : "closed"}
          variants={{
            open: {
              backgroundColor: "#2151a4",
              borderRadius: "0 10px 0 10px",
            },
            closed: {
              backgroundColor: "#1e60d200",
              borderRadius: "0 10px 0 10px",
            },
          }}
        >
          <motion.span
            style={{
              position: "absolute",
              left: "calc(50% - 7px)",
              top: "30%",
              x: "-50%",
              y: "-50%",
              height: ".25rem",
              width: "1.25rem",
              backgroundColor: "#fff",
            }}
            className="burger-bar"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["30%", "50%", "50%"],
                width: ["1.25rem", "1.25rem", "2.2rem"],
                left: ["calc(50% - 7px)", "calc(50% - 7px)", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "30%"],
                width: ["2.2rem", "1.25rem", "1.25rem"],
                left: ["50%", "50%", "calc(50% - 7px)"],
              },
            }}
          />
          <motion.span
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
              height: ".25rem",
              width: "2.2rem",
              backgroundColor: "#fff",
            }}
            className="burger-bar"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
              },
            }}
          />
          <motion.span
            style={{
              position: "absolute",
              left: "calc(50% + 7px)",
              bottom: "30%",
              x: "-50%",
              y: "50%",
              height: ".25rem",
              width: "1.25rem",
              backgroundColor: "#fff",
            }}
            className="burger-bar"
            variants={{
              open: {
                bottom: ["30%", "50%", "50%"],
                opacity: ["100%", "100%", "0%"],
              },
              closed: {
                bottom: ["50%", "50%", "30%"],
                opacity: ["0%", "0%", "100%"],
              },
            }}
          />
        </motion.button>
        {active ? (
          <motion.div
            initial={{
              height: "55px",
              width: "55px",
              opacity: 0,
            }}
            animate={{
              height: "calc(100vh - 2.5rem)",
              width: "calc(100vw - 2.5rem)",
              opacity: 1,
            }}
            exit={{
              transition: {
                type: "spring",
                delay: 0.5,
                duration: 0.5,
              },
              height: "55px",
              width: "55px",
              opacity: 0,
              transition: {
                delay: 1,
              },
            }}
            transition={{
              type: "spring",
              bounce: "0.25",
            }}
            style={{
              backgroundColor: "var(--primary)",
              position: "absolute",
              height: "calc(100vh - 2rem)",
              width: "calc(100vw - 2rem)",
              right: "0",
              top: "0",
            }}
            key="modal"
            className="mobile-nav-container"
          >
            <motion.div
              initial={{
                display: "none",
                opacity: 0,
              }}
              animate={{
                display: "flex",
                opacity: 1,
              }}
              exit={{
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
                opacity: 0,
              }}
              transition={{
                display: {
                  delay: 0,
                },
                opacity: {
                  delay: 0.4,
                  duration: 1,
                },
              }}
              key="mobile-logo"
              className="responsive-nav-logo"
            >
              TC
            </motion.div>
            <nav className="mobile-nav">
              <motion.a
                initial={{
                  display: "none",
                  opacity: 0,
                  y: "-5px",
                }}
                animate={{
                  display: "inline-block",
                  opacity: 1,
                  y: "0px",
                }}
                exit={{
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                  opacity: 0,
                }}
                transition={{
                  display: {
                    delay: 0,
                  },
                  opacity: {
                    delay: 0.4,
                    duration: 1,
                  },
                  y: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                }}
                key="home"
                className="mobile-nav-link"
                href="/home"
              >
                {location.pathname === '/home' ? <p>Home.</p> : <p><span className="text-stroke">Home</span>.</p>}
              </motion.a>

              <motion.a
                initial={{
                  display: "none",
                  opacity: 0,
                  y: "-5px",
                }}
                animate={{
                  display: "inline-block",
                  opacity: 1,
                  y: "0px",
                }}
                exit={{
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                  opacity: 0,
                }}
                transition={{
                  display: {
                    delay: 0,
                  },
                  opacity: {
                    delay: 0.6,
                    duration: 1,
                  },
                  y: {
                    delay: 0.7,
                    duration: 0.5,
                  },
                }}
                key="portfolio"
                className="mobile-nav-link"
                href="/portfolio"
              >
                {location.pathname === '/portfolio' ? <p>Portfolio.</p> : <p><span className="text-stroke">Portfolio</span>.</p>}
              </motion.a>

              <motion.a
                initial={{
                  display: "none",
                  opacity: 0,
                  y: "-5px",
                }}
                animate={{
                  display: "inline-block",
                  opacity: 1,
                  y: "0px",
                }}
                exit={{
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                  opacity: 0,
                }}
                transition={{
                  display: {
                    delay: 0,
                  },
                  opacity: {
                    delay: 0.8,
                    duration: 1,
                  },
                  y: {
                    delay: 0.9,
                    duration: 0.5,
                  },
                }}
                key="about"
                className="mobile-nav-link"
                href="/about"
              >
                {location.pathname === '/about' ? <p>About me.</p> : <p><span className="text-stroke">About me</span>.</p>}
              </motion.a>

              <motion.a
                initial={{
                  display: "none",
                  opacity: 0,
                  y: "-5px",
                }}
                animate={{
                  display: "inline-block",
                  opacity: 1,
                  y: "0px",
                }}
                exit={{
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                  opacity: 0,
                }}
                transition={{
                  display: {
                    delay: 0,
                  },
                  opacity: {
                    delay: 1.0,
                    duration: 1,
                  },
                  y: {
                    delay: 1.1,
                    duration: 0.5,
                  },
                }}
                key="contact"
                className="mobile-nav-link"
                href="/contact"
              >
                {location.pathname === '/contact' ? <p>Hire me.</p> : <p><span className="text-stroke">Hire me</span>.</p>}
              </motion.a>
            </nav>
            <motion.div className="mobile-nav-bottom">
              <a target="_blank" href="https://www.linkedin.com/in/tevin-cheatham-63594a214/">
                <motion.i
                  initial={{
                    display: "none",
                    opacity: 0,
                    y: "-5px",
                  }}
                  animate={{
                    display: "inline-block",
                    opacity: 1,
                    y: "0px",
                  }}
                  exit={{
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    },
                    opacity: 0,
                  }}
                  transition={{
                    display: {
                      delay: 0,
                    },
                    opacity: {
                      delay: 0.4,
                      duration: 1,
                    },
                    y: {
                      delay: 0.5,
                      duration: 1,
                    },
                  }}
                  class="fa-brands fa-linkedin fa-2xl"
                ></motion.i>
              </a>
              
              <a target="" href="https://github.com/tevytev">
                <motion.i
                  initial={{
                    display: "none",
                    opacity: 0,
                    y: "-5px",
                  }}
                  animate={{
                    display: "inline-block",
                    opacity: 1,
                    y: "0px",
                  }}
                  exit={{
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    },
                    opacity: 0,
                  }}
                  transition={{
                    display: {
                      delay: 0,
                    },
                    opacity: {
                      delay: 0.6,
                      duration: 1,
                    },
                    y: {
                      delay: 0.7,
                      duration: 1,
                    },
                  }}
                  class="fa-brands fa-github fa-2xl"
                ></motion.i>
              </a>
              <a href="tel:+12035511566">
                <motion.i
                  initial={{
                    display: "none",
                    opacity: 0,
                    y: "-5px",
                  }}
                  animate={{
                    display: "inline-block",
                    opacity: 1,
                    y: "0px",
                  }}
                  exit={{
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    },
                    opacity: 0,
                  }}
                  transition={{
                    display: {
                      delay: 0,
                    },
                    opacity: {
                      delay: 0.8,
                      duration: 1,
                    },
                    y: {
                      delay: 0.9,
                      duration: 1,
                    },
                  }}
                  class="fa-solid fa-square-phone-flip fa-2xl"
                ></motion.i>
              </a>
            </motion.div>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};
