"use client";
import AnimatedBackground from "./ui/animations/AnimatedBackground";
import Header from "./ui/Header";
import Hero from "./ui/hero-section/Hero";
import Trusted from "./ui/trustedBy/Trusted";
import ClientResults from "./ui/client-results/ClientResults";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Hero />
      <Trusted />
      <ClientResults />
    </>
  );
}
