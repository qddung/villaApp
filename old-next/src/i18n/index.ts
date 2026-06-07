"use client";

import { createContext, useContext } from "react";
import vi from "./vi.json";
import en from "./en.json";

export type Locale = "vi" | "en";

const dictionaries: Record<Locale, typeof vi> = { vi, en };

export const LocaleContext = createContext<Locale>("vi");

export function useTranslations() {
  const locale = useContext(LocaleContext);
  const dict = dictionaries[locale];

  function t(path: string): string {
    const keys = path.split(".");
    let result: unknown = dict;
    for (const key of keys) {
      if (result && typeof result === "object" && key in result) {
        result = (result as Record<string, unknown>)[key];
      } else {
        return path;
      }
    }
    return typeof result === "string" ? result : path;
  }

  return { t, locale };
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
