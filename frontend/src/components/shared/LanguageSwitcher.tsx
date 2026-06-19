
import { useLocale } from "@/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  onChangeLocale: (locale: "vi" | "en") => void;
  variant?: "light" | "dark";
}

export default function LanguageSwitcher({ onChangeLocale, variant = "dark" }: LanguageSwitcherProps) {
  const locale = useLocale();

  return (
    <div className="flex items-center gap-1 rounded-full border border-gray-200/30 p-0.5">
      {(["vi", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => onChangeLocale(l)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors",
            locale === l
              ? "bg-gold text-primary"
              : variant === "light"
                ? "text-white/70 hover:text-white"
                : "text-gray-500 hover:text-gray-700"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

