import Link from "next/link";
import { JobExprienceData } from "@/types/types";
import { CURRENT_JOBS, PREVIOUS_JOBS } from "@/data/experience";

function JobExperience({
  title,
  date,
  companyName,
  companyLink,
  location,
}: JobExprienceData) {
  return (
    <div className="border-overlay dark:bg-charcoal-black border-b px-8 py-5.5 text-sm dark:border-[#1a1a1a]">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium dark:text-[#e8e8e8]">{title}</div>
          {companyName ? (
            <div className="text-charcoal/80 mt-1 text-xs capitalize dark:text-[#a8a8a8]">
              {companyLink ? (
                <Link
                  className="hover:underline dark:hover:text-[#e8e8e8]"
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
        <span className="text-charcoal/80 dark:text-[#a8a8a8]">[{date}]</span>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      className="border-overlay dark:bg-charcoal-black top-[73px] z-30"
      id="experience"
    >
      <h2 className="bg-cream border-overlay dark:bg-charcoal-black sticky top-[73px] z-50 border-b px-8 py-5.5 text-xl font-bold text-black uppercase dark:border-[#1a1a1a] dark:text-[#e8e8e8]">
        Experience
      </h2>
      <div>
        <div
          className="border-overlay sticky z-40 border-b bg-white dark:border-[#1a1a1a] dark:bg-[#212121] dark:text-[#e8e8e8]"
          style={{ top: "145px" }}
        >
          <div className="flex items-center gap-2 px-8 py-5.5 text-sm font-medium">
            <span className="text-medium-gray dark:text-[#707070]">/</span>
            <h3>Current</h3>
          </div>
        </div>
        {CURRENT_JOBS.map((job) => (
          <JobExperience key={job.companyName || job.title} {...job} />
        ))}
      </div>
      <div className="bg-cream sticky z-50">
        <div className="border-overlay -mt-px flex items-center gap-2 border-t border-b bg-white px-8 py-5.5 text-sm font-medium dark:border-[#1a1a1a] dark:bg-[#212121] dark:text-[#e8e8e8]">
          <span className="text-medium-gray dark:text-[#707070]">/</span>
          <h3>Previous</h3>
        </div>
        {PREVIOUS_JOBS.map((job) => (
          <JobExperience key={job.companyName} {...job} />
        ))}
      </div>
    </section>
  );
}
