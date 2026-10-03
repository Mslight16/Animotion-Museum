"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { FiArrowLeft, FiRotateCcw } from "react-icons/fi";

export default function OrbitPage() {
  const [speed, setSpeed] = useState(50);
  const [radius, setRadius] = useState(50);
  const [key, setKey] = useState(0);

  const duration = Math.max(2, 14 - speed * 0.11);
  const orbitSize = 180 + radius * 2.2;

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
          Experiment 04
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
              Physics / Orbit
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Orbit
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Orbital motion emerges from the relationship between attraction,
              velocity, and distance. Adjust the system and watch the path
              change.
            </p>
          </motion.div>
        </section>

        <section className="grid gap-8 pb-32 lg:grid-cols-[1fr_320px]">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <motion.div
              key={key}
              animate={{ rotate: 360 }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/20"
              style={{
                width: orbitSize,
                height: orbitSize,
              }}
            >
              <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-indigo-300 shadow-[0_0_30px_rgba(129,140,248,0.8)]" />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-100 via-indigo-400 to-indigo-900 shadow-[0_0_90px_rgba(129,140,248,0.5)]"
            />

            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Orbital system
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Attraction → Velocity → Orbit
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Controls
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Orbital speed</span>
                  <span className="text-indigo-300">{speed}%</span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="100"
                  value={speed}
                  onChange={(event) =>
                    setSpeed(Number(event.target.value))
                  }
                  className="mt-3 w-full accent-indigo-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Orbit radius</span>
                  <span className="text-indigo-300">{radius}%</span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="100"
                  value={radius}
                  onChange={(event) =>
                    setRadius(Number(event.target.value))
                  }
                  className="mt-3 w-full accent-indigo-400"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setKey((value) => value + 1)}
              className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              <FiRotateCcw size={14} />
              Restart orbit
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}