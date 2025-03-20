import { useState, useEffect } from "react";
import {
  Outlet,
  NavLink,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Portfolio.css";
import { motion, useAnimate } from "framer-motion";
import ecomImg from "../../assets/ecom-screenshot.png";
import portImg from "../../assets/portfolio-screenshot.png";
import chatImg from "../../assets/chat-screenshot.png";

export default function Portfolio(props) {
  const [projectOneInfo, setProjectOneInfo] = useState("gen");
  const [projectTwoInfo, setProjectTwoInfo] = useState("gen");
  const [projectThreeInfo, setProjectThreeInfo] = useState("gen");

  const [scope, animate] = useAnimate();
  const handleAnimate = async () => {
    animate("#project1", { opacity: 1, y: 0 });
    animate("#project2", { opacity: 1, y: 0 });
    animate("#project3", { opacity: 1, y: 0 });
  };
  useEffect(() => {
    setTimeout(() => {
      handleAnimate();
    }, 300);
  }, []);

  const handleMoreInfoClick = (e) => {
    if (e.target.id === "card1" || e.target.id === 'head1') {
      setProjectOneInfo("more");
      setProjectTwoInfo("coll");
      setProjectThreeInfo("coll");
    } else if (e.target.id === "card2" || e.target.id === 'head2') {
      setProjectTwoInfo("more");
      setProjectOneInfo("coll");
      setProjectThreeInfo("coll");
    } else {
      setProjectThreeInfo("more");
      setProjectOneInfo("coll");
      setProjectTwoInfo("coll");
    }
  };

  const handleLessInfoClick = (e) => {
    if (e.target.id === "card1") {
      setProjectOneInfo("gen");
      setProjectTwoInfo("gen");
      setProjectThreeInfo("gen");
    } else if (e.target.id === "card2") {
      setProjectTwoInfo("gen");
      setProjectOneInfo("gen");
      setProjectThreeInfo("gen");
    } else {
      setProjectThreeInfo("gen");
      setProjectOneInfo("gen");
      setProjectTwoInfo("gen");
    }
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
            My <span className="text-stroke">Portfolio</span>
            <span style={{ color: "#1E61D2" }}>.</span>
          </motion.h1>
        </div>
        <section ref={scope} className="project-section">
          <ProjectCard
            id={"project1"}
            projectName={"Full Stack E-commerce App"}
            projectImg={ecomImg}
            projectNumber={"1"}
            description={
              "Hello! I'm excited to introduce my first full-stack application, which I’m really proud of. It’s an athletic apparel eCommerce website built with an Express.js backend and a React.js frontend. Key features include user authentication with OAuth 2.0 for Google Sign-In, as well as real-time data persistence that allows users to create a cart and customize their wishlist. I’d love for you to check it out and let me know what you think!"
            }
            technologies={[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Express.js",
              "Passport",
              "Node.js",
              "OAuth 2.0",
              "Postgresql",
              "Sequalize",
              "Tailwind",
              "Axios",
              "Vite",
            ]}
            projectLink="https://www.tevdev-ecommerce.com/"
            info={projectOneInfo}
            handleMoreInfoClick={handleMoreInfoClick}
            handleLessInfoClick={handleLessInfoClick}
          ></ProjectCard>
          <ProjectCard
            id={"project2"}
            projectName={"Portfolio Website"}
            projectImg={portImg}
            projectNumber={"2"}
            description={
              "Welcome to my portfolio! This website was built using HTML, CSS, JavaScript, and React.js. My goal was to create a balanced and intuitive design that combines both UI and UX principles. The color scheme features effective contrast while maintaining harmonious cohesion. Each page consistently incorporates angular design elements for a clean, modern look. The navigation links follow a logical progression based on user interests, streamlining the browsing experience."
            }
            technologies={[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Vite",
              "Framer Motion",
              "Figma",
            ]}
            projectLink="http://localhost:5173/home"
            info={projectTwoInfo}
            handleMoreInfoClick={handleMoreInfoClick}
            handleLessInfoClick={handleLessInfoClick}
          ></ProjectCard>
          <ProjectCard
            id={"project3"}
            projectName={"FamilyFirst: A Real-time Family Chat App"}
            projectImg={chatImg}
            projectNumber={"3"}
            description={
              "FamilyFirst is a real-time, family-oriented chat app designed to help families stay connected and in tune with each other's well-being. Built with a React.js frontend and a Express.js backend, it features a family group chat, private one-on-one chats, and the ability to share emotional and activity statuses, fostering meaningful connections. Originally created for my own family, this app aims to make it easier for families to stay linked in today’s fast-paced world."
            }
            technologies={[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Express.js",
              "JWT",
              "Socket.io",
              "MongoDB",
              "Mongoose",
              "Axios",
              "Vite",
              "Figma",
              "Cloudinary"
            ]}
            projectLink="https://real-time-chat-app-rwiy.onrender.com/register"
            info={projectThreeInfo}
            handleMoreInfoClick={handleMoreInfoClick}
            handleLessInfoClick={handleLessInfoClick}
          ></ProjectCard>
        </section>
      </main>
    </>
  );
}
