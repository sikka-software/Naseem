import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, defaultLocale, Locale } from "./config";

export default getRequestConfig(async ({ locale: rawLocale }) => {
  const locale = rawLocale || defaultLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    return notFound();
  }

  return {
    timeZone: "Asia/Riyadh",
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    // Set a default time zone to avoid ENVIRONMENT_FALLBACK warning
    // This ensures consistent date/time formatting across server and client
  };
});
