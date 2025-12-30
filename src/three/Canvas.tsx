import { Canvas } from "@react-three/fiber";

type Props = {
  children: React.ReactNode;
};

const ThreeCanvas = ({ children }: Props) => {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 60 }}
      shadows
    >
      {children}
    </Canvas>
  );
};

export default ThreeCanvas;
