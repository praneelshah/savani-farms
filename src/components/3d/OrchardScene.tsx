import { Canvas } from "@react-three/fiber";
import { Float, Environment, Cloud, Stars } from "@react-three/drei";
import MangoModel from "./MangoModel";
import { Suspense } from "react";

interface OrchardSceneProps {
  className?: string;
}

const Tree = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 2, 8]} />
        <meshStandardMaterial color="#5D4037" roughness={0.9} />
      </mesh>
      {/* Canopy */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial color="#2E7D32" roughness={0.7} />
      </mesh>
      {/* Mangoes on tree */}
      <Float speed={2} rotationIntensity={0.2}>
        <MangoModel position={[0.5, 2.2, 0.3]} scale={0.15} />
      </Float>
      <Float speed={1.5} rotationIntensity={0.3}>
        <MangoModel position={[-0.4, 2.5, -0.2]} scale={0.12} color="#FF8C00" />
      </Float>
    </group>
  );
};

const Ground = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
    <planeGeometry args={[50, 50]} />
    <meshStandardMaterial color="#8BC34A" roughness={1} />
  </mesh>
);

const OrchardScene = ({ className = "" }: OrchardSceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 3, 8], fov: 60 }} shadows>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 15, 5]} 
            intensity={1.2} 
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          
          <Ground />
          
          {/* Trees */}
          <Tree position={[-3, 0, -2]} />
          <Tree position={[0, 0, -4]} />
          <Tree position={[3, 0, -1]} />
          <Tree position={[-1.5, 0, 1]} />
          <Tree position={[2, 0, 2]} />
          
          {/* Floating mangoes */}
          <Float speed={1} rotationIntensity={0.5}>
            <MangoModel position={[-2, 1.5, 2]} scale={0.3} />
          </Float>
          <Float speed={1.2} rotationIntensity={0.4}>
            <MangoModel position={[2.5, 2, 1]} scale={0.25} color="#FFB347" />
          </Float>
          
          <Cloud position={[-5, 8, -10]} speed={0.2} opacity={0.5} />
          <Cloud position={[5, 10, -15]} speed={0.1} opacity={0.4} />
          
          <Stars radius={100} depth={50} count={1000} factor={4} fade />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default OrchardScene;
