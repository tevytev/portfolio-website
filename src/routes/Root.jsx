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
