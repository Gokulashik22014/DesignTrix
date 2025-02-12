import React from "react";
import Content from "../layout/Content";
import About from "./About";
import AboutCollege from "./AboutCollege";
import Images from "./Images";
import Event from "./Event";
const App = () => {
  return (
    <Content>
      <About/>
      <AboutCollege/>
      <Images/>
      <Event/>
      <Event/>
    </Content>
  );
};

export default App;
