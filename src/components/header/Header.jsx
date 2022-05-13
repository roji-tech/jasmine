import React from "react";
import NavBar from "../nav/NavBar";
import logo from "../../imgs/kotlin.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-text">
          <p>Hello,</p>
          <p> I'm Aisha Akinbani </p>
          <p>
            I am a <span>WRITER</span>
          </p>
        </div>
        <img src={logo} className="header-img" alt="LOGO" />
      </div>
    </div>
  );
};

export default Header;
