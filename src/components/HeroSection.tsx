import { useRef, Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { useScrollLock } from "@/hooks/useScrollLock";
import ScrollingMango from "@/components/3d/ScrollingMango";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollProgress } = useScrollLock({ sectionRef });

  // Calculate dynamic colors based on scroll progress
  const colors = useMemo(() => {
    // Background: cream to leaf green
    const bgLightness = 97 - scrollProgress * 72; // 97% to 25%
    const bgSaturation = scrollProgress * 45; // 0% to 45%
    const bgHue = 120 - scrollProgress * 30; // 120 to 90
    
    // SAVANI text: dark to white
    const savaniLightness = 15 + scrollProgress * 85; // 15% to 100%
    
    // Taglines: gray to white
    const taglineLightness = 40 + scrollProgress * 60; // 40% to 100%
    
    // Orb opacity
    const orbOpacity = 0.2 + scrollProgress * 0.4;

    return {
      background: `hsl(${bgHue}, ${bgSaturation}%, ${bgLightness}%)`,
      savani: `hsl(0, 0%, ${savaniLightness}%)`,
      farms: `hsl(45, 92%, 50%)`, // Always gold
      tagline: `hsl(0, 0%, ${taglineLightness}%)`,
      orbOpacity,
    };
  }, [scrollProgress]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Decorative blurred glowing orbs */}
      <div
        className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full blur-3xl animate-pulse"
        style={{
          background: `radial-gradient(circle, hsla(42, 100%, 50%, ${colors.orbOpacity}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute -right-32 top-1/3 h-[350px] w-[350px] rounded-full blur-3xl animate-pulse"
        style={{
          background: `radial-gradient(circle, hsla(30, 100%, 50%, ${colors.orbOpacity}) 0%, transparent 70%)`,
          animationDelay: "0.5s",
        }}
      />
      <div
        className="absolute bottom-20 left-1/4 h-[300px] w-[300px] rounded-full blur-3xl animate-pulse"
        style={{
          background: `radial-gradient(circle, hsla(145, 50%, 40%, ${colors.orbOpacity}) 0%, transparent 70%)`,
          animationDelay: "1s",
        }}
      />

      {/* Content Container */}
      <div className="relative flex h-full w-full flex-col items-center justify-center px-4">
        {/* Top Tagline - z-10 (behind mango) */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mb-4 font-sans text-sm font-semibold uppercase tracking-[0.4em] md:text-base"
          style={{ color: colors.tagline }}
        >
          Nature's Finest Mangoes
        </motion.p>

        {/* SAVANI Text - z-30 (in front of mango) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-30 font-serif font-black leading-none tracking-tight"
          style={{
            fontSize: "clamp(4rem, 16vw, 18rem)",
            color: colors.savani,
            textShadow: "0 4px 30px rgba(0,0,0,0.1)",
          }}
        >
          SAVANI
        </motion.h1>

        {/* FARMS Text - z-10 (behind mango) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 -mt-4 font-serif font-black leading-none tracking-tight md:-mt-8 lg:-mt-12"
          style={{
            fontSize: "clamp(4rem, 16vw, 18rem)",
            color: colors.farms,
            textShadow: "0 4px 30px rgba(0,0,0,0.15)",
          }}
        >
          FARMS
        </motion.h1>

        {/* Bottom Tagline - z-30 (in front of mango) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-30 mt-6 max-w-xl text-center font-sans text-base font-medium md:text-lg lg:text-xl"
          style={{ color: colors.tagline }}
        >
          Premium tropical mangoes, handpicked at peak ripeness
        </motion.p>
      </div>

      {/* 3D Mango Canvas - z-20 (middle layer) */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            {/* Lighting Setup */}
            <ambientLight intensity={0.6} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1.2}
              castShadow
              color="#fff8e7"
            />
            <pointLight position={[-5, -5, -5]} intensity={0.5} color="#FFE4B5" />
            <spotLight
              position={[0, 10, 0]}
              angle={0.3}
              penumbra={1}
              intensity={0.8}
              color="#FFA500"
            />

            {/* Scrolling Mango */}
            <ScrollingMango scrollProgress={scrollProgress} />

            {/* Environment */}
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 - scrollProgress }}
        className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: colors.tagline }}
          >
            Scroll to explore
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.tagline}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
