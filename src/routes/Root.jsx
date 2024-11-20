import { useState, useEffect } from "react";
import {
  Outlet,
  NavLink,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./Root.css";

export default function Root(props) {
  const [activeDisplay, setActiveDisplay] = useState("home");

  return (
    <>
      <div id="bg">
        <NavBar />
        <Outlet className="fg" id="fg" />
        {/* <div className="gradient-bg">
          <svg xmlns='https://www.w3.org/2000/svg'>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation='10' result="blur" />
                <feColorMatrix in="blur" mode='matrix' values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2='goo' />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
          </div>
        </div> */}
        <div className="bg floating" id="bg-elipse-1"></div>
        <div className="bg floating" id="bg-elipse-2"></div>
        <div className="bg bg-square-accent floating" id="bg-square-accent-1"></div>
        <div className="bg bg-square-accent floating" id="bg-square-accent-2"></div>
        <div className="bg bg-square-accent floating" id="bg-square-accent-3"></div>
        <div className="bg " id="bg-line-accent-container">
          <div className="bg bg-line-accent floating" id="bg-line-accent-1"></div>
          <div className="bg bg-line-accent floating" id="bg-line-accent-2"></div>
          <div className="bg bg-line-accent floating" id="bg-line-accent-3"></div>
        </div>
      </div>
    </>
  );
}
