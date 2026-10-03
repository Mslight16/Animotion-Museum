"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { FiArrowLeft, FiRotateCcw } from "react-icons/fi";

export default function FollowThroughPage() {
  const [delay, setDelay] = useState(0.18);
  const [key, setKey] = useState(0);

  const parts = [
    {
      label: "Body",
      size: "h-16 w-16",
      opacity: 1,
      delay: 0,
    },
    {
      label: "Middle",
      size: "h-11 w-11",
      opacity: 0.65,
      delay,
    },
    {
      label: "Tail",
      size: "h-7 w-7",
      opacity: 0.35,
      delay: delay * 2,
    },
  ];

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
          Exhibit 04
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
              Principle 04
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Follow
              <br />
              <span className="text-zinc-500">Through</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Movement rarely stops all at once. Different parts continue
              moving and settle at different moments, creating a sense of
              physical continuity.
            </p>
          </motion.div>
        </section>

        <section className="grid gap-8 pb-32 lg:grid-cols-[1fr_320px]">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <div className="absolute left-[10%] right-[10%] top-1/2 h-px bg-white/10" />

            {parts.map((part) => (
              <motion.div
                key={`${part.label}-${key}`}
                initial={{
                  x: 0,
                  rotate: 0,
                }}
                animate={{
                  x: ["0%", "75%", "35%", "70%"],
                  rotate: [0, 12, -7, 0],
                }}
                transition={{
                  duration: 2.8,
                  delay: part.delay,
                  ease: "easeInOut",
                  times: [0, 0.55, 0.72, 1],
                }}
                className={`absolute left-[12%] top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-200 via-indigo-500 to-slate-950 shadow-[0_0_45px_rgba(99,102,241,0.35)] ${part.size}`}
                style={{
                  opacity: part.opacity,
                  marginLeft: `${parts.indexOf(part) * 22}px`,
                }}
              />
            ))}

            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Motion chain
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Lead → Follow → Settle
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Experiment
            </p>

            <h2 className="mt-6 text-xl font-medium text-white">
              Delay between parts
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Increase the delay to make the movement feel more fluid and
              connected.
            </p>

            <div className="mt-8">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Delay</span>
                <span className="text-indigo-300">
                  {delay.toFixed(2)}s
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="0.5"
                step="0.01"
                value={delay}
                onChange={(event) =>
                  setDelay(Number(event.target.value))
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
