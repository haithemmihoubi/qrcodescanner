import { motion } from "framer-motion";


const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0}}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: .35,
        duration: 1
      }}
      exit={{ scale: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;