import {
  motion,
  useAnimate,
  useAnimation,
  useInView,
  animate,
  AnimationPlaybackControls,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Trusted() {
  const [scope, animate] = useAnimate();
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  const inView = useInView(scope);

  useEffect(() => {
    const runAnimation = async () => {
      await animate(scope.current, { opacity: [0, 1] }, { duration: 1 });
    };
    if (inView) {
      runAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div
      ref={scope}
      className=" my-5 flex h-[40vh] flex-col items-center justify-center overflow-hidden bg-darkwhite p-5 md:h-[40vh]"
    >
      <h1 className=" text-3xl font-bold text-black">Trusted By</h1>
      <div className="flex h-[80%] overflow-hidden">
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
      </div>
    </motion.div>
  );
}

const TranslateWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex items-center gap-5 md:gap-12 px-3 md:px-6 mb-5"
    >
      {children}
    </motion.div>
  );
};

const LogoItem: React.FC<{
  src: string;
  alt: string;
  href: string;
}> = ({ src, alt, href }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="flex h-28 w-24 items-center justify-center rounded p-1 text-black shadow-2xl transition-colors md:h-44 md:w-48 md:p-5 hover:cursor-pointer"
    >
      <Link href={href} target="_blank" className="">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="rounded object-contain"
        />
      </Link>
    </motion.div>
  );
};

const LogoItems = () => {
  return (
    <>
      <LogoItem
        src="/dandelions_digital_logo.png"
        alt="Dandelions Digital"
        href="https://dandelionsdigital.com"
      />
      <LogoItem
        src="/doukas-logo.png"
        alt="Doukas Media"
        href="https://www.doukasmedia.com"
      />
      <LogoItem
        src="/dre-logo.png"
        alt="DRE Courses"
        href="https://www.drecourses.com/dib2-optin"
      />
      <LogoItem
        src="/quant-logo.png"
        alt="Quant LLC"
        href="https://www.quantllc.net"
      />
      <LogoItem
        src="/satori-logo.png"
        alt="Jump Satori"
        href="https://jumpsatori.com/"
      />
      <LogoItem
        src="/black-tie-logo.png"
        alt="Black Tie Funding"
        href="https://blacktiefunding.com/"
      />
      <LogoItem
        src="/optimax-logo.png"
        alt="Optimax Talent"
        href="https://optimaxtalent.com/"
      />
    </>
  );
};
