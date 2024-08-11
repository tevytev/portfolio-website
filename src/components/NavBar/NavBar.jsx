import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <header className="fg" id="nav-header">
        <div className="nav-logo-container">
          <div className="nav-logo">
            <p>TC</p>
          </div>
        </div>
        <nav id="desktop-nav">
          <NavLink className="active-nav" to={"/home"}>
            Home
          </NavLink>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
          <NavLink to={"/about"}>About me</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </nav>
      </header>
    </>
  );
}
