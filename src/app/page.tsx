"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import FloatingPlanet from "@/components/FloatingPlanet";
import CelestialObject from "@/components/CelestialObject";
import FloatingMoon from "@/components/FloatingMoon";
import FloatingComet from "@/components/FloatingComet";
import Nebula from "@/components/Nebula";
import MuseumHub from "@/components/MuseumHub";



export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.to(titleRef.current, {
      letterSpacing: "0.08em",
      duration: 2,
      delay: 1.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
  <div className="space-background" />
  
<Nebula
  width={800}
  height={220}
  top="8%"
  left="-12%"
/>

<Nebula
  width={900}
  height={240}
  bottom="5%"
  right="-18%"
/>

<Nebula
  width={700}
  height={180}
  top="48%"
  left="25%"
/>
  <FloatingPlanet />
  

  <CelestialObject
    size={58}
    top="16%"
    left="12%"
    color="purple"
    duration={11}
  />

  <CelestialObject
    size={34}
    top="68%"
    right="12%"
    color="silver"
    duration={7}
  />

<FloatingMoon />
<FloatingComet />
<Navbar />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500"
        >
          Animation × Motion
        </motion.p>

        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl font-bold tracking-tight md:text-8xl"
        >
          Animotion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-2xl text-zinc-400 md:text-3xl"
        >
          Museum
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 max-w-xl text-zinc-500"
        >
          A digital museum dedicated to animation, motion, interaction,
          and the art of bringing interfaces to life.
        </motion.p>
      </section>
    
     <MuseumHub />

    </main>
  );
}