import { Variants, motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Trusted() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const logos = [
    {
      src: "/dandelions_digital_logo.png",
      alt: "Dandelions Digital",
      href: "https://dandelionsdigital.com",
    },
    {
      src: "/doukas-logo.png",
      alt: "Doukas Media",
      href: "https://www.doukasmedia.com",
    },
    {
      src: "/dre-logo.png",
      alt: "DRE Courses",
      href: "https://www.drecourses.com/dib2-optin",
    },
    {
      src: "/passive-logo.png",
      alt: "Mr. Passive",
      href: "https://www.mrpassive.com",
    },
    {
      src: "/quant-logo.png",
      alt: "Quant LLC",
      href: "https://www.quantllc.net",
    },
    {
      src: "/satori-logo.png",
      alt: "Jump Satori",
      href: "https://jumpsatori.com/",
    },
    {
      src: "/black-tie-logo.png",
      alt: "Black Tie Funding",
      href: "https://blacktiefunding.com/",
    },
    {
      src: "/optimax-logo.png",
      alt: "Optimax Talent",
      href: "https://optimaxtalent.com/",
    },
  ];

  const TripledLogos = [...logos, ...logos, ...logos];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="my-5 flex flex-col items-center justify-center overflow-hidden bg-blue-700 p-5"
    >
      <h1 className="mb-10 text-3xl font-bold text-white">Trusted By</h1>
      <div className="relative w-full overflow-hidden md:h-56 md:w-3/4">
        <motion.div
          className="flex items-center justify-start gap-x-10 md:gap-x-20"
          animate={{
            x: [0, -(logos.length * 500)],
            transition: { repeat: Infinity, duration: 55, ease: "linear" },
          }}
        >
          {TripledLogos.map((logo, index) => (
            <Link key={index} href={logo.href} target="_blank">
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="relative inline-block h-24 w-24 md:h-48 md:w-48">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill={true}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 250px"
                    className="rounded object-contain"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        <div className="absolute bottom-0 left-0 top-0 w-12 bg-gradient-to-r from-blue-700 to-transparent md:w-24"></div>
        <div className="absolute bottom-0 right-0 top-0 w-12 bg-gradient-to-l from-blue-700 to-transparent md:w-2"></div>
      </div>
    </motion.div>
  );
}
