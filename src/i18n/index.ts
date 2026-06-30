import { en } from "./en";
import { zh } from "./zh";

export const languages = {
  en,
  zh
};

export type Language = keyof typeof languages;
export type SiteCopy = typeof en;

export function getCopy(language: Language = "en"): SiteCopy {
  return languages[language] ?? languages.en;
}
