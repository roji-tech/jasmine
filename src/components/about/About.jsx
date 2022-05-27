import React from "react";
import Button from "../button/Button";
import abtPics from "../../imgs/abt-img.png";
import { AboutWrap, AboutHead, AboutPics } from "./aboutStyle";
import UnderStroke from "../EXTRAS/UnderStroke/UnderStroke";
// import "./about.css";

const About = () => {
  return (
    <AboutWrap>
      <div className="about">
        <AboutHead className="head">About Me</AboutHead>
        <UnderStroke />
        <p>why Choose Me</p>
        <div className="about-content">
          <AboutPics>
            <div className="about-pics__div">
              <img src={abtPics} alt="about pics" className="about-pics" />
            </div>
          </AboutPics>
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
    </AboutWrap>
  );
};

export default About;

// import React from "react";
// import Button from "../button/Button";
// import logo from "../../imgs/kotlin.png";
// import "./about.css";
// import UnderStroke from "../EXTRAS/UnderStroke/UnderStroke";

// const About = () => {
//   return (
//     <div className="about-wrap">
//       <div className="about">
//         <h3>About Me</h3>
//         <UnderStroke />
//         <p>why Choose Me</p>
//         <div className="about-content">
//           <div className="about-pics-container">
//             <div className="about-pics__div">
//               <img src={logo} alt="about pics" className="about-pics" />
//             </div>
//           </div>
//           <div className="about-info">
//             <p>
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sit
//               repellat libero
//             </p>
//             <div className="about-skills">
//               <h4>Here are a Few Highlight</h4>
//               <li>Writer</li>
//               <li>Publisher</li>
//               <li>Social Media Manager</li>
//               <li>Content Creator</li>
//             </div>
//             <div className="get-job-btn">
//               <Button fontSize={"large"} text={"Hire Me"} />
//               <Button fontSize={"large"} text={"Get Resume"} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
