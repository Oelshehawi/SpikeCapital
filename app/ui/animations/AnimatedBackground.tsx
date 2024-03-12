import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

const AnimatedBackground = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut", delay: 4 }}
      className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-[#333333]"
    >
      <AnimatePresence>{show ? <AnimatedLogo /> : null}</AnimatePresence>
    </motion.div>
  );
};

export default AnimatedBackground;
