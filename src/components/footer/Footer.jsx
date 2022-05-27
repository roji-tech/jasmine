import React from "react";
import Social from "../social/Social";
import Button from "../button/Button";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Thank You Very Much</p>
      <div className="footer-buttons">
        <Button fontSize="larger" bgColor="" text={"Hire Me"} />
        <Button fontSize="larger" text={"Get Resume"} />
      </div>
      <Social />
    </footer>
  );
};

export default Footer;
