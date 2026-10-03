"use client";

import { motion } from "motion/react";

type PrinciplePreviewProps = {
  slug: string;
};

export default function PrinciplePreview({
  slug,
}: PrinciplePreviewProps) {
  if (slug === "timing-easing") {
    return (
      <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-white/10" />

        <motion.div
          animate={{ x: ["0%", "500%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-indigo-300 shadow-[0_0_25px_rgba(129,140,248,0.8)]"
        />

        <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
          Motion curve
        </div>
      </div>
    );
  }

  if (slug === "anticipation") {
    return (
      <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <motion.div
          animate={{
            x: [0, -25, 0, 120],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[25%] top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_35px_rgba(167,139,250,0.45)]"
        />

        <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
          Prepare → Action
        </div>
      </div>
    );
  }

  if (slug === "squash-stretch") {
    return (
      <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <motion.div
          animate={{
            y: [0, 65, 90, 65, 0],
            scaleX: [1, 1.45, 1.7, 0.8, 1],
            scaleY: [1, 0.65, 0.35, 1.25, 1],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[18%] h-12 w-12 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_35px_rgba(96,165,250,0.45)]"
        />

        <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
          Weight & Impact
        </div>
      </div>
    );
  }

  if (slug === "follow-through") {
    return (
      <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{
              x: [0, 100, 0],
              y: [0, index * 8, 0],
            }}
            transition={{
              duration: 2.2,
              delay: index * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[28%] top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-indigo-300 shadow-[0_0_20px_rgba(129,140,248,0.35)]"
            style={{
              opacity: 1 - index * 0.2,
            }}
          />
        ))}

        <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
          Delayed motion
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300 shadow-[0_0_50px_rgba(129,140,248,0.55)]"
      />

      <div className="absolute left-[18%] top-[25%] h-4 w-4 rounded-full bg-white/10" />
      <div className="absolute right-[18%] top-[30%] h-3 w-3 rounded-full bg-white/10" />
      <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
        Focus
      </div>
    </div>
  );
}