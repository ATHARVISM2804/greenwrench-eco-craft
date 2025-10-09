import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that scrolls the page to the top when the route changes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Find the Lenis instance
    // If Lenis is not available (e.g., on initial load), fall back to window.scrollTo
    try {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.5, immediate: false });
      } else {
        window.scrollTo(0, 0);
      }
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
