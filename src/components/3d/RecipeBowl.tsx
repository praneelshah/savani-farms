import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import MangoModel from "./MangoModel";
import * as THREE from "three";
import { Suspense } from "react";

const Bowl = () => {
  const bowlRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (bowlRef.current) {
      bowlRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={bowlRef}>
      {/* Bowl */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <meshStandardMaterial color="#E8D5B7" roughness={0.4} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Bowl rim */}
      <mesh position={[0, 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.1, 0.08, 16, 32]} />
        <meshStandardMaterial color="#D4C4A8" roughness={0.3} />
      </mesh>
      
      {/* Contents - fruits */}
      <MangoModel position={[0, 0.3, 0]} scale={0.25} />
      <MangoModel position={[0.4, 0.2, 0.3]} scale={0.2} color="#FF8C00" />
      <MangoModel position={[-0.3, 0.25, 0.2]} scale={0.18} color="#FFB347" />
      
      {/* Some berries/decorations */}
      <mesh position={[0.5, 0.3, -0.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#DC143C" roughness={0.3} />
      </mesh>
      <mesh position={[-0.4, 0.35, -0.3]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#228B22" roughness={0.4} />
      </mesh>
    </group>
  );
};

interface RecipeBowlProps {
  className?: string;
}

const RecipeBowl = ({ className = "" }: RecipeBowlProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 2, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} />
          <pointLight position={[-3, 3, 3]} intensity={0.4} color="#FFE4B5" />
          
          <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
            <Bowl />
          </Float>
          
          <Environment preset="apartment" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RecipeBowl;
