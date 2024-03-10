import { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedBackground = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
      className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-[white]"
    >
      <AnimatePresence>{showText && <AnimatedText />}</AnimatePresence>
    </motion.div>
  );
};

export default AnimatedBackground;
