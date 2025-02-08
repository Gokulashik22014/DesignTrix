import React from "react";
import Content from "../layout/Content";
import About from "./About";
import AboutCollege from "./AboutCollege";
import Images from "./Images";
const App = () => {
  return (
    <Content>
      <About/>
      <AboutCollege/>
      <Images/>
    </Content>
  );
};

export default App;
