import React, { useEffect } from "react";
import Content from "../layout/Content";
import About from "./About";
import AboutCollege from "./AboutCollege";
import Images from "./Images";
import Event from "./Event";
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
      <Event />
      <Event />
    </Content>
  );
};

export default App;
