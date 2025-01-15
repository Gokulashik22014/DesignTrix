import React from "react";
import { Crystal } from "../Model/Crystal";
import { Canvas } from "@react-three/fiber";

const CrystalComponent = () => {
  // Updated positions and sizes for 7 crystals, spread out more
  const crystals = [
    { top: "5%", left: "10%", scale: 0.3 },
    { bottom: "5%", right: "15%", scale: 0.5 },
    { top: "10%", right: "5%", scale: 0.4 },
    { bottom: "15%", left: "20%", scale: 0.6 },
    { top: "20%", left: "60%", scale: 0.7 },
    { top: "30%", right: "10%", scale: 0.5 },
    { bottom: "20%", left: "5%", scale: 0.6 },
    { top: "2%", left: "5%", scale: 0.4 },
    { bottom: "3%", right: "20%", scale: 0.6 },
    { top: "8%", right: "2%", scale: 0.5 },
    { bottom: "25%", left: "15%", scale: 0.7 },
  ];

  return (
    <div className="absolute w-full h-full">
      {crystals.map((crystal, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: crystal.top || "auto",
            bottom: crystal.bottom || "auto",
            left: crystal.left || "auto",
            right: crystal.right || "auto",
          }}
        >
          <Canvas>
            <Crystal scale={[crystal.scale, crystal.scale, crystal.scale]} />
          </Canvas>
        </div>
      ))}
    </div>
  );
};

export default CrystalComponent;
