import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Resume from "../resume/Resume";

import "./home.css"

const Home = ({ dark }) => {
  return (
    <div className="home">
      <About dark={dark} />
      <Resume dark={dark} />
      <Contact dark={dark} />
    </div>
  );
};

export default Home;
