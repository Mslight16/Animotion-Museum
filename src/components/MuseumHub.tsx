"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  FiBookOpen,
  FiCpu,
  FiEdit3,
  FiZap,
} from "react-icons/fi";

const zones = [
  {
    title: "Encyclopedia",
    subtitle: "Learn",
    description: "Discover the principles behind believable motion.",
    icon: FiBookOpen,
    position: "left-[8%] top-[28%]",
    size: "h-36 w-36",
    href: "/encyclopedia",
  },
  {
    title: "Motion Lab",
    subtitle: "Experiment",
    description: "Play with physics, particles, timing, and movement.",
    icon: FiZap,
    position: "right-[10%] top-[24%]",
    size: "h-40 w-40",
    href: "/motion-lab",
  },
  {
    title: "Interaction Lab",
    subtitle: "Explore",
    description: "See how motion transforms interfaces and interactions.",
    icon: FiCpu,
    position: "left-[18%] bottom-[14%]",
    size: "h-32 w-32",
    href: "/interaction-lab",
  },
  {
    title: "Creator",
    subtitle: "Build",
    description: "Design your own animation and generate motion code.",
    icon: FiEdit3,
    position: "right-[20%] bottom-[12%]",
    size: "h-34 w-34",
    href: "/creator",
  },
];

export default function MuseumHub() {
  return (
    <section className="relative z-10 min-h-screen overflow-hidden px-6 py-32 md:px-10">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center justify-center">
        {/* Central museum */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-20 flex h-48 w-48 items-center justify-center rounded-full border border-indigo-300/20 bg-indigo-500/[0.04] shadow-[0_0_100px_rgba(99,102,241,0.15)] md:h-64 md:w-64"
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-24 w-24 rounded-full bg-indigo-400/20 blur-2xl"
          />

          <div className="relative text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-indigo-300">
              Enter
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Museum
            </h2>

            <p className="mt-2 text-xs text-zinc-500">
              Animation × Motion
            </p>
          </div>
        </motion.div>

        {/* Rotating orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute h-[430px] w-[430px] rounded-full border border-indigo-300/10 md:h-[600px] md:w-[600px]"
        />

        {/* Connection lines */}
        <div className="pointer-events-none absolute h-px w-[75%] rotate-[24deg] bg-gradient-to-r from-transparent via-indigo-300/10 to-transparent" />

        <div className="pointer-events-none absolute h-px w-[75%] -rotate-[24deg] bg-gradient-to-r from-transparent via-indigo-300/10 to-transparent" />

{/* Desktop zones */}
{zones.map((zone, index) => {
  const Icon = zone.icon;

  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        zone.href !== "#"
          ? {
              scale: 1.06,
              y: -8,
            }
          : undefined
      }
      className={`group absolute ${zone.position} ${zone.size}
        hidden h-[200px] w-[200px] rounded-full
        border border-white/10
        bg-white/[0.035]
        p-5 text-left
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(99,102,241,0.06)]
        transition-all duration-300
        md:block
        ${
          zone.href !== "#"
            ? `
              cursor-pointer
              hover:border-indigo-300/30
              hover:bg-white/[0.07]
              hover:shadow-[0_0_50px_rgba(99,102,241,0.14)]
            `
            : "opacity-60"
        }`}
    >
      {/* Subtle inner ring */}
      <div className="pointer-events-none absolute inset-2 rounded-full border border-white/[0.035]" />

      <div className="relative flex h-full flex-col justify-between">
       
        {/* Content */}
        <div className="relative">
            <Icon
            size={18}
            strokeWidth={1.6}
            className="  m-4 h-5 w-5 
              text-indigo-300
              transition-transform duration-300
              group-hover:scale-110
            "
          />
          <p className="text-[9px] uppercase tracking-[0.28em] text-indigo-300/70">
            {zone.subtitle}
          </p>

          <h3
            className="
              mt-1
              text-sm font-semibold tracking-wide text-white
              transition-colors duration-300
              group-hover:text-indigo-100
            "
          >
            {zone.title}
          </h3>

          <p className="mt-1.5 text-[10px] leading-4 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
            {zone.description}
          </p>

          {/* Explore indicator */}
          {zone.href !== "#" && (
            <div
              className="
                mt-2 flex items-center gap-1
                text-[9px] uppercase tracking-[0.2em]
                text-indigo-300/0
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:text-indigo-300/70
              "
            >
              Explore
              <span className="text-xs">→</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return zone.href !== "#" ? (
    <Link key={zone.title} href={zone.href}>
      {content}
    </Link>
  ) : (
    <div key={zone.title}>{content}</div>
  );
})}


        {/* Mobile navigation */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-3 md:hidden">
          {zones.map((zone) => {
            const Icon = zone.icon;

            const card = (
              <div
                className={`rounded-2xl border border-white/10 bg-white/[0.035] p-4 ${
                  zone.href === "#" ? "opacity-60" : ""
                }`}
              >
                <Icon size={18} className="text-indigo-300" />

                <p className="mt-3 text-xs font-medium text-white">
                  {zone.title}
                </p>

                <p className="mt-1 text-[10px] text-zinc-500">
                  {zone.subtitle}
                </p>
              </div>
            );

            if (zone.href === "#") {
              return <div key={zone.title}>{card}</div>;
            }

            return (
              <Link key={zone.title} href={zone.href}>
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}