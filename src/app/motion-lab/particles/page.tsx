"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { FiArrowLeft, FiRotateCcw } from "react-icons/fi";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  x: ((index * 47) % 80) + 10,
  y: ((index * 31) % 65) + 15,
  size: 3 + (index % 4),
  duration: 2.5 + (index % 5) * 0.45,
  delay: (index % 6) * 0.2,
}));

export default function ParticlesPage() {
  const [energy, setEnergy] = useState(50);
  const [key, setKey] = useState(0);

  const movement = 20 + energy * 0.8;

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10">
      <div className="space-background" />

      <header className="relative z-10 flex items-center justify-between">
        <Link
          href="/motion-lab"
          className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <FiArrowLeft size={16} />
          Motion Lab
        </Link>

        <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
          Experiment 03
        </span>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl">
        <section className="pb-12 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
              Systems / Particles
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Particles
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Motion becomes more complex when many objects move together.
              Explore how energy changes the behavior of a particle system.
            </p>
          </motion.div>
        </section>

        <section className="grid gap-8 pb-32 lg:grid-cols-[1fr_320px]">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <motion.div
              key={key}
              className="absolute inset-0"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  initial={{
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    x: [
                      -movement,
                      movement * 0.7,
                      -movement * 0.4,
                      movement * 0.5,
                      0,
                    ],
                    y: [
                      movement * 0.4,
                      -movement * 0.6,
                      movement * 0.5,
                      -movement * 0.2,
                      0,
                    ],
                  }}
                  transition={{
                    duration: particle.duration,
                    delay: particle.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute rounded-full bg-indigo-300 shadow-[0_0_15px_rgba(129,140,248,0.7)]"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: particle.size,
                    height: particle.size,
                  }}
                />
              ))}
            </motion.div>

            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)]" />

            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Particle field
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Energy → Motion → Emergence
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Controls
            </p>

            <div className="mt-8">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Energy</span>
                <span className="text-indigo-300">{energy}%</span>
              </div>

              <input
                type="range"
                min="10"
                max="100"
                value={energy}
                onChange={(event) =>
                  setEnergy(Number(event.target.value))
                }
                className="mt-3 w-full accent-indigo-400"
              />
            </div>

            <p className="mt-6 text-sm leading-6 text-zinc-600">
              Higher energy produces larger and faster particle movement.
            </p>

            <button
              type="button"
              onClick={() => setKey((value) => value + 1)}
              className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              <FiRotateCcw size={14} />
              Re-seed particles
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}