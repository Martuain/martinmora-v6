"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/lib/i18n/LangContext";
import { translations } from "@/lib/translations";

export function Industries() {
  const { lang } = useLang();
  const t = translations[lang].home.industries;

  return (
    <section className="py-28 section-divider">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="display-md text-[var(--primary)] max-w-3xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            {t.title}
          </h2>
          <p className="text-[var(--secondary)] text-lg max-w-2xl mb-16">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="font-semibold text-[var(--primary)] mb-2">{industry.name}</h3>
              <p className="text-sm text-[var(--secondary)] leading-relaxed">{industry.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
