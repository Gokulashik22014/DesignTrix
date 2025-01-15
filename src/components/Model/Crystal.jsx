import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export function Crystal(props) {
  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.1;
    }
  });
  const { nodes, materials } = useGLTF("/models/crystal.glb");
  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ctystal_L_lambert1_0.geometry}
        material={materials.lambert1}
        scale={props.scale}
      />
    </group>
  );
}

useGLTF.preload("/models/crystal.glb");
