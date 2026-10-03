"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { FiArrowLeft, FiRotateCcw } from "react-icons/fi";

export default function SquashStretchPage() {
  const [intensity, setIntensity] = useState(55);
  const [key, setKey] = useState(0);

  const squash = 1 + intensity / 80;
  const stretch = 1 + intensity / 120;

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10">
      <div className="space-background" />

      <header className="relative z-10 flex items-center justify-between">
        <Link
          href="/encyclopedia"
          className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <FiArrowLeft size={16} />
          Encyclopedia
        </Link>

        <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
          Exhibit 03
        </span>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl">
        <section className="pb-14 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
              Principle 03
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Squash
              <br />
              <span className="text-zinc-500">& Stretch</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Deformation helps the viewer understand weight, speed, impact,
              and energy without changing the object's overall volume.
            </p>
          </motion.div>
        </section>

        <section className="grid gap-8 pb-32 lg:grid-cols-[1fr_320px]">
          <div className="relative min-h-115 overflow-hidden rounded-4xl border border-white/10 bg-white/[0.025]">
            <div className="absolute bottom-[18%] left-[12%] right-[12%] h-px bg-white/10" />

            <motion.div
              key={key}
              initial={{
                y: -150,
                scaleX: 0.75,
                scaleY: stretch,
              }}
              animate={{
                y: [-150, 80, 55, 80, -150],
                scaleX: [
                  0.75,
                  squash,
                  1.35,
                  0.9,
                  0.75,
                ],
                scaleY: [
                  stretch,
                  0.45,
                  0.7,
                  stretch,
                  stretch,
                ],
              }}
              transition={{
                duration: 2.8,
                times: [0, 0.42, 0.5, 0.62, 1],
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[24%] h-24 w-24 -translate-x-1/2 rounded-full bg-linear-to-br from-blue-200 via-indigo-500 to-slate-950 shadow-[0_0_75px_rgba(99,102,241,0.5)]"
            >
              <div className="absolute left-[18%] top-[12%] h-7 w-10 rounded-full bg-white/20 blur-sm" />
            </motion.div>

            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Impact study
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Stretch → Fall → Squash → Recover
              </p>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/2.5 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Experiment
            </p>

            <h2 className="mt-6 text-xl font-medium text-white">
              Deformation
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Increase the intensity to exaggerate the object's stretch and
              squash during movement.
            </p>

            <div className="mt-8">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Intensity</span>
                <span className="text-indigo-300">{intensity}%</span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={intensity}
                onChange={(event) =>
                  setIntensity(Number(event.target.value))
                }
                className="mt-4 w-full accent-indigo-400"
              />
            </div>

            <button
              type="button"
              onClick={() => setKey((value) => value + 1)}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
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