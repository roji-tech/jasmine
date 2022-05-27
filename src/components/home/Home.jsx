import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import BackToTop from "../EXTRAS/backtotop/BackToTop";

import "./home.css";

const Home = ({ dark }) => {
  return (
    <div className="home">
      <About dark={dark} />
      <Contact dark={dark} />
      <BackToTop />
    </div>
  );
};

export default Home;
