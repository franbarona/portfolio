import { useTranslation } from "react-i18next";

const flagUk = (
<svg width="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circle">
      <circle cx="50" cy="50" r="50"/>
    </clipPath>
  </defs>

  <g clipPath="url(#circle)">
    <rect width="100" height="100" fill="#012169"/>
    <polygon points="0,0 10,0 100,90 100,100 90,100 0,10" fill="#FFFFFF"/>
    <polygon points="100,0 90,0 0,90 0,100 10,100 100,10" fill="#FFFFFF"/>
    <polygon points="0,0 5,0 100,95 100,100 95,100 0,5" fill="#C8102E"/>
    <polygon points="100,0 95,0 0,95 0,100 5,100 100,5" fill="#C8102E"/>
    <rect x="0" y="40" width="100" height="20" fill="#FFFFFF"/>
    <rect x="40" y="0" width="20" height="100" fill="#FFFFFF"/>
    <rect x="0" y="45" width="100" height="10" fill="#C8102E"/>
    <rect x="45" y="0" width="10" height="100" fill="#C8102E"/>
  </g>
</svg>
);

const spanishFlag = (
<svg width="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circle">
      <circle cx="50" cy="50" r="50"/>
    </clipPath>
  </defs>

  <g clipPath="url(#circle)">
    <rect x="0" y="0" width="100" height="33" fill="#AA151B"/>
    <rect x="0" y="33" width="100" height="34" fill="#F1BF00"/>
    <rect x="0" y="67" width="100" height="33" fill="#AA151B"/>
  </g>
</svg>
);

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <button className="w-6 h-full absolute top-[50%] -translate-y-[50%] left-0 p-0 border-0 bg-transparent cursor-pointer group animate-swing transition-all duration-300" onClick={() => i18n.changeLanguage(i18n.language === "en" ? "es" : "en")} aria-label="Toggle language">
      <div className="absolute top-0 left-0 grayscale-100 scale-75 opacity-40 transition-all duration-300 group-hover:-translate-3 group-hover:grayscale-10">
        {i18n.language === "en" ? spanishFlag : flagUk}
      </div>
      <div className="absolute border rounded-full border-slate-500/5 top-[50%] -translate-y-[50%] left-0 grayscale-65 saturate-110 transition-all duration-300  group-hover:grayscale-20 group-hover:scale-110 group-hover:drop-shadow-xl">
        {i18n.language === "en" ? flagUk : spanishFlag}
      </div>
    </button>
  );
}