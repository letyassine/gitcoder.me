"use client";
import Image from "next/image";
import LogoCloud from "../ui/logo-cloud";
import hero from "/public/new-hero.jpg";
import { useT } from "next-i18next/client";
import Dir from "@/app/i18n/dir";

export default function About() {
  const { t } = useT("home");

  return (
    <section className="group scroll-mt-[73px]" id="about">
      <Dir
        as="h2"
        className="bg-cream border-overlay dark:bg-charcoal-black dark:border-charcoal-gray border-b px-8 py-5.5 text-xl font-bold text-black uppercase dark:text-white"
      >
        {t("AboutMe")}
      </Dir>
      <Image
        src={hero}
        className="grayscale transition-all duration-300 group-hover:grayscale-0"
        alt="about"
        height={440}
        width={1536}
        placeholder="blur"
      />
      <Dir as="div" className="space-y-3 px-8 py-5.5 dark:text-white">
        <p>{t("AboutMeContent.Paragraph1")}</p>
        <p>{t("AboutMeContent.Paragraph2")}</p>
        <p>{t("AboutMeContent.Paragraph3")}</p>
      </Dir>
      <LogoCloud />
    </section>
  );
}
