import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  // Load the texture (you can use any public Earth texture URL)
  const [colorMap] = useTexture([
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"
  ]);

  // This hook runs every frame (approx 60fps)
  useFrame((_state, delta) => {
    if (earthRef.current) {
      // Rotate the earth on its Y-axis
      earthRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={earthRef}>
      {/* args: [radius, widthSegments, heightSegments] 
        Higher segments = smoother sphere
      */}
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

export default function Page() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        {/* Adds ambient and directional light so we can see the 3D shape */}
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={3} />
        
        <Earth />
        
        {/* Optional background and controls */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}