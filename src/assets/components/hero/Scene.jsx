import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";

function Sphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#38bdf8"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <Sphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}