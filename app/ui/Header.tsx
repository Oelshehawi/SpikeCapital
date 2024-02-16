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

  return (
    <div className="flex justify-center p-5">
      <motion.div
        className={`${isScrolled ? "rounded-full bg-transparent backdrop-blur-md transition-all" : "backdrop-blur-md"} fixed flex w-3/4 items-center justify-between rounded p-4 `}
        animate={controls}
        initial={{
          y: -20,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <Image
          src="/leadspike.png"
          alt="Logo"
          width={100}
          height={100}
          className="mx-5"
        />
        <Button className="animate-bloop font-bold md:mx-5 ">
          Book a Call
        </Button>
      </motion.div>
    </div>
  );
}
