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
    <div className="border-overlay border-b px-8 py-5.5 text-sm">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">{title}</div>
          {companyName ? (
            <div className="text-charcoal/80 mt-1 text-xs capitalize">
              {companyLink ? (
                <Link
                  className="hover:underline"
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
        <span className="text-charcoal/80">[{date}]</span>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="border-overlay top-[73px] z-30" id="experience">
      <h2 className="bg-cream border-overlay sticky top-[73px] z-50 border-b px-8 py-5.5 text-xl font-bold text-black uppercase">
        Experience
      </h2>

      {/* Current Section */}
      <div>
        <div
          className="border-overlay sticky z-40 border-b bg-white"
          style={{ top: "145px" }}
        >
          <div className="flex items-center gap-2 px-8 py-5.5 text-sm font-medium">
            <span className="text-medium-gray">/</span>
            <h3>Current</h3>
          </div>
        </div>

        {CURRENT_JOBS.map((job) => (
          <JobExperience
            key={job.companyName || job.title}
            title={job.title}
            companyName={job.companyName}
            companyLink={job.companyLink}
            location={job.location}
            date={job.date}
          />
        ))}
      </div>

      {/* Previous Section */}
      <div className="bg-cream sticky z-50">
        <div className="border-overlay -mt-px flex items-center gap-2 border-t border-b bg-white px-8 py-5.5 text-sm font-medium">
          <span className="text-medium-gray">/</span>
          <h3>Previous</h3>
        </div>

        {PREVIOUS_JOBS.map((job) => (
          <JobExperience
            key={job.companyName}
            title={job.title}
            companyName={job.companyName}
            companyLink={job.companyLink}
            location={job.location}
            date={job.date}
          />
        ))}
      </div>
    </section>
  );
}
