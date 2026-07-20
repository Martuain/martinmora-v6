"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useLang } from "@/lib/i18n/LangContext";
import { translations } from "@/lib/translations";

export function ApproachPageClient() {
  const { lang } = useLang();
  const t = translations[lang].approach;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 section-divider relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[300px] blob-teal rounded-full blur-[120px] opacity-30" />
          </div>
          <div className="container relative z-10 max-w-4xl">
            <Reveal>
              <p className="eyebrow mb-6">{t.eyebrow}</p>
              <h1 className="display-xl text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                {t.heroTitle}
              </h1>
              <p className="text-xl text-[var(--secondary)] leading-relaxed max-w-2xl">
                {t.heroSubtitle}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <h2 className="display-md text-[var(--primary)] mb-16 max-w-2xl" style={{ fontFamily: "var(--font-display)" }}>
                {t.philosophyTitle}
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {t.principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="glass glass-hover rounded-3xl p-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mb-5" />
                    <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">{p.title}</h3>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Framework */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-4">{t.frameworkEyebrow}</p>
              <h2 className="display-md text-[var(--primary)] mb-6 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
                {t.frameworkTitle}
              </h2>
              <p className="text-[var(--secondary)] text-lg max-w-xl mb-16">
                {t.frameworkSubtitle}
              </p>
            </Reveal>
            <div className="space-y-6">
              {t.steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.08}>
                  <div className="glass glass-hover rounded-3xl p-8 grid md:grid-cols-[140px_1fr_2fr] gap-6 items-start">
                    <div>
                      <div className="text-xs font-bold tracking-widest text-[var(--accent)] mb-2">{step.number}</div>
                      <h3 className="text-xl font-semibold text-[var(--primary)]">{step.title}</h3>
                    </div>
                    <p className="text-sm font-medium text-[var(--secondary)] leading-relaxed md:border-l md:border-[var(--border)] md:pl-6">
                      {step.description}
                    </p>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed md:border-l md:border-[var(--border)] md:pl-6 opacity-80">
                      {step.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-4">{t.engagementModelsEyebrow}</p>
              <h2 className="display-md text-[var(--primary)] mb-16 max-w-2xl" style={{ fontFamily: "var(--font-display)" }}>
                {t.engagementModelsTitle}
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {t.engagementModels.map((model, i) => (
                <Reveal key={model.title} delay={i * 0.1}>
                  <div className="glass glass-hover rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[var(--primary)]">{model.title}</h3>
                      <span className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--secondary)]">
                        {model.scope}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">{model.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
