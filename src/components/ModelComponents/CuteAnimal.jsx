import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Animal from "../Model/Animal";
const CuteAnimal = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} castShadow />
      <Animal position={[0, -1.5, 0]} rotation={[0, Math.PI / 2, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default CuteAnimal;
