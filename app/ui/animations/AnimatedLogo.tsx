import { motion, useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const AnimatedLogo = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          "#ball",
          {
            rotate: "360deg",
            borderRadius: "100%",
          },
          { duration: 0.5, ease: "easeInOut" },
        );
        await animate(
          "#ball",
          {
            y: ["0%", "-100%", "0%"],
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 10px 20px rgba(0, 0, 0, 0.2)",
              "0 20px 40px rgba(0, 0, 0, 0.4)",
              "0 10px 20px rgba(0, 0, 0, 0.2)",
            ],
          },
          { duration: 0.5, repeat: 1, ease: "easeInOut" },
        );

        await animate("#ball", { scale: 8 }, { duration: 1 });
        await animate("#image", { opacity: 1 }, { duration: 1 });
      };

      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { y: "-100%" }, { duration: 2 });
        safeToRemove();
      };

      exitAnimation();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  return (
    <div
      className="flex h-screen items-center justify-center overflow-hidden"
      ref={scope}
    >
      <div className="flex w-[100vw] justify-center">
        <motion.div className="h-24 w-24 bg-[#F4F3F2]" id="ball" />
      </div>
      <motion.div className="absolute opacity-0" id="image">
        <Image
          src="/spike-logo.png"
          alt="spike-logo"
          width={300}
          height={300}
          id="logo"
        />
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
