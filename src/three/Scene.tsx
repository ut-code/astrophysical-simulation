// src/three/Scene.tsx
import React from "react";

type SceneProps = {
  color: string;
};

const Scene: React.FC<SceneProps> = ({ color }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

export default Scene;
