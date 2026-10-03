"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const navItems = [
  {
    label: "Encyclopedia",
    href: "/encyclopedia",
  },
  {
    label: "Motion Lab",
    href: "/motion-lab",
  },
  {
    label: "Interaction",
    href: "/interaction-lab",
  },
  {
    label: "Creator",
    href: "/creator",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed left-0 right-0 top-0 z-50 px-5 py-5 md:px-8"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3 backdrop-blur-xl md:px-5">
          {/* LOGO */}

          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-indigo-300/20 bg-indigo-400/[0.08]">
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,0.8)]"
              />

              <div className="absolute inset-1.5 rounded-full border border-indigo-300/10" />
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Animotion
              </p>

              <p className="hidden text-[8px] uppercase tracking-[0.3em] text-zinc-600 sm:block">
                Digital Museum
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-xl px-4 py-2.5 text-xs text-zinc-500 transition-colors duration-300 hover:text-white"
              >
                <span>{item.label}</span>

                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-indigo-300 transition-all duration-300 group-hover:w-5" />
              </Link>
            ))}

            <div className="mx-3 h-5 w-px bg-white/[0.08]" />

            <Link
              href="/creator"
              className="group flex items-center gap-2 rounded-xl border border-indigo-300/15 bg-indigo-400/[0.07] px-4 py-2.5 text-xs text-indigo-200 transition-all duration-300 hover:border-indigo-300/30 hover:bg-indigo-400/[0.13]"
            >
              Create

              <FiArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition hover:bg-white/[0.08] hover:text-white md:hidden"
          >
            {open ? <FiX size={17} /> : <FiMenu size={17} />}
          </button>
        </div>

        {/* MOBILE MENU */}

        <motion.div
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            height: open ? "auto" : 0,
            y: open ? 0 : -8,
          }}
          transition={{ duration: 0.25 }}
          className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/[0.07] bg-[#050711]/90 backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1 p-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={false}
                animate={{
                  opacity: open ? 1 : 0,
                  x: open ? 0 : -10,
                }}
                transition={{
                  duration: 0.2,
                  delay: open ? index * 0.04 : 0,
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <span>{item.label}</span>

                  <FiArrowUpRight
                    size={14}
                    className="text-zinc-700"
                  />
                </Link>
              </motion.div>
            ))}

            <div className="my-2 h-px bg-white/[0.06]" />

            <Link
              href="/creator"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl bg-indigo-400/[0.08] px-4 py-3 text-sm text-indigo-200"
            >
              <span>Open Creator</span>

              <FiArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}