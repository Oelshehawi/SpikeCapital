import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../buttons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 3.2, duration: 0.8 } },
  };

  return (
    <motion.div
      className="mx-4 my-5 flex flex-col items-center justify-center rounded-lg bg-blue-500 py-10 text-center text-white sm:mx-10 md:mx-0 z-0"
      variants={containerVariants}
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
      <p className="mb-10">
        {
          "We help B2B businesses scale by providing qualified calls straight to your calendar."
        }
      </p>

      {/* Video Container with Gradient Background */}
      <div className="shadow-cool bg-conic-gradient mx-auto mb-8 w-full max-w-4xl rounded-lg p-1">
        <video
          src="/leadspike-VSL.mov"
          width="100%"
          height="auto"
          controls
          className="aspect-video rounded-lg"
        />
      </div>

      {/* Call to Action Button */}
      <Button className="animate-bloop rounded-lg bg-blue-700 px-6 py-3 text-lg font-bold md:mx-5 z-0">
        Book a Call
      </Button>
   
    </motion.div>
    
  );
}
