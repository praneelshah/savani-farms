import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface MangoModelProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  distort?: number;
}

const MangoModel = ({ 
  position = [0, 0, 0], 
  scale = 1, 
  color = "#F5A623",
  speed = 0.3,
  distort = 0.4
}: MangoModelProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.1;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Main mango body */}
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={[scale, scale * 1.3, scale * 0.9]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.3}
          metalness={0.1}
        />
      </Sphere>
      {/* Stem */}
      <mesh position={[0, scale * 1.2, 0]} rotation={[0, 0, Math.PI * 0.1]}>
        <cylinderGeometry args={[0.05 * scale, 0.08 * scale, 0.3 * scale, 8]} />
        <meshStandardMaterial color="#4A7C59" roughness={0.8} />
      </mesh>
      {/* Leaf */}
      <mesh position={[0.1 * scale, scale * 1.35, 0]} rotation={[0, 0, Math.PI * 0.2]}>
        <sphereGeometry args={[0.15 * scale, 8, 8]} />
        <meshStandardMaterial color="#2D5A3D" roughness={0.6} />
      </mesh>
    </group>
  );
};

export default MangoModel;
