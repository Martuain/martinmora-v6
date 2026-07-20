"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextValue | undefined>(undefined);

const STORAGE_KEY = "martinmora-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Resolve persisted / browser language preference after mount
  // (kept in useEffect to avoid SSR/client hydration mismatches).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") {
        setLangState(stored);
        document.documentElement.lang = stored;
        return;
      }
      const browserPrefersSpanish = window.navigator.language
        ?.toLowerCase()
        .startsWith("es");
      const resolved: Lang = browserPrefersSpanish ? "es" : "en";
      setLangState(resolved);
      document.documentElement.lang = resolved;
    } catch {
      // localStorage unavailable (e.g. private browsing) — default to English
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage errors
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  };

  const toggleLang = () => setLang(lang === "en" ? "es" : "en");

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return ctx;
}
