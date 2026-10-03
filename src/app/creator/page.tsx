"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import {
  FiArrowLeft,
  FiCopy,
  FiPlay,
  FiRotateCcw,
} from "react-icons/fi";

const presets = [
  {
    name: "Slide",
    description: "Smooth entrance",
    type: "slide",
  },
  {
    name: "Scale",
    description: "Soft expansion",
    type: "scale",
  },
  {
    name: "Bounce",
    description: "Elastic movement",
    type: "bounce",
  },
];

export default function CreatorPage() {
  const [selected, setSelected] = useState("slide");
  const [duration, setDuration] = useState(1);
  const [key, setKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const animation =
    selected === "slide"
      ? {
          x: [0, 180, 0],
          opacity: [0, 1, 1],
        }
      : selected === "scale"
        ? {
            scale: [0.4, 1.15, 1],
            opacity: [0, 1, 1],
          }
        : {
            y: [0, -90, 0, -35, 0],
            scaleY: [1, 0.9, 1.1, 0.95, 1],
          };

  const easing =
    selected === "bounce"
      ? [0.22, 1, 0.36, 1]
      : "easeInOut";

  const code = `<motion.div
  animate={${JSON.stringify(animation)}}
  transition={{
    duration: ${duration},
    ease: "${selected === "bounce" ? "spring" : "easeInOut"}",
  }}
/>`;

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10">
      <div className="space-background" />

      <header className="relative z-10 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <FiArrowLeft size={16} />
          Museum
        </Link>

        <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
          Archive 04
        </span>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl pb-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Creator
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Make
            <br />
            <span className="text-zinc-500">motion yours.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Choose a motion behavior, tune its timing, preview the result,
            and take the generated animation with you.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-6 pb-32 lg:grid-cols-[1fr_300px]">
        {/* Preview */}
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
          <div className="absolute left-6 top-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
              Live preview
            </p>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              animate={animation}
              transition={{
                duration,
                ease: easing as "easeInOut" | [number, number, number, number],
              }}
              className="h-24 w-24 rounded-[1.5rem] bg-gradient-to-br from-indigo-200 via-indigo-500 to-slate-950 shadow-[0_0_80px_rgba(99,102,241,0.55)]"
            >
              <div className="ml-[18%] mt-[12%] h-7 w-10 rounded-full bg-white/25 blur-sm" />
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setKey((value) => value + 1)}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs text-zinc-300 transition hover:bg-white/[0.09] hover:text-white"
            >
              <FiPlay size={13} />
              Preview
            </button>

            <button
              type="button"
              onClick={() => {
                setSelected("slide");
                setDuration(1);
                setKey((value) => value + 1);
              }}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-zinc-500 transition hover:text-white"
            >
              <FiRotateCcw size={13} />
              Reset
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-5">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Motion
            </p>

            <div className="mt-5 space-y-2">
              {presets.map((preset) => (
                <button
                  key={preset.type}
                  type="button"
                  onClick={() => {
                    setSelected(preset.type);
                    setKey((value) => value + 1);
                  }}
                  className={`w-full rounded-xl border p-3 text-left transition ${
                    selected === preset.type
                      ? "border-indigo-300/30 bg-indigo-400/10"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      selected === preset.type
                        ? "text-indigo-200"
                        : "text-zinc-300"
                    }`}
                  >
                    {preset.name}
                  </p>

                  <p className="mt-1 text-[11px] text-zinc-600">
                    {preset.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Timing
            </p>

            <div className="mt-6 flex justify-between text-sm">
              <span className="text-zinc-400">Duration</span>
              <span className="text-indigo-300">
                {duration.toFixed(1)}s
              </span>
            </div>

            <input
              type="range"
              min="0.3"
              max="3"
              step="0.1"
              value={duration}
              onChange={(event) => {
                setDuration(Number(event.target.value));
                setKey((value) => value + 1);
              }}
              className="mt-4 w-full accent-indigo-400"
            />
          </div>
        </div>
      </section>

      {/* Code */}
      <section className="relative z-10 mx-auto max-w-6xl pb-32">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Generated motion
              </p>

              <p className="mt-1 text-xs text-zinc-700">
                React + Motion
              </p>
            </div>

            <button
              type="button"
              onClick={copyCode}
              className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
            >
              <FiCopy size={13} />
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <pre className="overflow-x-auto p-6 text-xs leading-6 text-zinc-400">
            <code>{code}</code>
          </pre>
        </div>
      </section>
    </main>
  );
}