"use client";
import Dir from "@/app/i18n/dir";
import { useT } from "next-i18next/client";

export default function ConnectPrompt() {
  const { t } = useT("home");
  return (
    <Dir as="section" className="p-8">
      <h1 className="text-3xl font-bold text-black sm:text-6xl dark:text-white">
        {t("ConnectPrompt")}
      </h1>
    </Dir>
  );
}
