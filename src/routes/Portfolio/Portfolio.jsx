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

export default function Portfolio(props) {
  const [projectOneInfo, setProjectOneInfo] = useState("gen");
  const [projectTwoInfo, setProjectTwoInfo] = useState("gen");
  const [projectThreeInfo, setProjectThreeInfo] = useState("gen");

  const [scope, animate] = useAnimate();
  const handleAnimate = async () => {
    animate("#project1", {opacity: 1, y: 0})
    animate("#project2", {opacity: 1, y: 0})
    animate("#project3", {opacity: 1, y: 0})
  }
  useEffect(() => {
    setTimeout(() => {
      handleAnimate();
    }, 300);
  }, [])

  const handleMoreInfoClick = (e) => {
    if (e.target.id === "card1") {
      setProjectOneInfo("more");
      setProjectTwoInfo("coll");
      setProjectThreeInfo("coll");
    } else if (e.target.id === "card2") {
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
          transition={{ delay: 0 }}>
            My <span className="text-stroke">Portfolio</span><span style={{ color: "#1E61D2" }}>.</span>
          </motion.h1>
        </div>
        <section 
          ref={scope}
          className="project-section"
        >
          <ProjectCard
            id={'project1'}
            projectName={"Full-stack E-commerce App"}
            projectImg={ecomImg}
            projectNumber={"1"}
            technologies={[
              "HTML",
              "CSS",
              "Javascript",
              "React",
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
            id={'project2'}
            projectName={"Second Project"}
            projectImg={ecomImg}
            projectNumber={"2"}
            technologies={[
              "HTML",
              "CSS",
              "Javascript",
              "React",
              "Express.js",
              "Node.js",
              "OAuth 2.0",
              "Postgresql",
              "Sequalize",
              "Tailwind",
              "Axios",
              "Vite",
            ]}
            info={projectTwoInfo}
            handleMoreInfoClick={handleMoreInfoClick}
            handleLessInfoClick={handleLessInfoClick}
          ></ProjectCard>
          <ProjectCard
            id={'project3'}
            projectName={"Third Project"}
            projectImg={ecomImg}
            projectNumber={"3"}
            technologies={[
              "HTML",
              "CSS",
              "Javascript",
              "React",
              "Express.js",
              "Node.js",
              "OAuth 2.0",
              "Postgresql",
              "Sequalize",
              "Tailwind",
              "Axios",
              "Vite",
            ]}
            info={projectThreeInfo}
            handleMoreInfoClick={handleMoreInfoClick}
            handleLessInfoClick={handleLessInfoClick}
          ></ProjectCard>
        </section>
      </main>
    </>
  );
}
