import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollLockOptions {
  sectionRef: React.RefObject<HTMLElement>;
  onProgress?: (progress: number) => void;
}

export const useScrollLock = ({ sectionRef, onProgress }: UseScrollLockOptions) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

    // Create ScrollTrigger for pinning
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);
        onProgress?.(progress);
      },
    });

    return () => {
      scrollTriggerRef.current?.kill();
    };
  }, [sectionRef, onProgress]);

  return { scrollProgress };
};

export default useScrollLock;
