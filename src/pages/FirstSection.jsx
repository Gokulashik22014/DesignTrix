import React from "react";
import CustomDiv from "../components/CustomDiv";
import About from "../components/About/About";
import CuteAnimal from "../components/ModelComponents/CuteAnimal";
import CrystalComponent from "../components/ModelComponents/CrystalComponent";
import CustomBubbleText from "../components/CustomBubbleText";
import TitleAnimation from "../components/TitleAnimation";
import SplitText from '../components/SplitText'
const FirstSection = () => {
  return (
    <div className="w-full">
      <SplitText text="DesignTrix 2025" className="text-5xl w-full h-full text-white-900" />
      <div className="w-full flex flex-row">
        <About />
        {/* 3D Carousal with Cute Animal */}
        <div className="relative w-1/2 flex items-center justify-center">
          <CuteAnimal />
          
          <div className="absolute w-full h-full flex items-center justify-center -z-[3]">
            
            <CrystalComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
