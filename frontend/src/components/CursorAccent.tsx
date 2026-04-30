import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const CursorAccent = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });
  const [enabled, setEnabled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    // disable on touch devices
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y, reduce]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[55] mix-blend-screen"
      style={{
        x: sx,
        y: sy,
        background: "radial-gradient(circle, rgba(0,229,255,0.6) 0%, rgba(167,139,250,0.3) 40%, transparent 70%)",
        filter: "blur(8px)",
      }}
    />
  );
};

export default CursorAccent;
