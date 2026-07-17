"use client";
import { JobExprienceData } from "@/types/types";
import { useT } from "next-i18next/client";

export function usePreviousJobs(): JobExprienceData[] {
  const { t } = useT("home");

  return [
    {
      title: t("Senior Frontend Developer"),
      companyName: "Codia",
      companyLink: "https://www.codiadev.it/",
      location: t("Remote"),
      date: t("Apr 2024 – Nov 2024"),
    },
    {
      title: t("Full–Stack Instructor"),
      companyName: "GoMyCode",
      companyLink: "https://gomycode.com/",
      location: t("Casablanca, Morocco"),
      date: t("Oct 2022 – Apr 2024"),
    },
    {
      title: t("Frontend Developer"),
      companyName: "Blocks BV",
      companyLink: "https://www.blocxs.one/",
      location: t("Remote"),
      date: t("Jul 2022 – Oct 2022"),
    },
  ];
}

export function useCurrentJobs(): JobExprienceData[] {
  const { t } = useT("home");

  return [
    {
      title: t("Senior Frontend Developer"),
      companyName: "ValueEQ",
      companyLink: "https://www.valueeq.com/",
      location: t("Remote"),
      date: t("Dec 2024 – Apr 2026"),
    },
    {
      title: t("Public speaker & Content creator"),
      date: t("2021 – Present"),
    },
  ];
}
