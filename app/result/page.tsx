"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Score from "../../components/Score";

export default function ResultPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const raw = sp.get("score") ?? "0";
  const target = Math.max(0, Math.min(100, Number(raw || 0))); // clamp 0..100

  const [visible, setVisible] = useState(true);

  function handleTryAgain() {
    // cross-fade: hide this screen then navigate
    setVisible(false);
    setTimeout(() => {
      router.push("/quiz/1");
    }, 360); // match exit duration
  }

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="result-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.36 }}
          className="result-wrapper"
          style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div style={{ textAlign: "center", width: "100%" }}>
            <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
              <div className="result-preamble">Keep Learning!</div>
            </div>

            <h2 className="result-heading">Your Final score is</h2>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", marginTop: 18 }}>
              <Score percent={target} durationMs={1400} />
            </div>

            <div style={{ marginTop: 36 }}>
              <button className="btn-try-again" onClick={handleTryAgain}>
                Try Again
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
