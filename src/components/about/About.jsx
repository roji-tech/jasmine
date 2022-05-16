import React from "react";
import Button from "../button/Button";
import logo from "../../imgs/kotlin.png";
import "./about.css";
import UnderStroke from "../UnderStroke/UnderStroke";

const About = ({dark}) => {
  return (
    <div className="about-wrap">
      <div className="about">
        <h3>About Me</h3>
        <UnderStroke dark={dark} />
        <p>why Choose Me</p>
        <div className="about-content">
          <img src={logo} alt="about pics" className="about-pics" />
          <div className="about-info">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sit
              repellat libero
            </p>
            <div className="about-skills">
              <h4>Here are a Few Highlight</h4>
              <li>Writer</li>
              <li>Publisher</li>
              <li>Social Media Manager</li>
              <li>Content Creator</li>
            </div>
            <div className="get-job-btn">
              <Button fontSize={"large"} text={"Hire Me"} />
              <Button fontSize={"large"} text={"Get Resume"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
