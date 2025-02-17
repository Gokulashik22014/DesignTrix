import React, { useEffect } from "react";
import Content from "../layout/Content";
import Home from "./Home";
import AboutCollege from "./AboutCollege";
import Images from "./Images";
import Events from "./Events";
import Lenis from "@studio-freight/lenis/types";
import ContactUs from "./ContactUs";
const App = () => {
  // const location = useLocation();
  // useEffect(() => {
  //   if (location.hash) {
  //     const id = location.hash.replace("#", "");
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [location]);
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
      <Home />
      <AboutCollege />
      <Images />
      <Events />
      <ContactUs />
    </Content>
  );
};

export default App;
