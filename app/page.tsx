"use client";

import AnimatedBackground from "./ui/animations/AnimatedBackground";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div>
      <AnimatePresence>
        <AnimatedBackground />
      </AnimatePresence>
    </div>
  );
}
