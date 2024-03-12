import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        controls.start({
          y: 0,
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          transition: { duration: 0.1, ease: "easeInOut" },
        });
      } else {
        setIsScrolled(false);
        controls.start({
          y: -20,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.1, ease: "easeInOut" },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const logoVariants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut", delay: 5 },
    },
  };

  return (
    <div className="flex max-h-10 justify-center p-5">
      <motion.div
        className={`${isScrolled ? "z-20 rounded-full backdrop-blur-md transition-all" : "backdrop-blur-md"} fixed z-20 flex w-full items-center justify-center rounded p-4 md:w-3/4 `}
        animate={controls}
        initial={{
          y: -20,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="flex items-center">
          <motion.span
            className="text-md font-bold md:ml-3 md:text-2xl"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/spike-logo.png"
              alt="Spike Capital Logo"
              width={80}
              height={100}
            />
          </motion.span>
          <motion.div
            className=""
            variants={logoVariants}
            initial="initial"
            animate="animate"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
}
