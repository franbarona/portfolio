import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const getButtonClass = (isActive: boolean) =>
    `cursor-pointer disabled:cursor-default ${
      isActive ? "text-slate-200" : "text-slate-400"
    }`;

  return (
    <div className="flex gap-2">
      {LANGUAGES.map((lang, index) => (
        <div key={lang.code} className="flex items-center gap-2">
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            disabled={i18n.language === lang.code}
            className={getButtonClass(i18n.language === lang.code)}
          >
            {lang.label}
          </button>
          {index < LANGUAGES.length - 1 && <span>|</span>}
        </div>
      ))}
    </div>
  );
}