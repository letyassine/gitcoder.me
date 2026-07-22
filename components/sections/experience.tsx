"use client";

import Link from "next/link";
import { JobExprienceData } from "@/types/types";
import { useCurrentJobs, usePreviousJobs } from "@/data/experience";
import { useT } from "next-i18next/client";
import Dir from "@/app/i18n/dir";

function JobExperience({
  title,
  date,
  companyName,
  companyLink,
  location,
}: JobExprienceData) {
  return (
    <Dir
      as="div"
      className="border-overlay dark:bg-charcoal-black dark:border-charcoal-gray border-b px-8 py-5.5 text-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="dark:text-light-gray font-medium">{title}</div>
          {companyName ? (
            <div className="text-charcoal/80 dark:text-silver-gray mt-1 text-xs capitalize">
              {companyLink ? (
                <Link
                  className="dark:hover:text-light-gray hover:underline"
                  target="_blank"
                  href={companyLink}
                >
                  {companyName}
                </Link>
              ) : (
                <span>{companyName}</span>
              )}{" "}
              • {location}
            </div>
          ) : null}
        </div>
        <span className="text-charcoal/80 dark:text-silver-gray text-xs md:text-sm">
          [{date}]
        </span>
      </div>
    </Dir>
  );
}

export default function Experience() {
  const { t } = useT("home");
  const PREVIOUS_JOBS = usePreviousJobs();
  const CURRENT_JOBS = useCurrentJobs();

  return (
    <Dir
      as="section"
      className="border-overlay dark:bg-charcoal-black top-[73px] z-30"
      id="experience"
    >
      <h2 className="bg-cream border-overlay dark:bg-charcoal-black dark:border-charcoal-gray dark:text-light-gray sticky top-[73px] z-50 border-b px-8 py-5.5 text-xl font-bold text-black uppercase">
        {t("Experience")}
      </h2>
      <div>
        <div
          className="border-overlay dark:bg-dark-gary dark:border-charcoal-gray dark:text-light-gray sticky z-40 border-b bg-white"
          style={{ top: "145px" }}
        >
          <div className="flex items-center gap-2 px-8 py-5.5 text-sm font-medium">
            <span className="text-medium-gray dark:text-dim-gray">/</span>
            <h3>{t("Current")}</h3>
          </div>
        </div>
        {CURRENT_JOBS.map((job) => (
          <JobExperience key={job.companyName || job.title} {...job} />
        ))}
      </div>
      <div className="bg-cream sticky z-50">
        <div className="border-overlay dark:bg-dark-gary dark:border-charcoal-gray dark:text-light-gray -mt-px flex items-center gap-2 border-t border-b bg-white px-8 py-5.5 text-sm font-medium">
          <span className="text-medium-gray dark:text-dim-gray">/</span>
          <h3>{t("Previous")}</h3>
        </div>
        {PREVIOUS_JOBS.map((job) => (
          <JobExperience key={job.companyName} {...job} />
        ))}
      </div>
    </Dir>
  );
}
