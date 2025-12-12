"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroCard() {
  const reduce = useReducedMotion();

  const heroVariants = {
    initial: { opacity: 0, y: 8 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    hover: { y: -4, transition: { duration: 0.28 } }
  };

  return (
    <motion.section
      initial="initial"
      animate="enter"
      whileHover={!reduce ? "hover" : undefined}
      variants={heroVariants}
      className="card-surface p-8 rounded-2xl2 card-inner"
      role="region"
    >
      <h2 className="text-hero-6xl hero-faint font-extrabold">Pixel-perfect</h2>

      <p className="mt-4 text-gray-600 max-w-3xl text-lg">
        Build the UI to match Figma. Focus on desktop sizes, spacing, and keyboard accessibility.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 rounded-lg bg-gradient-to-b from-brand to-brand-600 text-white font-medium shadow transition-smooth"
        >
          Primary
        </motion.button>

        <button className="px-6 py-3 rounded-lg btn-disabled transition-smooth">Secondary</button>
      </div>
    </motion.section>
  );
}
