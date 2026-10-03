"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiMousePointer,
  FiMove,
  FiMenu,
} from "react-icons/fi";
import { useState } from "react";

const experiments = [
  {
    title: "Magnetic Button",
    description:
      "Explore how a button can respond to the position of the pointer.",
    icon: FiMousePointer,
  },
  {
    title: "Drag & Release",
    description:
      "See how interaction can give an interface a sense of physical weight.",
    icon: FiMove,
  },
  {
    title: "Menu Motion",
    description:
      "Study how animated navigation can communicate opening and closing.",
    icon: FiMenu,
  },
];

export default function InteractionLabPage() {
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
          Archive 03
        </span>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl pb-20 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Interaction Lab
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Motion
            <br />
            <span className="text-zinc-500">you can touch.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Explore how animation responds to human interaction through
            buttons, gestures, menus, and interfaces.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl pb-32">
        <div className="grid gap-5 md:grid-cols-3">
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon;

            return (
              <InteractionCard
                key={experiment.title}
                experiment={experiment}
                index={index}
                Icon={Icon}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

function InteractionCard({
  experiment,
  index,
  Icon,
}: {
  experiment: (typeof experiments)[number];
  index: number;
  Icon: typeof FiMousePointer;
}) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-md"
    >
      <div className="relative mb-6 flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        {index === 0 && (
          <motion.button
            type="button"
            onClick={() => setActive((value) => !value)}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.92,
            }}
            animate={{
              boxShadow: active
                ? "0 0 60px rgba(129,140,248,0.65)"
                : "0 0 25px rgba(129,140,248,0.25)",
            }}
            className="rounded-2xl border border-indigo-300/30 bg-indigo-400/10 px-8 py-4 text-sm font-medium text-indigo-100"
          >
            {active ? "Connected" : "Touch me"}
          </motion.button>
        )}

        {index === 1 && (
          <motion.div
            drag
            dragConstraints={{
              left: -90,
              right: 90,
              top: -70,
              bottom: 70,
            }}
            whileDrag={{
              scale: 1.15,
            }}
            className="flex h-16 w-16 cursor-grab items-center justify-center rounded-full bg-gradient-to-br from-indigo-200 via-indigo-500 to-slate-950 shadow-[0_0_45px_rgba(99,102,241,0.5)]"
          >
            <FiMove size={20} className="text-white/80" />
          </motion.div>
        )}

        {index === 2 && (
          <div className="w-52">
            <motion.button
              type="button"
              onClick={() => setActive((value) => !value)}
              className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-zinc-300"
            >
              <span>Navigation</span>

              <motion.span
                animate={{
                  rotate: active ? 180 : 0,
                }}
              >
                ↓
              </motion.span>
            </motion.button>

            <motion.div
              initial={false}
              animate={{
                height: active ? "auto" : 0,
                opacity: active ? 1 : 0,
                marginTop: active ? 8 : 0,
              }}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
            >
              <div className="space-y-1 p-2 text-xs text-zinc-500">
                <div className="rounded-lg px-3 py-2 hover:bg-white/[0.05] hover:text-white">
                  Home
                </div>

                <div className="rounded-lg px-3 py-2 hover:bg-white/[0.05] hover:text-white">
                  Gallery
                </div>

                <div className="rounded-lg px-3 py-2 hover:bg-white/[0.05] hover:text-white">
                  About
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Icon size={17} className="text-indigo-300" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              0{index + 1}
            </span>
          </div>

          <h2 className="mt-5 text-xl font-semibold text-white">
            {experiment.title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {experiment.description}
          </p>
        </div>

        <FiArrowUpRight
          size={18}
          className="text-zinc-700 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-300"
        />
      </div>

      <div className="mt-6 text-[10px] uppercase tracking-[0.2em] text-indigo-300/60">
        Interactive study
      </div>
    </motion.div>
  );
}