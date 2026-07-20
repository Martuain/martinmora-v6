"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/lib/i18n/LangContext";
import { translations } from "@/lib/translations";

export default function TermsPage() {
  const { lang } = useLang();
  const t = translations[lang].terms;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-narrow">
          <h1 className="text-4xl font-semibold text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
            {t.title}
          </h1>
          <div className="space-y-6 text-[var(--secondary)] text-sm leading-relaxed">
            {t.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              {t.contactPrefix}{" "}
              <a href="mailto:martin.f.mora@gmail.com" className="text-[var(--accent)]">
                martin.f.mora@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
