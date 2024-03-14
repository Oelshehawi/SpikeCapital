"use client";
import AnimatedBackground from "./ui/animations/AnimatedBackground";
import Header from "./ui/Header";
import Hero from "./ui/hero-section/Hero";
import Trusted from "./ui/trustedBy/Trusted";
import ClientResults from "./ui/client-results/ClientResults";
import About from "./ui/about-section/About";
import Contact from "./ui/contact/Contact";
import { OurProcess } from "./ui/process/OurProcess";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <OurProcess />
      <ClientResults />
      <Trusted />
      <Contact />
    </>
  );
}
