"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "../app/questions";

type Props = { initialStep?: number };

export default function QuizShell({ initialStep = 1 }: Props) {
  const router = useRouter();
  const total = QUESTIONS.length;

  // 1-based step index
  const [step, setStep] = useState<number>(Math.min(Math.max(1, initialStep), total));
  // persist selected index per question (-1 = none)
  const [answers, setAnswers] = useState<number[]>(() => Array(total).fill(-1));
  // selected for current step (mirrors answers[step-1])
  const [selected, setSelected] = useState<number>(answers[step - 1]);

  // sync selected when step changes
  useEffect(() => {
    setSelected(answers[step - 1]);
    // focus card for keyboard a11y (if present)
    const el = document.querySelector(".q-card");
    if (el) (el as HTMLElement).focus();
  }, [step, answers]);

  // handle option click: only select (no navigation)
  function handleSelect(idx: number) {
    const next = [...answers];
    next[step - 1] = idx;
    setAnswers(next);
    setSelected(idx);
  }

  // go to previous question
  function handlePrev() {
    if (step > 1) {
      setStep(s => s - 1);
    }
  }

  // advance to next question; if last, compute score and navigate
  function handleNext() {
    // advance locally first if not last
    if (step < total) {
      setStep(s => s + 1);
      return;
    }

    // compute score from answers array
    let correctCount = 0;
    for (let i = 0; i < total; i++) {
      const ans = answers[i];
      if (ans !== -1 && QUESTIONS[i].answerIndex === ans) correctCount++;
    }
    const percent = Math.round((correctCount / total) * 100);
    router.push(`/result?score=${percent}`);
  }

  return (
    <div>
      <header className="text-center mb-8">
        <h1 className="h1-serif">Test Your Knowledge</h1>
        <p className="mt-3 inline-block bg-white/80 px-4 py-2 rounded-lg text-sm">Answer the questions to see your results</p>
      </header>

      {/* Segmented progress: fill first N bars where N = step */}
      <div className="mb-6 flex justify-center gap-6">
        {QUESTIONS.map((_, i) => {
          const isFilled = i + 1 <= step;
          return (
            <div key={i} className="w-56">
              <div className="progress-track" style={{ height: 8 }}>
                <div className="progress-fill" style={{ width: isFilled ? "100%" : "0%", transition: "width 360ms cubic-bezier(.2,.9,.2,1)" }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="q-card" tabIndex={-1} role="group" aria-labelledby={`q-${step}`}>
          <h3 id={`q-${step}`} className="font-semibold text-center text-lg">
            {QUESTIONS[step - 1].question}
          </h3>

          <div className="mt-6 grid gap-4">
            {QUESTIONS[step - 1].options.map((opt, idx) => {
              const isSelected = selected === idx;
              return (
                <div
                  key={idx}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onClick={() => handleSelect(idx)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleSelect(idx); }}
                  className={`option ${isSelected ? "selected" : ""}`}
                >
                  <div className="text-center font-medium">{opt}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-end gap-4">
            <div className="flex items-center gap-3">
              <div className="nav-ctrl" onClick={handlePrev} role="button" tabIndex={0}>←</div>
              <div className="nav-ctrl" onClick={handleNext} role="button" tabIndex={0}>→</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
