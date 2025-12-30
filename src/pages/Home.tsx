import { Leva, useControls } from "leva";
import ThreeCanvas from "@/three/Canvas";
import Scene from "@/three/Scene";

const Home = () => {
  const { color } = useControls({
    color: { value: "orange" }, // 初期値
  });

  return (
    <>
      <Leva />
      <ThreeCanvas>
        <Scene color={color} /> {/* Scene に渡す */}
      </ThreeCanvas>
    </>
  );
};

export default Home;
