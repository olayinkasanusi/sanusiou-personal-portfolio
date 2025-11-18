import { motion } from "framer-motion";
import { useState } from "react";

function Button({ children, roundedFull, size, onClick }) {
  const [ripples, setRipples] = useState([]);

  const handleRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
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
      className={`relative overflow-hidden bg-[#007bff] text-white font-raleway ${
        roundedFull ? "rounded-full" : "rounded-lg"
      } ${
        size === "small"
          ? "py-1.5 font-light text-sm"
          : "font-semibold py-3 px-2"
      } shadow-lg transition duration-300 border border-white hover:bg-[#125aa7] w-40`}
    >
      {children}

      {/* Ripple elements */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute bg-white rounded-full pointer-events-none"
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
