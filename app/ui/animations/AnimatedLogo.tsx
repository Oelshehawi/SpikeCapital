import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedLogo = () => {
  const logoVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        yoyo: Infinity, 
        ease: "easeInOut"
      },
    },
  };

  return (
    <motion.div
      className="flex h-screen items-center justify-center"
      initial="initial"
      animate="animate"
    >
      <motion.div variants={logoVariants}>
        <Image
          src="/spike-logo"
          width={150} 
          height={150} 
          alt="Spike Logo"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;