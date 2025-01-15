import React from "react";
import Content from "./Content";
import CustomDiv from "../components/CustomDiv";
import About from "../components/About/About";
import CuteAnimal from "../components/ModelComponents/CuteAnimal";
import CrystalComponent from "../components/ModelComponents/CrystalComponent";

const App = () => {
  return (
    <Content>
      <div className="w-full">
        <CustomDiv>
          <h1 className="text-5xl text-white text-center mb-4">
            DesignTrix 2025
          </h1>
        </CustomDiv>
        <div className="w-full flex flex-row">
          <About />
          {/* 3D Carousal with Cute Animal */}
          <div className="relative w-1/2 flex items-center justify-center">
              <CuteAnimal />
            {/* Crystals around the CuteAnimal */}
            <div className="absolute w-full h-full flex items-center justify-center -z-[3]">
              {/* Top Crystal */}
              <CrystalComponent/>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default App;
