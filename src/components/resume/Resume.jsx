import React from "react";
import UnderStroke from "../UnderStroke/UnderStroke";

import "./resume.css";

const Resume = ({ dark }) => {
  return (
    <div className="resume-container">
      <h3>Resume</h3>
      <UnderStroke dark={dark} />
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="resume">
        <div className="resume-toggle">
          <div className="resume-toggle-icons pseudo-effect">
            <li className="res1">ee</li>
            <li className="res2">ee</li>
            <li className="res3">ee</li>
            <li className="res4">ee</li>
            <li className="res5">ee</li>
          </div>
          <div className="resume-toggle-title">
            <label className="res1 ">
              <input
                type="radio"
                name="resume-title-radio"
                defaultChecked
                id="aaa"
              />
              <li className="pseudo-effect">Education</li>
            </label>
            <label className="res2">
              <input type="radio" name="resume-title-radio" id="" />
              <li className="pseudo-effect">Skills</li>
            </label>
            <label className="res3">
              <input type="radio" name="resume-title-radio" id="" />
              <li className="pseudo-effect">Work History</li>
            </label>

            <label className="res4 ">
              <input type="radio" name="resume-title-radio" id="" />
              <li className="pseudo-effect">Projects</li>
            </label>
            <label className="res5">
              <input type="radio" name="resume-title-radio" id="" />
              <li className="pseudo-effect">Interests</li>
            </label>
          </div>
        </div>
        <div className="resume-content">
          <h4>Education Achievement</h4>
          {/* <embed
            type="file/"
            src="movie.mov"
            width="640"
            height="480"
            title="my resumeo"
          /> */}
          daf Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic non! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Accusamus quas quisquam error ex ipsa. Praesentium dolor ducimus
          eveniet hic Lorem ipsum dolor sit, amet consectetur a
          className="res1"dipisicing elit. Accusamus quas quisquam error ex
          ipsa. Praesentium dolor ducimus eveniet hic Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Accusamus quas quisquam error ex
          ipsa. Praesentium dolor ducimus eveniet hic non! Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Accusamus quas quisquam error
          ex ipsa. Praesentium dolor ducimus eveniet hic non! Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Accusamus quas quisquam error
          ex ipsa. Praesentium dolor ducimus eveniet hic non!
        </div>
      </div>
    </div>
  );
};

export default Resume;
