import { useRef, useState, MouseEvent, ReactNode, ButtonHTMLAttributes } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: ReactNode;
  strength?: number;
}

const MagneticButton = ({ children, strength = 18, className = "", ...rest }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  };

  const onLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.5 }}
      whileTap={{ scale: 0.97 }}
      className={className}
      {...rest}
    >
      <motion.span
        className="inline-flex items-center justify-center"
        animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default MagneticButton;
