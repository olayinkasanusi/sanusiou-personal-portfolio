import { motion } from "framer-motion";

interface IconsProps {
  icon: string;
  tech: string;
}

function Icons({ icon, tech }: IconsProps) {
  return (
    <motion.div
      className="rounded-xl bg-slate-50 border border-slate-200/80 p-4 flex flex-col items-center justify-center gap-2"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.08, borderColor: "#2563EB" }}
      whileTap={{ scale: 0.95 }}
    >
      <span>
        <motion.img
          src={icon}
          alt={tech}
          className="w-10 h-10 object-contain"
          whileHover={{ rotate: 8 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </span>
      <motion.span
        className="font-sans text-xs text-slate-800 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {tech}
      </motion.span>
    </motion.div>
  );
}

export default Icons;
