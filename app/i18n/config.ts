import type { I18nConfig } from "next-i18next/proxy";

const i18nConfig: I18nConfig = {
  supportedLngs: ["en", "ar"],
  fallbackLng: "en",
  ns: ["home", "header", "how-i-build"],
  resourceLoader: (language, namespace) =>
    import(`./locales/${language}/${namespace}.json`),
};

export default i18nConfig;
