"use client";

import { motion } from "motion/react";

export default function FloatingMoon() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        x: [0, 8, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
     className=" pointer-events-none absolute right-[24%] top-[14%] z-10 h-16 w-16"
    >
      {/* Moon glow */}
      <div className="absolute inset-[-70%] rounded-full bg-blue-300/10 blur-2xl" />

      {/* Moon */}
      <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-slate-100 via-slate-400 to-slate-800 shadow-[inset_-10px_-8px_18px_rgba(0,0,0,0.45),0_0_25px_rgba(203,213,225,0.12)]">
        {/* Craters */}
        <div className="absolute left-[22%] top-[28%] h-3 w-3 rounded-full bg-slate-500/30" />
        <div className="absolute left-[58%] top-[22%] h-2 w-2 rounded-full bg-slate-600/30" />
        <div className="absolute left-[45%] top-[60%] h-4 w-4 rounded-full bg-slate-600/25" />

        {/* Shadow */}
        <div className="absolute right-[-20%] top-[-5%] h-[110%] w-[65%] rounded-full bg-slate-950/35" />
      </div>
    </motion.div>
  );
}