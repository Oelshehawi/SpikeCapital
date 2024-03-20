"use client";
import AnimatedBackground from "./ui/animations/AnimatedBackground";
import Header from "./ui/Header";
import Hero from "./ui/hero-section/Hero";
import Trusted from "./ui/trustedBy/Trusted";
import About from "./ui/about-section/About";
import Contact from "./ui/contact/Contact";
import { OurProcess } from "./ui/process/OurProcess";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        document.title = "Spike Capital"; 
        
      }else{
        document.title = 'Come Back!'; 
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <OurProcess />
      <Trusted />
      <Contact />
    </>
  );
}
