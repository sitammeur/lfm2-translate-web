export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "ja", name: "Japanese" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export const getLanguageName = (code: LanguageCode): string => {
  return LANGUAGES.find((lang) => lang.code === code)?.name || code;
};
