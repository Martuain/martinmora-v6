"use client";

import { Linkedin, Calendar } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig } from "@/lib/site";
import { useLang } from "@/lib/i18n/LangContext";
import { translations } from "@/lib/translations";

export function ContactPageClient() {
  const { lang } = useLang();
  const t = translations[lang].contact;

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[300px] blob-teal rounded-full blur-[120px] opacity-20" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Reveal>
                <p className="eyebrow mb-6">{t.eyebrow}</p>
                <h1
                  className="display-lg text-[var(--primary)] mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.title}
                </h1>
                <p className="text-lg text-[var(--secondary)] leading-relaxed">
                  {t.subtitle}
                </p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Quick options */}
              <Reveal>
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-6">
                    {t.quickestWays}
                  </p>

                  <a
                    href={siteConfig.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 glass glass-hover rounded-2xl p-6 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)]">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                        {t.bookCallTitle}
                      </p>
                      <p className="text-xs text-[var(--secondary)] mt-1">
                        {t.bookCallSubtitle}
                      </p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 glass glass-hover rounded-2xl p-6"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)]">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                        {t.connectLinkedin}
                      </p>
                      <p className="text-xs text-[var(--secondary)] mt-1">Martin Fernando Mora</p>
                    </div>
                  </a>

                  {/* Response note */}
                  <div className="mt-8 glass rounded-2xl p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-3">
                      {t.whatToExpect}
                    </p>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      {t.expectBody}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Contact form */}
              <Reveal delay={0.15}>
                <div className="glass rounded-3xl p-8">
                  <p className="text-sm font-semibold text-[var(--primary)] mb-6">
                    {t.orSendMessage}
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
