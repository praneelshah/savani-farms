import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";

interface ScrollingMangoProps {
  scrollProgress: number;
}

const ScrollingMango = ({ scrollProgress }: ScrollingMangoProps) => {
  const meshRef = useRef<THREE.Group>(null);
  const targetPosition = useRef({ x: -10, y: 0, z: 0 });
  const targetRotation = useRef({ x: 0, y: 0, z: 0 });
  
  const { scene } = useGLTF("/models/mango.glb");

  useFrame(() => {
    if (meshRef.current) {
      // Calculate target position based on scroll progress
      // X: Move from left (-10) to right (+10)
      const targetX = -10 + scrollProgress * 20;
      
      // Y: Sine wave for up-and-down weaving
      const targetY = Math.sin(scrollProgress * Math.PI * 2) * 1.5;
      
      // Z: Depth wave for 3D depth effect
      const targetZ = Math.sin(scrollProgress * Math.PI * 3) * 2;
      
      // Update target positions
      targetPosition.current.x = targetX;
      targetPosition.current.y = targetY;
      targetPosition.current.z = targetZ;
      
      // Smooth lerp interpolation for natural movement
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        targetPosition.current.x,
        0.1
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetPosition.current.y,
        0.1
      );
      meshRef.current.position.z = THREE.MathUtils.lerp(
        meshRef.current.position.z,
        targetPosition.current.z,
        0.1
      );
      
      // Calculate target rotation based on scroll
      targetRotation.current.y = scrollProgress * Math.PI * 4;
      targetRotation.current.z = Math.sin(scrollProgress * Math.PI * 2) * 0.5;
      targetRotation.current.x = Math.cos(scrollProgress * Math.PI * 2) * 0.3;
      
      // Smooth rotation lerp
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotation.current.y,
        0.1
      );
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        targetRotation.current.z,
        0.1
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotation.current.x,
        0.1
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef} position={[-10, 0, 0]} scale={[5, 5, 5]}>
        <primitive object={scene.clone()} />
      </group>
    </Float>
  );
};

// Preload the model
useGLTF.preload("/models/mango.glb");

export default ScrollingMango;
