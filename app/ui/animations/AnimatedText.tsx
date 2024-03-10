import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedText = () => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      transition: { staggerDirection: -1 },
    },
  };

  const letterVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.4 } },
  };

  const underlineVariants = {
    initial: { width: 0, opacity: 0.5 },
    animate: {
      width: "100%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.span className="flex flex-row text-black">
        {"Spike".split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block text-5xl font-bold"
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
         variants={letterVariants}
        >
          <Image
            src="/leadspike-arrow.png"
            width={50}
            height={50}
            alt="Leadspike-Arrow"
          />{" "}
        </motion.span>
      </motion.span>
      <motion.div
        className="mt-2 h-1 w-full bg-white"
        variants={underlineVariants}
      />
    </motion.div>
  );
};

export default AnimatedText;
