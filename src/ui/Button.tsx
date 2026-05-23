import { motion } from "framer-motion";
import React, { useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface ButtonProps {
  children: React.ReactNode;
  roundedFull?: boolean;
  size?: "small" | "large";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, roundedFull, size, onClick }: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <motion.button
      onClick={handleRipple}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className={`relative overflow-hidden bg-blue-600 text-white font-sans ${
        roundedFull ? "rounded-full" : "rounded-lg"
      } ${
        size === "small" ? "py-1.5 font-light text-sm" : "font-semibold py-3 px-2"
      } shadow-sm transition duration-300 hover:bg-blue-750 w-40 cursor-pointer`}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute bg-white/40 rounded-full pointer-events-none"
          style={{
            width: 20,
            height: 20,
            left: ripple.x - 10,
            top: ripple.y - 10,
          }}
        />
      ))}
    </motion.button>
  );
}

export default Button;
