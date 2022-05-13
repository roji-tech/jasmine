import React from "react";
import logo from "../../imgs/kotlin.png"
import "./navBar.css"

const NavBar = () => {
  return (
    <div>
      <div>
        <img src={logo} className='logo' alt="LOGO" />
        

      </div>
      <div>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </div>
    </div>
  );
};

export default NavBar;
