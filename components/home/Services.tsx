"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/lib/i18n/LangContext";
import { translations } from "@/lib/translations";

export function Services() {
  const { lang } = useLang();
  const t = translations[lang].home.services;
  const engagements = t.items;

  return (
    <section id="services" className="py-28 section-divider">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="display-md text-[var(--primary)] max-w-4xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            {t.title}
          </h2>
          <p className="text-[var(--secondary)] text-lg max-w-2xl mb-16">
            {t.subtitle}
          </p>
        </Reveal>

        {/* Four compact summary cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {engagements.map((eng, i) => (
            <motion.div
              key={eng.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-hover rounded-3xl p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="text-xs font-bold tracking-widest"
                  style={{ color: eng.accent }}
                >
                  {eng.number}
                </div>
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--secondary)]">
                  {eng.scope}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--primary)] mb-3">
                {eng.title}
              </h3>
              <p className="text-sm text-[var(--secondary)] leading-relaxed">
                {eng.description}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/advisory-engagements"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
          >
            {t.seeFullDetails}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
