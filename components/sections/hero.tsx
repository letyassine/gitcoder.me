"use client";

import Dir from "@/app/i18n/dir";
import { useT } from "next-i18next/client";

export default function Hero() {
  const { t } = useT("home");

  return (
    <Dir as="section" className="px-6 py-8 sm:px-8">
      <h1 className="max-w-xl text-3xl font-black sm:text-4xl sm:leading-10 sm:font-semibold dark:text-white">
        <span className="text-purple">{t("HeroTitleFocused")}</span>{" "}
        {t("HeroTitleRest")}
      </h1>
    </Dir>
  );
}
