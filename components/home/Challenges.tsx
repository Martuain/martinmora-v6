"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/lib/i18n/LangContext";
import { translations } from "@/lib/translations";

export function Challenges() {
  const { lang } = useLang();
  const t = translations[lang].home.challenges;
  const challenges = t.items;

  const [active, setActive] = useState<string>(challenges[0].id);
  const activeChallenge = challenges.find((c) => c.id === active) ?? challenges[0];

  return (
    <section className="py-28 section-divider">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="display-md text-[var(--primary)] max-w-3xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            {t.title}
          </h2>
          <p className="text-[var(--secondary)] text-lg max-w-xl mb-16">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Tab selector */}
          <div className="flex flex-col gap-3">
            {challenges.map((challenge, i) => (
              <motion.button
                key={challenge.id}
                onClick={() => setActive(challenge.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`w-full text-left px-6 py-5 rounded-2xl border transition-all duration-200 ${
                  active === challenge.id
                    ? "border-[var(--accent)] bg-[var(--accent-glow)]"
                    : "border-[var(--border)] bg-[var(--surface)] glass-hover"
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-lg ${active === challenge.id ? "text-[var(--accent)]" : "text-[var(--secondary)]"}`}>
                    {challenge.icon}
                  </span>
                  <h3 className={`font-semibold text-sm ${active === challenge.id ? "text-[var(--primary)]" : "text-[var(--secondary)]"}`}>
                    {challenge.title}
                  </h3>
                </div>
                <p className={`text-sm leading-snug pl-8 ${active === challenge.id ? "text-[var(--secondary)]" : "text-[var(--secondary)]/60"}`}>
                  {challenge.problem}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Solution panel */}
          <div className="sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-10"
              >
                <div className="text-4xl text-[var(--accent)] mb-6">{activeChallenge.icon}</div>
                <h3 className="text-2xl font-semibold text-[var(--primary)] mb-4">
                  {activeChallenge.title}
                </h3>
                <p className="text-[var(--secondary)] leading-relaxed mb-6 text-base">
                  <strong className="text-[var(--primary)]">{activeChallenge.problem}</strong>
                </p>
                <p className="text-[var(--secondary)] leading-relaxed text-base">
                  {activeChallenge.solution}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
