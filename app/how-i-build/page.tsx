"use client";

import { motion } from "motion/react";
import Contact from "@/components/sections/contact";
import { useT } from "next-i18next/client";
import Dir from "@/app/i18n/dir";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function HowIBuildPage() {
  const { t } = useT("how-i-build");

  return (
    <main className="border-overlay dark:border-charcoal-gray dark:text-light-gray mx-auto max-w-3xl border-x">
      <Dir as="div">
        <motion.section
          className="px-6 py-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border-overlay dark:border-charcoal-gray border-b pb-6"
          >
            <h1 className="dark:text-light-gray text-2xl font-semibold text-black">
              {t("How I build")}
            </h1>
            <p className="dark:text-silver-gray mt-1">
              {t("How I build things and my experience.")}
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6"
          >
            {t(
              "I build modern, scalable web applications that are fast, maintainable, and production‑ready from day one.",
            )}
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4"
          >
            {t(
              "When you work with me, you don't just get features — you get clean architecture, thoughtful structure, and a codebase that won't slow you down six months later.",
            )}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="dark:text-light-gray mt-12 text-lg font-semibold text-black uppercase"
          >
            {t("My Stack")}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4"
          >
            {t("I use tools that reduce friction and speed up delivery:")}
          </motion.p>
          <motion.ul
            variants={container}
            className="mt-2 list-disc space-y-1 pl-6"
          >
            <motion.li
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="font-semibold dark:text-white">
                {t("Next.js 16 —")}
              </span>{" "}
              {t("Full‑stack React with server components and streaming")}
            </motion.li>
            <motion.li
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="font-semibold dark:text-white">
                {t("tRPC + React Query —")}
              </span>{" "}
              {t("End‑to‑end type safety and smart data caching")}
            </motion.li>
            <motion.li
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="font-semibold dark:text-white">
                {t("Cloudflare R2 —")}
              </span>{" "}
              {t("Secure, cost‑efficient file storage")}
            </motion.li>
            <motion.li
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="font-semibold dark:text-white">
                {t("Tailwind CSS —")}
              </span>{" "}
              {t("Fast, consistent UI development")}
            </motion.li>
            <motion.li
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="font-semibold dark:text-white">
                {t("Zustand, Motion, date‑fns —")}
              </span>{" "}
              {t("Clean state, smooth UX, reliable utilities")}
            </motion.li>
            <motion.li
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="font-semibold dark:text-white">
                {t("Prettier —")}
              </span>{" "}
              {t("Consistent, readable code")}
            </motion.li>
          </motion.ul>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4"
          >
            {t("This stack lets me move fast without sacrificing quality.")}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="dark:text-light-gray mt-12 text-lg font-semibold text-black uppercase"
          >
            {t("Built to Scale")}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4"
          >
            {t("I focus on:")}
          </motion.p>
          <motion.ul
            variants={container}
            className="mt-2 list-disc space-y-1 pl-6"
          >
            <motion.li
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {t("Performance")}
            </motion.li>
            <motion.li
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {t("Type safety")}
            </motion.li>
            <motion.li
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {t("Clear structure")}
            </motion.li>
            <motion.li
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {t("Fast iteration")}
            </motion.li>
          </motion.ul>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-12"
          >
            {t(
              "I also use AI to accelerate test writing and reduce boilerplate — so we ship with confidence, not guesswork.",
            )}
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4"
          >
            {t(
              "If you're building a SaaS, dashboard, or modern web platform, I can help you ship faster with a foundation that lasts.",
            )}
          </motion.p>
        </motion.section>
      </Dir>
      <Contact />
    </main>
  );
}
