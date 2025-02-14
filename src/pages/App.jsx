import React, { useEffect } from "react";
import Content from "../layout/Content";
import About from "./About";
import AboutCollege from "./AboutCollege";
import Images from "./Images";
import Events from "./Events";
import Lenis from "@studio-freight/lenis/types";
const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <Content>
      <About />
      <AboutCollege />
      <Images />
      <Events/>
      
      <div>
        <h1>Contact US</h1>
      </div>
    </Content>
  );
};

export default App;
