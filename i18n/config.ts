export const locales = ["ar", "en"] as const;
export const defaultLocale = "ar" as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  ar: "rtl",
  en: "ltr",
};
