import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

const Jar = () => {
  const jarRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (jarRef.current) {
      jarRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={jarRef}>
      {/* Glass jar body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.7, 2, 32, 1, true]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.1}
          anisotropy={0.3}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#FFE4B5"
          transmissionSampler
        />
      </mesh>
      
      {/* Pulp inside */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.7, 0.6, 1.5, 32]} />
        <meshStandardMaterial 
          color="#FFA500" 
          roughness={0.2}
          metalness={0}
          opacity={0.95}
          transparent
        />
      </mesh>
      
      {/* Lid */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.3, 32]} />
        <meshStandardMaterial color="#B8860B" roughness={0.3} metalness={0.7} />
      </mesh>
      
      {/* Bottom */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.7, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.3}
          color="#FFE4B5"
        />
      </mesh>
    </group>
  );
};

interface PulpJarProps {
  className?: string;
}

const PulpJar = ({ className = "" }: PulpJarProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, 0, -5]} intensity={0.3} color="#FFA500" />
          
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <Jar />
          </Float>
          
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PulpJar;
