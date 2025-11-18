import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
    <ambientLight intensity={2} />
          <directionalLight position={[1, 2, 3]} />
    <Sphere args={[1, 50, 100]} scale={2.4}>
            <MeshDistortMaterial
              color="#DB8B9B"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          </>
  );
};

export default Shape