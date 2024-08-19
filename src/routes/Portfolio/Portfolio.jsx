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

export default function Portfolio(props) {
  const [projectOneInfo, setProjectOneInfo] = useState('gen');
  const [projectTwoInfo, setProjectTwoInfo] = useState('gen');
  const [projectThreeInfo, setProjectThreeInfo] = useState('gen');

  const handleMoreInfoClick = (e) => {
    
    if (e.target.id === "card1") {
      setProjectOneInfo('more');
      setProjectTwoInfo('coll');
      setProjectThreeInfo('coll');
    } else if (e.target.id === "card2") {
      setProjectTwoInfo('more');
      setProjectOneInfo('coll');
      setProjectThreeInfo('coll');
    } else {
      setProjectThreeInfo('more');
      setProjectOneInfo('coll');
      setProjectTwoInfo('coll');
    }
  };

  const handleLessInfoClick = (e) => {
    if (e.target.id === "card1") {
      setProjectOneInfo('gen');
      setProjectTwoInfo('gen');
      setProjectThreeInfo('gen');
    } else if (e.target.id === "card2") {
      setProjectTwoInfo('gen');
      setProjectOneInfo('gen');
      setProjectThreeInfo('gen');
    } else {
      setProjectThreeInfo('gen');
      setProjectOneInfo('gen');
      setProjectTwoInfo('gen');
    }
  }

  return (
    <>
      <main className="fg portfolio-container">
        <div className="portfolio-header-container">
          <h1>
            My Portfolio<span style={{ color: "#cf2447" }}>.</span>
          </h1>
        </div>
        <section className="project-section">
          <ProjectCard
            projectName={"Full-stack E-commerce App"}
            projectNumber={'1'}
            technologies={["HTML", "CSS", "Javascript", "React", "Express.js", "Node.js", "OAuth 2.0", "Postgresql", "Sequalize", "Tailwind", "Axios", "Vite"]}
            info={projectOneInfo}
            handleMoreInfoClick={handleMoreInfoClick}
            handleLessInfoClick={handleLessInfoClick}
          ></ProjectCard>
          <ProjectCard
            projectName={"Second Project"}
            projectNumber={'2'}
            technologies={["HTML", "CSS", "Javascript", "React", "Express.js", "Node.js", "OAuth 2.0", "Postgresql", "Sequalize", "Tailwind", "Axios", "Vite"]}
            info={projectTwoInfo}
            handleMoreInfoClick={handleMoreInfoClick}
            handleLessInfoClick={handleLessInfoClick}
          ></ProjectCard>
          <ProjectCard
            projectName={"Third Project"}
            projectNumber={'3'}
            technologies={["HTML", "CSS", "Javascript", "React", "Express.js", "Node.js", "OAuth 2.0", "Postgresql", "Sequalize", "Tailwind", "Axios", "Vite"]}
            info={projectThreeInfo}
            handleMoreInfoClick={handleMoreInfoClick}
            handleLessInfoClick={handleLessInfoClick}
          ></ProjectCard>
        </section>
      </main>
    </>
  );
}
