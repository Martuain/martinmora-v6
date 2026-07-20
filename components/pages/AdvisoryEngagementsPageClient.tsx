"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useLang } from "@/lib/i18n/LangContext";
import { translations } from "@/lib/translations";

export function AdvisoryEngagementsPageClient() {
  const { lang } = useLang();
  const t = translations[lang].advisoryEngagements;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 section-divider relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[350px] blob-teal rounded-full blur-[130px] opacity-25" />
          </div>
          <div className="container relative z-10 max-w-4xl">
            <Reveal>
              <p className="eyebrow mb-6">{t.eyebrow}</p>
              <h1
                className="display-xl text-[var(--primary)] mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.heroTitle}
              </h1>
              <p className="text-xl text-[var(--secondary)] leading-relaxed max-w-2xl">
                {t.heroSubtitle}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Engagement cards */}
        <section className="py-24 section-divider">
          <div className="container">
            <div className="space-y-8">
              {t.engagements.map((eng, i) => (
                <Reveal key={eng.id} delay={i * 0.07}>
                  <div className="glass glass-hover rounded-3xl overflow-hidden">
                    {/* Color bar */}
                    <div className="h-0.5 w-full" style={{ background: eng.accent }} />

                    <div className="p-10 grid lg:grid-cols-[1fr_1fr_1fr] gap-10">
                      {/* Column 1: Header */}
                      <div>
                        <div
                          className="text-xs font-bold tracking-widest mb-3"
                          style={{ color: eng.accent }}
                        >
                          {eng.number}
                        </div>
                        <h2 className="text-2xl font-semibold text-[var(--primary)] mb-3 leading-snug">
                          {eng.title}
                        </h2>
                        <p className="text-sm font-medium mb-5" style={{ color: eng.accent }}>
                          {eng.tagline}
                        </p>
                        <p className="text-sm text-[var(--secondary)] leading-relaxed mb-6">
                          {eng.description}
                        </p>
                        <span className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--secondary)]">
                          {t.typicalScope} {eng.scope}
                        </span>
                      </div>

                      {/* Column 2: Typical Situations */}
                      <div className="lg:border-l lg:border-[var(--border)] lg:pl-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-5">
                          {t.typicalSituations}
                        </p>
                        <ul className="space-y-3">
                          {eng.situations.map((s) => (
                            <li key={s} className="flex gap-3 text-sm text-[var(--secondary)]">
                              <span style={{ color: eng.accent }} className="flex-shrink-0 mt-0.5">
                                →
                              </span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: You Receive (softened deliverables) */}
                      <div className="lg:border-l lg:border-[var(--border)] lg:pl-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-5">
                          {t.youReceive}
                        </p>
                        <ul className="space-y-3">
                          {eng.youReceive.map((d) => (
                            <li key={d} className="flex gap-3 text-sm text-[var(--secondary)]">
                              <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">✓</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Typical Engagements — packaging section */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-4">{t.typicalEyebrow}</p>
              <h2
                className="display-md text-[var(--primary)] mb-6 max-w-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.typicalTitle}
              </h2>
              <p className="max-w-3xl text-muted-foreground">
                {t.typicalIntro}
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {t.formats.map((item, i) => (
                <Reveal key={item.format} delay={i * 0.08}>
                  <div className="glass glass-hover rounded-2xl p-7 flex flex-col h-full">
                    <div
                      className="text-xs font-bold tracking-widest mb-4"
                      style={{ color: item.accent }}
                    >
                      {item.duration}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">
                      {item.format}
                    </h3>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed mb-5 flex-1">
                      {item.description}
                    </p>
                    <div className="pt-4 border-t border-[var(--border)]">
                      <p className="text-xs text-[var(--secondary)]">
                        <span className="text-[var(--primary)] font-semibold">{t.bestForLabel} </span>
                        {item.bestFor}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 glass rounded-2xl p-6 max-w-2xl">
                <p className="text-sm text-[var(--secondary)] leading-relaxed">
                  <span className="text-[var(--primary)] font-semibold">{t.notSureBold} </span>
                  {t.notSureRest}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
