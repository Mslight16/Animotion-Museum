"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { FiArrowLeft, FiRotateCcw } from "react-icons/fi";

export default function SpringPage() {
  const [stiffness, setStiffness] = useState(50);
  const [damping, setDamping] = useState(35);
  const [key, setKey] = useState(0);

  const duration = Math.max(0.7, 2.8 - stiffness / 35);
  const bounce = Math.max(0.05, 0.55 - damping / 100);

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
          Experiment 02
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
              Physics / Spring
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Spring
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Springs create motion through tension and recovery. Change their
              stiffness and damping to see how the character of movement
              changes.
            </p>
          </motion.div>
        </section>

        <section className="grid gap-8 pb-32 lg:grid-cols-[1fr_320px]">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <div className="absolute bottom-[18%] left-[10%] right-[10%] h-px bg-white/10" />

            <div className="absolute left-1/2 top-[18%] h-[220px] w-px -translate-x-1/2 border-l border-dashed border-white/10" />

            <motion.div
              key={key}
              initial={{ y: 0 }}
              animate={{
                y: [0, 170, -35, 135, 0],
                scaleX: [1, 1.15, 0.9, 1.08, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-1/2 top-[18%] flex -translate-x-1/2 flex-col items-center"
            >
              <div className="mb-2 h-28 w-5">
                <div className="h-full w-full rounded-full border-2 border-indigo-300/50 [clip-path:polygon(0_0,100%_0,100%_12%,0_12%,0_25%,100%_25%,100%_37%,0_37%,0_50%,100%_50%,100%_62%,0_62%,0_75%,100%_75%,100%_87%,0_87%)]" />
              </div>

              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-200 via-indigo-500 to-slate-950 shadow-[0_0_50px_rgba(99,102,241,0.5)]">
                <div className="ml-[18%] mt-[12%] h-5 w-7 rounded-full bg-white/20 blur-sm" />
              </div>
            </motion.div>

            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Elastic system
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Tension → Oscillation → Rest
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
                  <span className="text-zinc-400">Stiffness</span>
                  <span className="text-indigo-300">{stiffness}%</span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="100"
                  value={stiffness}
                  onChange={(event) =>
                    setStiffness(Number(event.target.value))
                  }
                  className="mt-3 w-full accent-indigo-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Damping</span>
                  <span className="text-indigo-300">{damping}%</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="90"
                  value={damping}
                  onChange={(event) =>
                    setDamping(Number(event.target.value))
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
              Replay
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}