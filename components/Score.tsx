"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  percent: number;
  durationMs?: number;
}

export default function Score({ percent, durationMs = 1400 }: Props) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let start = performance.now();
    const from = 0;
    const to = Math.max(0, Math.min(100, Math.round(percent)));
    if (to === 0) {
      setValue(0);
      return;
    }
    let raf = 0;
    function easeOutCubic(t: number) {
      return 1 - Math.pow(1 - t, 3);
    }
    function step(now: number) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const current = Math.round(from + (to - from) * easeOutCubic(t));
      setValue(current);
      if (t < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setValue(to);
      }
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [percent, durationMs]);

  // The number uses motion for a slight vertical entrance on mount/update.
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <motion.div
        key={value}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 18, duration: 0.5 }}
        className="result-number"
        aria-live="polite"
        style={{ display: "inline-block" }}
      >
        {value}
      </motion.div>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="result-percent"
        style={{ marginLeft: 10 }}
      >
        %
      </motion.div>
    </div>
  );
}
