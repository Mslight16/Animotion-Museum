"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { animationPrinciples } from "@/data/animationPrinciples";

export default function EncyclopediaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10">
      <div className="space-background" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <FiArrowLeft size={16} />
          Museum
        </Link>

        <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
          Archive 01
        </span>
      </header>

      {/* Introduction */}
      <section className="relative z-10 mx-auto max-w-6xl pb-20 pt-28">
       <Link href="/encyclopedia/timing-easing" className="max-w-3xl">
          {/* initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} */}
          
        
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Animation Encyclopedia
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            The language
            <br />
            of movement.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Animation is a visual language. Explore the principles that make
            movement feel natural, expressive, and intentional.
          </p>
        </Link>
      </section>

      {/* Principles */}
      <section className="relative z-10 mx-auto max-w-6xl pb-32">
        <div className="grid gap-4 md:grid-cols-2">
          {animationPrinciples.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-md transition-colors hover:border-indigo-300/25 hover:bg-white/[0.055]"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-[0.2em] text-indigo-300/60">
                  {principle.number}
                </span>

                <FiArrowUpRight
                  size={18}
                  className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-300"
                />
              </div>

              <h2 className="mt-16 text-2xl font-semibold text-white">
                {principle.title}
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                {principle.shortDescription}
              </p>

              {/* Decorative orbit */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full border border-indigo-300/10 transition-transform duration-700 group-hover:scale-125" />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}