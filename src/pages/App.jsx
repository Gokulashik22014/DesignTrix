import React, { useEffect, useState } from "react";
import Content from "../layout/Content";
import Home from "./Home";
import AboutCollege from "./AboutCollege";
import Images from "./Images";
import Events from "./Events";
import Lenis from "@studio-freight/lenis/types";
import ContactUs from "./ContactUs";
import MouseEffect from "../components/MouseEffect";
const App = () => {
  const [hovered,setHovered]=useState(false)
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
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <MouseEffect hovered={hovered}/>
      </div>
      <Home />
      <AboutCollege />
      <Images />
      <Events />
      <ContactUs />
    </Content>
  );
};

export default App;
