"use client";

import { motion } from "motion/react";

export default function FloatingComet() {
  return (
    <motion.div
      initial={{
        left: "-5%",
        top: "92%",
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        left: "24%",
        top: "14%",
        opacity: [0, 1, 1, 0],
        scale: [0.7, 1, 1, 0.6],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        repeatDelay: 7,
        ease: "easeInOut",
        times: [0, 0.12, 0.75, 1],
      }}
      className="pointer-events-none absolute z-20"
    >
      {/* Comet tail */}
      <div
        className="
          absolute right-1/2 top-1/2
          h-[3px] w-32
          origin-right
          -translate-y-1/2
          rotate-[-35deg]
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-indigo-300/20
          to-indigo-100/70
          blur-[1px]
        "
      />

      {/* Tail glow */}
      <div
        className="
          absolute right-1/2 top-1/2
          h-8 w-32
          origin-right
          -translate-y-1/2
          rotate-[-35deg]
          bg-indigo-300/10
          blur-xl
        "
      />

      {/* Comet head */}
      <div className="relative h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]" />
    </motion.div>
  );
}