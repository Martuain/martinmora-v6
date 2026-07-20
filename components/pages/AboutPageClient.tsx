"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useLang } from "@/lib/i18n/LangContext";
import { translations } from "@/lib/translations";

export function AboutPageClient() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <>
      <Navbar />
      <main>

        {/* 1. Introduction — who I help, not where I worked */}
        <section className="pt-32 pb-20 section-divider relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[400px] blob-teal rounded-full blur-[130px] opacity-25" />
          </div>
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl">
              <Reveal>
                <p className="eyebrow mb-6">{t.eyebrow}</p>
                <h1
                  className="display-xl text-[var(--primary)] mb-8"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.heroTitle}
                </h1>
                <p className="text-xl text-[var(--secondary)] leading-relaxed mb-6">
                  {t.heroLead}
                </p>
                <p className="text-base text-[var(--secondary)] leading-relaxed mb-6">
                  {t.heroBody}
                </p>
                <p className="text-base text-[var(--secondary)] leading-relaxed mb-10">
                  {t.heroLocation}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/advisory-engagements"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
                  >
                    {t.howIWork}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/approach"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {t.myApproach}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>

              {/* Domain tags */}
              <Reveal delay={0.15}>
                <div className="glass rounded-3xl p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-6">
                    {t.domainExperience}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {t.domainTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-4 py-2 rounded-full border border-[var(--border)] text-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--accent)]/30 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-[var(--border)] pt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-4">
                      {t.geography}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.geographyTags.map((geo) => (
                        <span key={geo} className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--secondary)]">
                          {geo}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. Experience Highlights — outcomes first, context second */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-4">{t.highlightsEyebrow}</p>
              <h2
                className="display-md text-[var(--primary)] mb-6 max-w-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.highlightsTitle}
              </h2>
              <p className="text-[var(--secondary)] text-lg max-w-xl mb-16">
                {t.highlightsCompanies}
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.highlights.map((h, i) => (
                <Reveal key={h.label} delay={i * 0.07}>
                  <div className="glass glass-hover rounded-2xl p-7 flex flex-col h-full">
                    <div className="text-3xl font-bold text-[var(--accent)] mb-1 leading-none">
                      {h.value}
                    </div>
                    <div className="text-sm font-semibold text-[var(--primary)] mb-3">
                      {h.label}
                    </div>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed mb-4 flex-1">
                      {h.context}
                    </p>
                    <span className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--secondary)] self-start">
                      {h.domain}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Expertise — capabilities */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-4">{t.expertiseEyebrow}</p>
              <h2
                className="display-md text-[var(--primary)] mb-16 max-w-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.expertiseTitle}
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.expertise.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.07}>
                  <div className="glass glass-hover rounded-2xl p-7">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mb-4" />
                    <h3 className="text-base font-semibold text-[var(--primary)] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Industries */}
        <section className="py-16 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-5">{t.industriesEyebrow}</p>
              <div className="flex flex-wrap gap-3">
                {t.industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-sm px-5 py-2.5 rounded-full border border-[var(--border)] text-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--accent)]/30 transition-colors cursor-default"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. Certifications — compact, no full section headers */}
        <section className="py-20 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-8">{t.certificationsEyebrow}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {t.certifications.map((item) => (
                  <div
                    key={item.title}
                    className="glass rounded-xl px-6 py-4 flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[var(--primary)] leading-snug mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-xs text-[var(--secondary)]">{item.institution}</p>
                    </div>
                    <span className="text-xs text-[var(--accent)] font-semibold flex-shrink-0 mt-0.5">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
