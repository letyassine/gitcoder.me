"use client";

import Link from "next/link";
import Dir from "@/app/i18n/dir";
import { useT } from "next-i18next/client";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const SOCIALS = [
  {
    icon: <FaInstagram />,
    label: "17k+",
    link: "https://instagram.com/gitcoder",
  },
  {
    icon: <FaLinkedinIn />,
    label: "6k",
    link: "https://linkedin.com/in/letyassine",
  },
  {
    icon: <FaXTwitter />,
    label: "101",
    link: "https://x.com/thegitcoder",
  },
  {
    icon: <FaYoutube />,
    label: "79",
    link: "https://youtube.com/@thegitcoder",
  },
];

export default function Hero() {
  const { t } = useT("home");

  return (
    <>
      <Dir as="section" className="px-6 py-8 sm:px-8">
        <h1 className="max-w-xl text-3xl font-black sm:text-4xl sm:leading-10 sm:font-semibold dark:text-white">
          <span className="text-purple">{t("HeroTitleFocused")}</span>{" "}
          {t("HeroTitleRest")}
        </h1>
      </Dir>
      <Dir
        as="div"
        className="border-overlay bg-overlay dark:border-charcoal-gray dark:bg-charcoal-gray text-dim-gray flex justify-between gap-px border-y dark:text-white"
      >
        {SOCIALS.map((social) => (
          <Link
            key={social.label}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:ring-purple bg-cream dark:bg-charcoal-black flex flex-1 items-center justify-center gap-1 py-6 transition-colors duration-200 hover:bg-light-gray hover:text-charcoal-black hover:no-underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:outline-none"
          >
            {social.icon}
            {social.label}
          </Link>
        ))}
      </Dir>
    </>
  );
}
