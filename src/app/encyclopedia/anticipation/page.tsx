"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { FiArrowLeft, FiRotateCcw } from "react-icons/fi";

export default function AnticipationPage() {
  const [anticipation, setAnticipation] = useState(35);
  const [key, setKey] = useState(0);

  const direction = anticipation >= 50 ? 1 : -1;

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
          Exhibit 02
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
              Principle 02
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Anticipation
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Before an object moves, a small preparatory action can tell the
              viewer what is about to happen.
            </p>
          </motion.div>
        </section>

        <section className="grid gap-8 pb-32 lg:grid-cols-[1fr_320px]">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <div className="absolute left-[10%] right-[10%] top-1/2 h-px bg-white/10" />

            <motion.div
              key={key}
              initial={{
                x: 0,
                scaleX: 1,
                scaleY: 1,
              }}
              animate={{
                x: direction === 1 ? ["0%", "-8%", "72%"] : ["0%", "8%", "-72%"],
                scaleX: [1, 1.25, 1.05],
                scaleY: [1, 0.8, 1],
              }}
              transition={{
                duration: 2.4,
                times: [0, 0.28, 1],
                ease: "easeInOut",
              }}
              className="absolute left-[14%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-300 via-indigo-500 to-slate-950 shadow-[0_0_70px_rgba(99,102,241,0.45)]"
            >
              <div className="absolute left-[18%] top-[14%] h-6 w-9 rounded-full bg-white/20 blur-sm" />
            </motion.div>

            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Anticipation
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Prepare → Act
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Experiment
            </p>

            <h2 className="mt-6 text-xl font-medium text-white">
              How much preparation?
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Move the control to change the strength and direction of the
              preparatory movement.
            </p>

            <div className="mt-8">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Anticipation</span>
                <span className="text-indigo-300">{anticipation}%</span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={anticipation}
                onChange={(event) =>
                  setAnticipation(Number(event.target.value))
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