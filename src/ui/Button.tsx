import { motion } from "framer-motion";
import React, { useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  roundedFull?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "primary-glass" | "secondary-glass" | "white-glass";
}

function Button({
  children,
  roundedFull,
  size = "medium",
  variant = "primary-glass",
  className = "",
  onClick,
  ...props
}: ButtonProps) {
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

  // Base glassmorphic classes
  const baseClasses = "relative overflow-hidden font-sans font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";

  // Variant glassmorphic definitions
  const variantStyles = {
    "primary-glass": "backdrop-blur-md bg-blue-600/10 hover:bg-blue-600/18 border border-blue-500/25 hover:border-blue-500/50 text-blue-600 shadow-[0_8px_32px_0_rgba(59,130,246,0.06)] hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.15)]",
    "secondary-glass": "backdrop-blur-md bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10 hover:border-slate-900/20 text-slate-800 shadow-[0_8px_32px_0_rgba(15,23,42,0.03)] hover:shadow-[0_8px_32px_0_rgba(15,23,42,0.08)]",
    "white-glass": "backdrop-blur-md bg-white/40 hover:bg-white/55 border border-white/30 hover:border-white/50 text-slate-800 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]",
  };

  // Size styling
  const sizeStyles = {
    small: "py-1.5 px-4 font-medium text-xs w-32",
    medium: "py-2.5 px-6 font-semibold text-sm w-40",
    large: "py-3.5 px-8 font-bold text-base w-48",
  };

  const roundedClass = roundedFull ? "rounded-full" : "rounded-xl";

  return (
    <motion.button
      onClick={handleRipple}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${roundedClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute bg-blue-500/20 rounded-full pointer-events-none z-0"
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

