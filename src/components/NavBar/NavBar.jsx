import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavBar.css";

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
          <div className="nav-logo">
            <p>TC</p>
          </div>
        </div>
        <nav onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0
          }))
        }} 
        id="desktop-nav">
          <Cursor position={position} />
          <Tab setPosition={setPosition} link={'/home'}>Home</Tab>
          <Tab setPosition={setPosition} link={'/portfolio'}>Portfolio</Tab>
          <Tab setPosition={setPosition} link={'/about'}>About me</Tab>
          <Tab setPosition={setPosition} link={'/contact'}>Contact</Tab>
        </nav>
      </header>
    </>
  );
}

const Tab = ({children, link, setPosition}) => {
  const ref = useRef(null);
  return (
    <>
      <NavLink
        ref={ref}
        onMouseEnter={() => {
          if (!ref.current) return;
          const {width} = ref.current.getBoundingClientRect();
          setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft
          }) 
        }}
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            background: isActive ? "rgb(217, 217, 217)" : "",
            background: isActive
              ? "linear-gradient(0deg,rgba(217, 217, 217, 15%) 0%,rgba(115, 115, 115, 15%) 100%)"
              : "",
            borderRadius: isActive ? "150px" : "",
          };
        }}
        to={link}
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
