import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
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
        className='z-20 flex w-full items-center justify-center rounded p-4 md:w-3/4'
      >
        <div className="flex items-center">
          <motion.span
            className="text-md font-bold md:ml-3 md:text-2xl mt-5"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/spike-logo.png"
              alt="Spike Capital Logo"
              width={140}
              height={160}
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
