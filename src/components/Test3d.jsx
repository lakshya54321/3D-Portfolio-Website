import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Material } from "three";

const Test3d = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Canvas>
        <mesh>
          <Sphere args={[1, 50, 100]} scale={2.4}>
            {/*<meshStandardMaterial color="red"/>*/}
            <MeshDistortMaterial
              color="#DB8B9B"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          <ambientLight intensity={2} />
          <directionalLight position={[1, 2, 3]} />
          {/* <OrbitControls enableZoom={true} zoomSpeed={0.5} enablePan={true}  panSpeed={0.8} rotateSpeed={0.8}/> */}
        </mesh>
      </Canvas>
    </section>
  );
};

export default Test3d;
