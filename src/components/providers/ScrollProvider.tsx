import { ReactNode, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

interface ScrollProviderProps {
  children: ReactNode;
}

const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.5, // Increased for smoother animation
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Improved easing function for smoother deceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false, // Keep touch scrolling natural
      touchMultiplier: 1.5, // Reduced from 2 for more control
      infinite: false,
      wheelMultiplier: 1.2, // Enhanced wheel sensitivity
    });

    // Make lenis available globally
    (window as any).__lenis = lenisInstance;

    // Update scroll on animation frame with higher priority
    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Start the animation loop
    requestAnimationFrame(raf);
    
    setLenis(lenisInstance);

    // Add resize handler for smoother experience during window resizing
    const resizeObserver = new ResizeObserver(() => {
      lenisInstance.resize();
    });
    
    resizeObserver.observe(document.body);

    return () => {
      lenisInstance.destroy();
      resizeObserver.disconnect();
      (window as any).__lenis = null;
    };
  }, []);

  return <>{children}</>;
};

export default ScrollProvider;
