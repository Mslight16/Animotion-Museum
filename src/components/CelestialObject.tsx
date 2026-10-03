"use client";

import { motion } from "motion/react";

type CelestialObjectProps = {
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color?: "blue" | "purple" | "silver";
  duration?: number;
};

export default function CelestialObject({
  size = 60,
  top,
  left,
  right,
  bottom,
  color = "blue",
  duration = 8,
}: CelestialObjectProps) {
  const gradients = {
    blue: "from-blue-300 via-indigo-500 to-slate-950",
    purple: "from-violet-300 via-purple-500 to-slate-950",
    silver: "from-slate-200 via-slate-500 to-slate-950",
  };

  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [0, 4, -4, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
    >
      {/* Glow */}
      <div className="absolute inset-[-60%] rounded-full bg-indigo-500/10 blur-2xl" />

      {/* Planet */}
      <div
        className={`relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br ${gradients[color]} shadow-[inset_-12px_-10px_20px_rgba(0,0,0,0.6),0_0_30px_rgba(99,102,241,0.15)]`}
      >
        {/* Surface highlight */}
        <div className="absolute left-[15%] top-[12%] h-[35%] w-[45%] rounded-full bg-white/15 blur-md" />

        {/* Atmosphere */}
        <div className="absolute inset-0 rounded-full border border-white/10" />

        {/* Shadow */}
        <div className="absolute right-[-20%] top-[-5%] h-[110%] w-[65%] rounded-full bg-slate-950/40" />
      </div>
    </motion.div>
  );
}