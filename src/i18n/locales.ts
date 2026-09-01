export const locales = ["es", "en", "ca"] as const;
export const defaultLocale = "ca";

export type Locale = (typeof locales)[number];

export function isLocale(locale: string | undefined): locale is Locale {
  return locales.includes(locale as Locale);
}
