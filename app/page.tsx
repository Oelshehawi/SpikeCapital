"use client";
import AnimatedBackground from "./ui/animations/AnimatedBackground";
import { AnimatePresence } from "framer-motion";
import Header from "./ui/Header";
import Hero from "./ui/hero-section/Hero";
import Trusted from "./ui/trustedBy/Trusted";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Hero />
      <Trusted />
    </>
  );
}
