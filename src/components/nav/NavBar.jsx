import React from "react";
import SwitchBgMode from "../EXTRAS/switchBgMode/SwitchBgMode";
import logo from "../../imgs/kotlin.png";
import "./navBar.css";

const NavBar = ({ dark, switchMode }) => {
  return (
    <div className="navbar">
 
      <SwitchBgMode dark={dark} switchMode={switchMode} />
      <div className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Testimonies</li>
        <li className="nav-link">Contact</li>
      </div>
    </div>
  );
};

export default NavBar;
