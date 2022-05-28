import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import BackToTop from "../EXTRAS/backtotop/BackToTop";

import { HomeWrap } from "./homeStyle";

const Home = () => {
  return (
    <HomeWrap>
      <About />
      <Contact />
      <BackToTop />
    </HomeWrap>
  );
};

export default Home;
