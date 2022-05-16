import React, { useState } from "react";
// components
import Home from "./components/home/Home";

import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [dark, setDark] = useState(true);

  const switchMode = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "dark" : "light"}>
      <SideBar switchMode={switchMode} dark={dark} />
      <Header dark={dark} switchMode={switchMode} />
      <Home dark={dark} />
      <Footer />
    </div>
  );
}
export default App;
