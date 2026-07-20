"use client";

import { useLang } from "@/lib/i18n/LangContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="group"
      aria-label="Language selector / Selector de idioma"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-label="Switch to English"
        aria-pressed={lang === "en"}
        className={cn(
          "w-8 h-8 flex items-center justify-center rounded-lg text-base leading-none transition-all duration-150",
          lang === "en"
            ? "bg-white/10 ring-1 ring-[var(--accent)]/60"
            : "opacity-45 hover:opacity-100 hover:bg-white/5"
        )}
      >
        <span aria-hidden="true">🇬🇧</span>
      </button>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-label="Cambiar a español"
        aria-pressed={lang === "es"}
        className={cn(
          "w-8 h-8 flex items-center justify-center rounded-lg text-base leading-none transition-all duration-150",
          lang === "es"
            ? "bg-white/10 ring-1 ring-[var(--accent)]/60"
            : "opacity-45 hover:opacity-100 hover:bg-white/5"
        )}
      >
        <span aria-hidden="true">🇪🇸</span>
      </button>
    </div>
  );
}
