"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { FiArrowLeft, FiRotateCcw } from "react-icons/fi";

const easings = ["linear", "easeIn", "easeOut", "easeInOut"];

export default function TimingEasingPage() {
  const [duration, setDuration] = useState(2);
  const [easing, setEasing] = useState("easeInOut");
  const [key, setKey] = useState(0);

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10">
      <div className="space-background" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between">
        <Link
          href="/encyclopedia"
          className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <FiArrowLeft size={16} />
          Encyclopedia
        </Link>

        <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
          Exhibit 01
        </span>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-14 pt-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
            Principle 01
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Timing
            <br />
            <span className="text-zinc-500">& Easing</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            The same movement can feel completely different depending on how
            quickly it happens and how that speed changes over time.
          </p>
        </motion.section>

        {/* Interactive experiment */}
        <section className="grid gap-8 pb-32 lg:grid-cols-[1fr_320px]">
          {/* Stage */}
          <div className="relative flex min-h-[420px] items-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <div className="absolute left-[8%] right-[8%] h-px bg-white/10" />

            <motion.div
              key={key}
              initial={{ x: 0 }}
              animate={{ x: "70%" }}
              transition={{
                duration,
                ease: easing as "linear" | "easeIn" | "easeOut" | "easeInOut",
              }}
              className="absolute left-[8%] h-20 w-20 rounded-full bg-gradient-to-br from-indigo-300 via-violet-500 to-blue-700 shadow-[0_0_70px_rgba(99,102,241,0.45)]"
            >
              <div className="absolute left-[20%] top-[15%] h-5 w-8 rounded-full bg-white/20 blur-sm" />
            </motion.div>

            <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Start
            </div>

            <div className="absolute bottom-6 right-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
              End
            </div>
          </div>

          {/* Controls */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Experiment
            </p>

            {/* Duration */}
            <div className="mt-8">
              <div className="flex justify-between">
                <span className="text-sm text-zinc-400">Duration</span>
                <span className="text-sm text-indigo-300">
                  {duration.toFixed(1)}s
                </span>
              </div>

              <input
                type="range"
                min="0.5"
                max="5"
                step="0.1"
                value={duration}
                onChange={(event) => {
                  setDuration(Number(event.target.value));
                  setKey((previous) => previous + 1);
                }}
                className="mt-4 w-full accent-indigo-400"
              />
            </div>

            {/* Easing */}
            <div className="mt-8">
              <p className="text-sm text-zinc-400">Easing</p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {easings.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setEasing(item);
                      setKey((previous) => previous + 1);
                    }}
                    className={`rounded-xl border px-3 py-2 text-xs transition ${
                      easing === item
                        ? "border-indigo-300/30 bg-indigo-400/10 text-indigo-200"
                        : "border-white/10 bg-white/[0.02] text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Replay */}
            <button
              type="button"
              onClick={() => setKey((previous) => previous + 1)}
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