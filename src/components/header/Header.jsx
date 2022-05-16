import React from "react";
import Button from "../button/Button";
import NavBar from "../nav/NavBar";
import Social from "../social/Social";
import logo from "../../imgs/headerImg.png";
import "./header.css";

const Header = ({ dark, switchMode }) => {
  return (
    <div className="header-container">
      <NavBar dark={dark} switchMode={switchMode} />
      <div className="header">
        <div className="header-text">
          <p className="p1">👸 Hello,</p>
          <p className="p2"> I'm Aisha Akinbani </p>
          <p className="p3">
            I am a <span className="job">WRITER 📝</span>
          </p>
          <Social />
          <div>
            <Button bgColor='' text={"Hire Me"} />
            <Button text={"Get Resume"} />
          </div>
        </div>
        <div className="header-img-container">
          <div className="header-img"></div>
        </div>
        {/* <img src={logo} className="header-img" alt="LOGO" /> */}
      </div>
      <div className="curvediv">
        <svg
          version="1.1"
          width="100%"
          height="200px"
          id="svgCurve"
          preserveAspectRatio="none"
          viewBox="0 0 1440 560"
        >
          <g mask='url("#SvgjsMask1377")' fill="none">
            <path
              d="M 0,69 C 96,122.6 288,309.8 480,337 C 672,364.2 768,180.2 960,205 C 1152,229.8 1344,409.8 1440,461L1440 560L0 560z"
              fill={dark ? "var(--bg-dark)" : "var(--bg-light)"}
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1377">
              <rect width="100%" height="560" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Header;
