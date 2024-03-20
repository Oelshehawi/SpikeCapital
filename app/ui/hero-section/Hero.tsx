import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../buttons";
import Link from "next/link";
import Image from "next/image";
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
            className={`whitespace-nowrap ${wordIndex === 1 ? "ml-3" : ""}`}
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && globeRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
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
  }, [isMobile]);

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

  const globeVariants = {
    animate: { rotate: 360 },
  };

  return (
    <div className="relative flex flex-row">
      <div className="z-10">
        <motion.div
          className="mt-12 flex flex-col items-center rounded-lg py-10 text-center text-black md:mb-56 md:ml-36 md:mt-44 md:items-start md:text-nowrap md:text-left"
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
            <h1 className=" mb-5 flex flex-col text-3xl sm:w-3/4 md:flex-row md:text-5xl">
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
            <p className="mb-10 text-gray">
              Connecting you with accredited private and institutional
              investors.
            </p>
          </motion.div>
          <div className="flex flex-row scroll-smooth">
            <Link
              href="https://calendly.com/spikelead/capital-raise-demo-call"
              target="_blank"
            >
              <Button className="px-6 py-3 text-lg shadow">Book a Call</Button>
            </Link>
            <Link href="#about">
              <LearnButton className="ml-2 px-6 py-3 text-lg shadow">
                Learn More
              </LearnButton>
            </Link>
          </div>
        </motion.div>
      </div>
      {!isMobile && (
        <div
          ref={globeRef}
          className="absolute ml-20 z-0 md:left-96 md:right-0 md:top-24 md:max-h-[500px] md:max-w-[700px] md:-translate-y-1/2"
        />
      )}
    </div>
  );
}
