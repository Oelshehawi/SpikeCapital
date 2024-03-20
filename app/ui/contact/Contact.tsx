import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    const runAnimation = async () => {
      await animate(
        scope.current,
        {
          rotateZ: [-5, 5, -5, 0],
        },
        {
          duration: 3,
        },
      );
    };

    if (isInView) {
      runAnimation();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div className="flex h-[80vh] items-center justify-center text-center">
    <motion.div
      ref={scope}
      className="flex h-3/4 w-3/4 flex-col items-center justify-center rounded-md bg-primary shadow-2xl px-2"
    >
      <h1 className="flex justify-center text-5xl"> Get in Touch </h1>
      <div className="flex items-center justify-center pt-10">
        <motion.div
          className="animate-pulseShadow flex h-20 w-20 items-center justify-center rounded-full bg-[#F4F3F2] hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <DevicePhoneMobileIcon className="h-10 w-10" color="black" />
        </motion.div>
      </div>
    </motion.div>
  </div>
  );
};

export default Contact;
