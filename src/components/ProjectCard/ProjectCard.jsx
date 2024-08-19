import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  const {
    projectName,
    projectNumber,
    technologies,
    description,
    info,
    handleMoreInfoClick,
    handleLessInfoClick,
  } = props;

  useEffect(() => {}, [info]);

  if (info === "coll") {
    return (
      <>
        <div
          id={`card${projectNumber}`}
          onClick={handleMoreInfoClick}
          className="card-container-collapsed"
        >
          <motion.h2
            initial={{
              opacity: 0,
              transform: "translateY(-5px)",
              display: "none",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
              display: "flex",
            }}
            transition={{ delay: 0.5 }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="card-header-collaped"
          >
            {projectName}
          </motion.h2>
        </div>
      </>
    );
  } else if (info === "gen") {
    return (
      <>
        <div className="card-container">
          <div className="card-image-placeholder"></div>
          <motion.h2
            initial={{
              opacity: 0,
              transform: "translateX(5px)",
              display: "none",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
              display: "flex",
            }}
            transition={{ delay: 0.2 }}
          >
            {projectName}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              transform: "translateX(5px)",
              display: "none",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
              display: "flex",
            }}
            transition={{ delay: 0.6 }}
          >
            Technology utilized:
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(5px)",
              display: "none",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
              display: "flex",
            }}
            transition={{ delay: 0.6 }}
            className="tech-stack-container"
          >
            {technologies.map((tech) => {
              return <div className="tech-stack-floater">{tech}</div>;
            })}
          </motion.div>
          <button
            id={`card${projectNumber}`}
            onClick={
              info === "more" ? handleLessInfoClick : handleMoreInfoClick
            }
            className="floating-button"
          >
            Show more
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card-container-expanded">
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateY(5px)",
              display: "none",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
              display: "flex",
            }}
            transition={{ delay: 0.3 }}
            className="expanded-card-top-container"
          >
            <div className="expanded-card-image-placeholder"></div>
            <div className="expanded-card-header-container">
              <h2>{projectName}</h2>
              <p>Technology utilized:</p>
              <div className="tech-stack-container">
                {technologies.map((tech) => {
                  return <div className="tech-stack-floater">{tech}</div>;
                })}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(5px)",
              display: "none",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
              display: "flex",
            }}
            transition={{ delay: 1 }}
            className="expanded-card-bottom-container"
          >
            <h3 style={{ fontWeight: "bold" }}>Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis soluta quae perspiciatis rem laborum voluptatibus quos
              fuga perferendis exercitationem, itaque a nesciunt repellat
              quibusdam pariatur modi et voluptate rerum voluptas. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Mollitia corrupti
              molestias laboriosam, illum expedita architecto molestiae eaque
              alias blanditiis quam et, fugiat, accusantium in dolorem nesciunt
              sit. Corrupti, facere modi.
            </p>
          </motion.div>
          <button
            id={`card${projectNumber}`}
            onClick={
              info === "more" ? handleLessInfoClick : handleMoreInfoClick
            }
            className="floating-button"
          >
            Show less
          </button>
        </div>
      </>
    );
  }
}
