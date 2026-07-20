"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/lib/i18n/LangContext";
import { translations } from "@/lib/translations";

export default function NotFound() {
  const { lang } = useLang();
  const t = translations[lang].notFound;

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center">
        <div className="container text-center">
          <p className="eyebrow mb-6">{t.eyebrow}</p>
          <h1 className="display-lg text-[var(--primary)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            {t.title}
          </h1>
          <p className="text-lg text-[var(--secondary)] mb-10">
            {t.body}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-black font-semibold text-sm hover:bg-[var(--accent-dim)] transition-colors"
          >
            <ArrowLeft size={14} />
            {t.cta}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
