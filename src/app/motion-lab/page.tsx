"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCircle,
  FiGitBranch,
  FiZap,
} from "react-icons/fi";

const experiments = [
  {
    title: "Gravity",
    description: "Observe how acceleration changes the fall of an object.",
    icon: FiArrowDown,
    status: "Open experiment",
    href: "/motion-lab/gravity",
  },
 {
  title: "Spring",
  description: "Explore tension, elasticity, and oscillation.",
  icon: FiGitBranch,
  status: "Open experiment",
  href: "/motion-lab/spring",
},
{
  title: "Particles",
  description: "Experiment with systems made from many moving elements.",
  icon: FiZap,
  status: "Open experiment",
  href: "/motion-lab/particles",
},
  {
  title: "Orbit",
  description: "Explore circular motion, velocity, and attraction.",
  icon: FiCircle,
  status: "Open experiment",
  href: "/motion-lab/orbit",
},
];

function FiArrowDown(props: { size?: number }) {
  return <span {...props}>↓</span>;
}

export default function MotionLabPage() {
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
          Archive 02
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
            Motion Lab
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Motion under
            <br />
            <span className="text-zinc-500">the microscope.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            A laboratory for exploring the forces, systems, and behaviors that
            make motion feel physical and alive.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl pb-32">
        <div className="grid gap-5 md:grid-cols-2">
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon;

            const card = (
              <motion.div
                whileHover={experiment.href !== "#" ? { y: -6 } : undefined}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md transition-colors ${
                  experiment.href !== "#"
                    ? "hover:border-indigo-300/25 hover:bg-white/[0.05]"
                    : "opacity-70"
                }`}
              >
                <div className="relative mb-8 flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2.5 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-200 via-indigo-500 to-slate-950 shadow-[0_0_45px_rgba(99,102,241,0.45)]"
                  />

                  <div className="absolute inset-x-8 bottom-8 h-px bg-white/10" />
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon
                        size={17}
                        className="text-indigo-300"
                      />

                      <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                        0{index + 1}
                      </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-semibold text-white">
                      {experiment.title}
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                      {experiment.description}
                    </p>
                  </div>

                  {experiment.href !== "#" && (
                    <FiArrowUpRight
                      size={19}
                      className="text-zinc-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-300"
                    />
                  )}
                </div>

                <div
                  className={`mt-6 text-xs uppercase tracking-[0.2em] ${
                    experiment.href !== "#"
                      ? "text-indigo-300/70"
                      : "text-zinc-600"
                  }`}
                >
                  {experiment.status}
                </div>
              </motion.div>
            );

            if (experiment.href === "#") {
              return (
                <div key={experiment.title}>
                  {card}
                </div>
              );
            }

            return (
              <Link
                key={experiment.title}
                href={experiment.href}
                className="block"
              >
                {card}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}