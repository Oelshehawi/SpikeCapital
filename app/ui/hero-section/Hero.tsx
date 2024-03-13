import { motion } from "framer-motion";
import { Button } from "../buttons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 5, duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 5, ease: "easeInOut", duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="mt-12 flex flex-col items-center rounded-lg py-10 text-center text-blue md:mb-56 md:ml-44 md:mt-44 md:items-start md:text-nowrap md:text-left"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <h1 className="mb-5 text-3xl font-bold sm:w-3/4 md:text-5xl">
          {"A Modern Approach To Raising Capital."}
        </h1>
        <p className="mb-10 font-bold text-gray">
          {"Connecting you with private and institutional investors."}
        </p>
      </motion.div>
      <div className="flex flex-row ">
        <Button className="px-6 py-3 text-lg font-bold shadow">
          Book a Call
        </Button>
        <Button className="ml-5 bg-white  px-6 py-3 text-lg font-bold shadow">
          Learn More
        </Button>
      </div>
    </motion.div>
  );
}
