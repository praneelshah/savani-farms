import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import MangoModel from "./MangoModel";
import { Suspense } from "react";

interface FloatingMangoesProps {
  count?: number;
  className?: string;
  interactive?: boolean;
}

const FloatingMangoes = ({ count = 3, className = "", interactive = false }: FloatingMangoesProps) => {
  const mangoColors = ["#F5A623", "#FF8C00", "#FFB347", "#E8A317", "#FFA500"];
  
  const mangoes = Array.from({ length: count }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 2
    ] as [number, number, number],
    scale: 0.3 + Math.random() * 0.4,
    color: mangoColors[i % mangoColors.length],
    speed: 0.2 + Math.random() * 0.3,
  }));

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#FFE4B5" />
          
          {mangoes.map((mango, i) => (
            <Float
              key={i}
              speed={1.5}
              rotationIntensity={0.5}
              floatIntensity={1}
            >
              <MangoModel
                position={mango.position}
                scale={mango.scale}
                color={mango.color}
                speed={mango.speed}
              />
            </Float>
          ))}
          
          <Environment preset="sunset" />
          {interactive && <OrbitControls enableZoom={false} enablePan={false} />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingMangoes;
