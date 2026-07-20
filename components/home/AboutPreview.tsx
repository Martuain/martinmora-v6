"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/lib/i18n/LangContext";
import { translations } from "@/lib/translations";

export function AboutPreview() {
  const { lang } = useLang();
  const t = translations[lang].home.aboutPreview;

  return (
    <section className="py-28 section-divider">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">{t.eyebrow}</p>
              <h2 className="display-md text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                {t.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-[var(--secondary)] text-base leading-relaxed mb-8">
                {t.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
                >
                  {t.readFullBackground}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/approach"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                >
                  {t.exploreApproach}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              {/* Industries — CV-verified */}
              <div className="glass rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-5">
                  {t.industriesLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.industries.map((ind) => (
                    <span
                      key={ind}
                      className="text-sm px-4 py-2 rounded-full border border-[var(--border)] text-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--accent)]/30 transition-colors cursor-default"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key results — all CV-verified */}
              <div className="glass rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-5">
                  {t.selectedResultsLabel}
                </p>
                <div className="space-y-4">
                  {t.selectedResults.map((item) => (
                    <div key={item.metric} className="flex items-start gap-4">
                      <span className="text-lg font-bold text-[var(--accent)] flex-shrink-0 leading-none mt-0.5">
                        {item.metric}
                      </span>
                      <span className="text-xs text-[var(--secondary)] leading-relaxed">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
