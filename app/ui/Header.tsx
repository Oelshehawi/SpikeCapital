import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./buttons";

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
      transition: { duration: 0.5, ease: "easeInOut", delay: 3 },
    },
  };

  return (
    <div className="flex max-h-10 justify-center p-5">
      <motion.div
        className={`${isScrolled ? "rounded-full bg-transparent backdrop-blur-md transition-all" : "backdrop-blur-md"} w-full fixed flex md:w-3/4 items-center justify-between rounded p-4 `}
        animate={controls}
        initial={{
          y: -20,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="flex items-center">
          <motion.span
            className="md:ml-3 text-md font-bold md:text-2xl"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            LeadSpike
          </motion.span>
          <motion.div
            className=""
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/leadspike-arrow.png"
              alt="Arrow"
              width={40}
              height={40}
              className="object-contain"
            />
          </motion.div>
        </div>
        <Button className="animate-bloop justify-end font-bold md:mr-3 ">
          Book a Call
        </Button>
      </motion.div>
    </div>
  );
}