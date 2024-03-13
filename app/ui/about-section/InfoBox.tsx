import clsx from "clsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface InfoBoxProps {
  children: React.ReactNode;
  frontContent: string;
  backContent: string | null;
  className?: string;
}

export const InfoBox = ({
  children,
  frontContent,
  backContent,
  className,
}: InfoBoxProps) => {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  if (!isMobile) {
    return (
      <div
        className={clsx(
          "flex h-20 items-center justify-center rounded-md bg-white font-bold text-black drop-shadow-xl",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={clsx("group h-[100%] w-full perspective-1000", className)}
      onClick={handleFlip}
    >
      <div
        className={clsx(
          "t-0 absolute transform rounded-lg shadow-lg transition duration-[1.5s] backface-hidden h-[80%] bg-white font-bold text-black flex justify-center items-center p-3 w-full text-sm",
          { "rotate-y-180": flipped },
        )}
      >
        {frontContent}
      </div>
      <div
        className={clsx(
          "t-0 absolute transform rounded-lg shadow-lg transition duration-[1.5s] -rotate-y-180 backface-hidden h-[80%] bg-white font-bold text-black flex justify-center items-center p-3 w-full text-sm",
          { "rotate-y-0": flipped },
        )}
      >
        {backContent}
      </div>
    </div>
  );
};
