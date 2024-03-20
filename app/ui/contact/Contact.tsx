import { motion } from "framer-motion";
import { Battery100Icon, WifiIcon, ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="grid place-content-center bg-copy p-12">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="bg-primary rounded-[24px]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <WifiIcon className="h-6 w-6 text-neutral-600" />
        <Battery100Icon className="h-6 w-6 text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <Image alt="spike petals" src='/spike-petal.png' width={100} height={100}/>
      <div className="flex justify-center animate-bounce">
      <ArrowDownCircleIcon className="h-6 w-6 text-primary"/>
      </div>
      <Link
        href="https://calendly.com/spikelead/capital-raise-demo-call"
        target="_blank"
      >
        <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-black backdrop-blur">
          Give us a Call
        </button>
      </Link>
      <div className="bg-primary absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full" />
    </div>
  );
};

export default Contact;
