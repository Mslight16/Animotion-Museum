"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { FiArrowLeft, FiRotateCcw } from "react-icons/fi";

const modes = [
  {
    name: "Center",
    position: "center",
  },
  {
    name: "Left",
    position: "left",
  },
  {
    name: "Right",
    position: "right",
  },
];

export default function StagingPage() {
  const [focus, setFocus] = useState("center");
  const [key, setKey] = useState(0);

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
          Exhibit 05
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
              Principle 05
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Staging
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Staging controls what the viewer notices first. Position,
              contrast, scale, and movement can create a clear visual focus.
            </p>
          </motion.div>
        </section>

        <section className="grid gap-8 pb-32 lg:grid-cols-[1fr_320px]">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            {/* Secondary elements */}
            <motion.div
              animate={{
                opacity: focus === "left" ? 0.08 : 0.18,
              }}
              className="absolute left-[20%] top-[28%] h-12 w-12 rounded-full bg-violet-300 blur-[1px]"
            />

            <motion.div
              animate={{
                opacity: focus === "right" ? 0.08 : 0.18,
              }}
              className="absolute right-[20%] top-[62%] h-16 w-16 rounded-full bg-blue-300 blur-[1px]"
            />

            <motion.div
              animate={{
                opacity: focus === "center" ? 0.08 : 0.16,
              }}
              className="absolute left-[68%] top-[25%] h-7 w-7 rounded-full bg-pink-300"
            />

            {/* Main subject */}
            <motion.div
              key={`${focus}-${key}`}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x:
                  focus === "left"
                    ? "-180%"
                    : focus === "right"
                      ? "180%"
                      : "0%",
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-indigo-300 to-indigo-700 shadow-[0_0_90px_rgba(129,140,248,0.65)]"
            >
              <div className="absolute left-[18%] top-[12%] h-8 w-12 rounded-full bg-white/30 blur-sm" />
            </motion.div>

            {/* Focus beam */}
            <motion.div
              animate={{
                x:
                  focus === "left"
                    ? "-180%"
                    : focus === "right"
                      ? "180%"
                      : "0%",
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/10"
            />

            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Visual focus
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Direct attention through composition
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Experiment
            </p>

            <h2 className="mt-6 text-xl font-medium text-white">
              Move the focus
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Change the subject's position and watch how the visual hierarchy
              changes.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2">
              {modes.map((mode) => (
                <button
                  key={mode.position}
                  type="button"
                  onClick={() => {
                    setFocus(mode.position);
                    setKey((value) => value + 1);
                  }}
                  className={`rounded-xl border px-3 py-3 text-xs transition ${
                    focus === mode.position
                      ? "border-indigo-300/30 bg-indigo-400/10 text-indigo-200"
                      : "border-white/10 bg-white/[0.02] text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {mode.name}
                </button>
              ))}
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