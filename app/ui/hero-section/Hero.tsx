import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../buttons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 3.2, duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 3.2, ease: "easeInOut", duration: 0.8 },
    },
  };

  const bounceVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 3.2,
      },
    },
  };

  return (
    <motion.div
      className="mx-4 my-5 flex flex-col items-center justify-center rounded-lg py-10 text-center text-white sm:mx-10 md:mx-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <h1 className="mb-5 w-full text-3xl font-bold sm:w-3/4 md:text-5xl">
          {
            "We Install & Operate Outbound Client Acquisition Systems that Guarantee 10-25 Qualified Calls Per Month"
          }
          <span className="mt-3 block text-xl md:text-2xl">
            {" (or you don't pay)"}
          </span>
        </h1>
        <p className="text-gray mb-10 font-bold">
          {
            "We help B2B businesses scale by providing qualified calls straight to your calendar."
          }
        </p>
      </motion.div>

      <motion.div
        className="shadow-cool bg-splatter-gradient mb-8 overflow-hidden rounded-lg p-1"
        variants={bounceVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Video Container with Gradient Background */}
        <iframe
          src="https://play.vidyard.com/UHc59rkrrssowmsfqhF7mz.html"
          title="LeadSpike Video"
          allowFullScreen
          className=" aspect-video w-full md:h-96"
        ></iframe>
      </motion.div>

      {/* Call to Action Button */}
      <Button className="animate-bloop z-0 rounded-lg bg-blue-700 px-6 py-3 text-lg font-bold md:mx-5">
        Book a Call
      </Button>
    </motion.div>
  );
}