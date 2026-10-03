"use client";

import { motion } from "motion/react";

type NebulaProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: number;
  height?: number;
};

export default function Nebula({
  top,
  left,
  right,
  bottom,
  width = 650,
  height = 180,
}: NebulaProps) {
  return (
    <motion.div
      className="pointer-events-none absolute z-0"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top,
        left,
        right,
        bottom,
      }}
      animate={{
        x: [0, 35, -20, 0],
        y: [0, -10, 12, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Main flowing wave */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scaleX: [1, 1.08, 0.94, 1],
          scaleY: [1, 0.92, 1.08, 1],
          skewX: [-8, 4, -5, -8],
          rotate: [-3, 2, -2, -3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            radial-gradient(ellipse at 5% 55%,
              rgba(59,130,246,0.35),
              transparent 25%
            ),
            radial-gradient(ellipse at 22% 35%,
              rgba(6,182,212,0.28),
              transparent 25%
            ),
            radial-gradient(ellipse at 42% 65%,
              rgba(168,85,247,0.34),
              transparent 28%
            ),
            radial-gradient(ellipse at 62% 35%,
              rgba(236,72,153,0.30),
              transparent 27%
            ),
            radial-gradient(ellipse at 80% 65%,
              rgba(250,204,21,0.24),
              transparent 25%
            ),
            radial-gradient(ellipse at 98% 40%,
              rgba(245,158,11,0.20),
              transparent 24%
            )
          `,
          filter: "blur(32px)",
        }}
      />

      {/* Thin flowing wave */}
      <motion.div
        className="absolute left-[-10%] top-[35%] h-[30%] w-[120%]"
        animate={{
          x: ["-5%", "8%", "-3%", "-5%"],
          y: ["0%", "-12%", "8%", "0%"],
          rotate: [-4, 1, -3, -4],
          scaleY: [1, 1.25, 0.8, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.16), rgba(168,85,247,0.22), rgba(236,72,153,0.20), rgba(250,204,21,0.14), transparent)",
          borderRadius: "50%",
          filter: "blur(18px)",
        }}
      />
    </motion.div>
  );
}