import { motion } from "framer-motion";

function Icons({ icon, tech }) {
  return (
    <motion.div
      className="rounded-lg bg-[#242938] px-4 py-2 flex flex-col items-center justify-between"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>
        <motion.img
          src={icon}
          alt={tech}
          className="w-10"
          whileHover={{ rotate: 8 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </span>

      <motion.span
        className="font-raleway text-sm text-gray-100 font-medium"
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
