import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const AnimatedLogo = () => {
  const ballControls = useAnimation();
  const textControls = useAnimation();
  const petalControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Start the entrance animation
      await ballControls.start("enter");
      // Once the entrance animation is complete, start the pulsate animation
      await ballControls.start("pulsate");
      // After pulsating, morph the ball into the text
      await ballControls.start("morph");
      // As the ball morphs, start scaling up the text
      textControls.start("enter");
      // Finally, bring in the petal logo
      petalControls.start("enter");
    };

    sequence();
  }, [ballControls, textControls, petalControls]);

  const ballVariants = {
    initial: {
      x: "-100vw", // Start off-screen to the left
      y: "100%", // Start below the view to simulate a bounce up into the frame
      scale: 0,
      opacity: 0,
    },
    enter: {
      x: ["-100vw", "0vw", "0vw"], // Simulate an arc path by overshooting to the middle and back
      y: ["100%", "-50%", "0%"], // Bounce to the middle and then settle at the starting point
      scale: [0, 0.8, 1],
      opacity: [0, 1, 1],
      transition: {
        x: {
          times: [0, 0.3, 0.6],
          duration: 1.2, // Duration for the entire x animation sequence
        },
        y: {
          times: [0, 0.3, 0.6],
          duration: 1.2, // Duration for the entire y animation sequence
        },
        scale: {
          duration: 1.2,
        },
        opacity: {
          duration: 0.3,
        },
        ease: "easeInOut",
      },
    },
    pulsate: {
      scale: [1, 1.2, 1],
      transition: {
        scale: {
          loop: 5,
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    morph: {
      scale: 0, // Shrink and disappear to morph into the text
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    initial: { scale: 0 },
    enter: {
      scale: [0, 1.2, 1], // Springy scale up to draw attention
      transition: {
        delay: 1.5, // Wait for ball's pulsate to end
        duration: 0.4,
        ease: "backOut",
      },
    },
  };

  const petalVariants = {
    initial: { x: -30, opacity: 0 },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.9, // Wait for text to start appearing
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <motion.div className="absolute" initial="initial" animate={ballControls}>
        <motion.div
          className="flex h-24 w-24 justify-center rounded-full bg-blue"
          variants={ballVariants}
        />
      </motion.div>
      <motion.div
        className="absolute"
        variants={textVariants}
        initial="initial"
        animate={textControls}
      >
        <span className="text-6xl font-bold text-blue">Spike</span>
      </motion.div>
      <motion.div
        className="absolute ml-[-1em]"
        variants={petalVariants}
        initial="initial"
        animate={petalControls}
      >
        <Image
          src="/spike-petal.png"
          width={200}
          height={200}
          alt="Spike Petal"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
