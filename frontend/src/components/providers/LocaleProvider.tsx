
import { useState, type ReactNode } from "react";
import { LocaleContext, type Locale } from "@/i18n";

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale] = useState<Locale>("vi");

  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  );
}
