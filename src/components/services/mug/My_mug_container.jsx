import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { My_mug } from "./My_mug";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";


const My_mug_container = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage  >
          <My_mug />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[0, -1, 2]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default My_mug_container;