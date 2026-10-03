"use client";

import { motion } from "motion/react";

export default function FloatingPlanet() {
  return (
    <motion.div
  animate={{ y: [0, -18, 0] }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-[8%] top-[22%] h-44 w-44 md:h-56 md:w-56"

>
      {/* Deep outer glow */}
      <div className="absolute inset-[-40%] rounded-full bg-indigo-600/10 blur-[70px]" />

      {/* Distant stars */}
      <div className="absolute -left-16 top-10 h-1 w-1 rounded-full bg-white/70 shadow-[70px_35px_0_rgba(255,255,255,0.4),120px_-25px_0_rgba(255,255,255,0.5),-25px_90px_0_rgba(255,255,255,0.35)]" />

      {/* Orbit ring behind planet */}
      <div
        className="absolute left-1/2 top-1/2 h-[48%] w-[155%]
        -translate-x-1/2 -translate-y-1/2
        rotate-[-18deg] rounded-[50%]
        border border-indigo-300/20"
      />

      {/* Second faint orbit */}
      <div
        className="absolute left-1/2 top-1/2 h-[65%] w-[170%]
        -translate-x-1/2 -translate-y-1/2
        rotate-[12deg] rounded-[50%]
        border border-blue-300/[0.07]"
      />

      {/* Planet */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 overflow-hidden rounded-full"
      >
        {/* Base surface */}
        <div
          className="absolute inset-0 rounded-full
          bg-[radial-gradient(circle_at_32%_25%,#c4b5fd_0%,#818cf8_15%,#4f46e5_35%,#312e81_55%,#0f172a_82%,#020617_100%)]
          shadow-[inset_-35px_-25px_55px_rgba(0,0,0,0.8),inset_12px_8px_25px_rgba(255,255,255,0.15),0_0_70px_rgba(99,102,241,0.3)]"
        />

        {/* Surface bands */}
        <div className="absolute left-[-10%] top-[28%] h-7 w-[120%] rotate-[-8deg] rounded-full bg-violet-200/[0.07] blur-md" />

        <div className="absolute left-[-10%] top-[52%] h-10 w-[120%] rotate-[5deg] rounded-full bg-blue-200/[0.06] blur-lg" />

        <div className="absolute left-[5%] top-[68%] h-6 w-[100%] rotate-[-12deg] rounded-full bg-indigo-300/[0.08] blur-md" />

        {/* Crater-like details */}
        <div className="absolute left-[22%] top-[45%] h-7 w-11 rounded-full bg-black/10 blur-sm" />

        <div className="absolute left-[62%] top-[58%] h-5 w-8 rounded-full bg-black/15 blur-sm" />

        <div className="absolute left-[48%] top-[30%] h-4 w-7 rounded-full bg-white/[0.06] blur-sm" />

        {/* Bright atmospheric edge */}
        <div
          className="absolute inset-0 rounded-full
          bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_30%)]"
        />

        {/* Night-side shadow */}
        <div className="absolute right-[-8%] top-[-5%] h-[110%] w-[72%] rounded-full bg-slate-950/55 blur-[2px]" />

        {/* Thin atmosphere */}
        <div className="absolute inset-0 rounded-full border border-indigo-200/20" />
      </motion.div>

      {/* Orbiting moon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-22%]"
      >
        <div className="absolute right-[4%] top-[21%]">
          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-slate-200 to-slate-600 shadow-[0_0_20px_rgba(226,232,240,0.35)]" />
        </div>
      </motion.div>

      {/* Tiny floating particle */}
      <motion.div
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-8 top-[35%] h-1.5 w-1.5 rounded-full bg-indigo-200"
      />
    </motion.div>
  );
}