import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../buttons";
import Link from "next/link";
import { LearnButton } from "../buttons";
import * as THREE from "three";

const STAGGER = 0.025;
interface AnimatedTextProps {
  phrases: string[];
}
const AnimatedText = ({ phrases }: AnimatedTextProps) => {
  const countRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(intervalRef);
  }, [phrases.length]);

  return (
    <AnimatePresence mode="popLayout">
      {phrases[active].split(" ").map((word: string, wordIndex: number) => {
        if (wordIndex === 0) {
          countRef.current = 0;
        }

        return (
          <motion.div
            key={word}
            className={`whitespace-nowrap md:text-3xl xl:text-5xl ${wordIndex === 1 ? "ml-3" : ""}`}
          >
            {word.split("").map((letter, letterIndex) => {
              const content = (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    delay: countRef.current * STAGGER,
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                  }}
                  className="inline-block"
                  key={letterIndex}
                >
                  {letter}
                </motion.span>
              );

              countRef.current++;
              return content;
            })}
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};

export default function Hero() {
  const globeRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [cameraFOV, setCameraFOV] = useState(60);

  useEffect(() => {
    const updateStatesBasedOnWidth = () => {
      const currentWidth = window.innerWidth;
      setIsMobile(currentWidth < 768);
      if (currentWidth <= 1024) {
        setCameraFOV(40); // FOV for width <= 1024px
      } else if (currentWidth > 1024 && currentWidth <= 1440) {
        setCameraFOV(60); // FOV for 1024px < width <= 1440px
      } else {
        setCameraFOV(50); // FOV for width > 1440px
      }
    };

    updateStatesBasedOnWidth();

    window.addEventListener("resize", updateStatesBasedOnWidth);

    return () => window.removeEventListener("resize", updateStatesBasedOnWidth);
  }, []);

  useEffect(() => {
    if (!isMobile && globeRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        cameraFOV,
        globeRef.current.clientWidth / globeRef.current.clientHeight,
        0.1,
        1000,
      );
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(
        globeRef.current.clientWidth,
        globeRef.current.clientHeight,
      );
      globeRef.current.appendChild(renderer.domElement);

      const globeGeometry = new THREE.SphereGeometry(5, 60, 60);
      const wireframe = new THREE.WireframeGeometry(globeGeometry);
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0766ff });
      const globe = new THREE.LineSegments(wireframe, lineMaterial);
      scene.add(globe);

      camera.position.z = 15;

      const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.001;
        globe.rotation.x += 0.001;
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        if (globeRef.current) {
          globeRef.current.removeChild(renderer.domElement);
        }
        scene.remove(globe);
        globeGeometry.dispose();
        wireframe.dispose();
        lineMaterial.dispose();
      };
    }
  }, [isMobile, cameraFOV]);

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
    <div className="flex h-[50vh] items-center justify-evenly md:mb-56 md:h-[50vh] md:flex-col xl:mb-0 xl:h-[70vh] xl:flex-row xl:px-20">
      <div className="z-10">
        <motion.div
          className=" flex flex-col items-center rounded-xl text-center text-black md:w-[100vw] xl:items-start md:text-nowrap md:px-20 xl:text-left xl:w-[60vw] xl:px-0"
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
            <h1 className=" mb-5 flex flex-col text-2xl md:flex-row md:text-3xl xl:text-5xl">
              A Modern Approach To{" "}
              <div className="flex flex-row justify-center md:ml-3 ">
                <AnimatedText
                  phrases={[
                    "Raising Capital",
                    "Securing Investments",
                    "Growth Financing",
                    "LP Partnerships",
                    "Capital Infusion",
                  ]}
                />
              </div>
            </h1>
            <p className="mb-10 px-10 text-gray md:px-0">
              Connecting you with accredited private and institutional
              investors.
            </p>
          </motion.div>
          <div className="flex flex-row scroll-smooth px-2 text-sm md:px-0 xl:px-0">
            <Link
              href="https://calendly.com/spikelead/capital-raise-demo-call"
              target="_blank"
            >
              <Button className="px-6 py-3 shadow xl:text-xl">
                Book a Call
              </Button>
            </Link>
            <Link href="#about">
              <LearnButton className="ml-2 px-6 py-3 shadow xl:text-xl">
                Learn More
              </LearnButton>
            </Link>
          </div>
        </motion.div>
      </div>
      {!isMobile && (
        <motion.div
          ref={globeRef}
          className="z-0 h-full w-full overflow-visible md:absolute md:top-96 xl:relative xl:bottom-auto xl:top-0"
        ></motion.div>
      )}
    </div>
  );
}
