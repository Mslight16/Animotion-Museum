"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiRotateCcw } from "react-icons/fi";

export default function GravityPage() {
  const [gravity, setGravity] = useState(9.8);
  const [bounce, setBounce] = useState(0.55);
  const [mass, setMass] = useState(50);
  const [resetKey, setResetKey] = useState(0);

  const [position, setPosition] = useState(40);
  const velocity = useRef(0);
  const lastTime = useRef<number | null>(null);

  useEffect(() => {
    let frame: number;

    const animate = (time: number) => {
      if (lastTime.current === null) {
        lastTime.current = time;
      }

      const delta = Math.min((time - lastTime.current) / 1000, 0.03);
      lastTime.current = time;

      velocity.current += gravity * delta * 18;
      let nextPosition = position + velocity.current * delta;

      const floor = 300;

      if (nextPosition >= floor) {
        nextPosition = floor;
        velocity.current *= -bounce;
      }

      setPosition(nextPosition);

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      lastTime.current = null;
    };
  }, [gravity, bounce, resetKey]);

  const reset = () => {
    setPosition(40);
    velocity.current = 0;
    lastTime.current = null;
    setResetKey((value) => value + 1);
  };

  const ballSize = 30 + mass * 0.35;

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
          Experiment 01
        </span>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl">
        <section className="pb-12 pt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
            Physics / Gravity
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Gravity
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Change the forces acting on an object and observe how acceleration,
            mass, and bounce affect its motion.
          </p>
        </section>

        <section className="grid gap-8 pb-32 lg:grid-cols-[1fr_320px]">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <div className="absolute bottom-[18%] left-[8%] right-[8%] h-px bg-white/10" />

            <motion.div
              animate={{
                top: position,
              }}
              transition={{ duration: 0 }}
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                width: ballSize,
                height: ballSize,
              }}
            >
              <div className="h-full w-full rounded-full bg-gradient-to-br from-indigo-200 via-indigo-500 to-slate-950 shadow-[0_0_50px_rgba(99,102,241,0.5)]" />

              <div className="absolute left-[18%] top-[12%] h-[22%] w-[30%] rounded-full bg-white/25 blur-sm" />
            </motion.div>

            <div className="absolute bottom-7 left-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Gravity field
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Acceleration → Impact → Bounce
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Controls
            </p>

            <div className="mt-8 space-y-7">
              <Control
                label="Gravity"
                value={`${gravity.toFixed(1)} m/s²`}
                min={1}
                max={20}
                step={0.1}
                current={gravity}
                onChange={setGravity}
              />

              <Control
                label="Bounce"
                value={`${Math.round(bounce * 100)}%`}
                min={0}
                max={0.95}
                step={0.01}
                current={bounce}
                onChange={setBounce}
              />

              <Control
                label="Mass"
                value={`${mass}%`}
                min={10}
                max={100}
                step={1}
                current={mass}
                onChange={setMass}
              />
            </div>

            <button
              type="button"
              onClick={reset}
              className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              <FiRotateCcw size={14} />
              Reset
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

type ControlProps = {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (value: number) => void;
};

function Control({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
}: ControlProps) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className="text-zinc-400">{label}</span>
        <span className="text-indigo-300">{value}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 w-full accent-indigo-400"
      />
    </div>
  );
}