import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

const Leaf = ({ position, speed, rotationSpeed }: { 
  position: [number, number, number]; 
  speed: number;
  rotationSpeed: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed * 0.01;
      meshRef.current.rotation.z += rotationSpeed * 0.005;
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 4, 4]} />
      <meshStandardMaterial color="#4A7C59" roughness={0.6} flatShading />
    </mesh>
  );
};

const Leaves = ({ count = 20 }: { count?: number }) => {
  const leaves = useMemo(() => 
    Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5
      ] as [number, number, number],
      speed: 0.5 + Math.random() * 0.5,
      rotationSpeed: 0.5 + Math.random() * 1,
    })),
    [count]
  );

  return (
    <>
      {leaves.map((leaf, i) => (
        <Leaf key={i} {...leaf} />
      ))}
    </>
  );
};

interface LeafParticlesProps {
  className?: string;
  count?: number;
}

const LeafParticles = ({ className = "", count = 20 }: LeafParticlesProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <Leaves count={count} />
          <Environment preset="forest" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LeafParticles;
