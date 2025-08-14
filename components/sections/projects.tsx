import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import { ProjectData } from "@/types/types";
import Link from "next/link";

interface ProjectProps extends ProjectData {
  index: number;
}

const Project = ({ title, image, tags, index, link }: ProjectProps) => {
  const topOffset = 145 + index * 70;
  const zIndex = 100 + index;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="sticky bg-white"
      style={{
        top: `${topOffset}px`,
        zIndex,
      }}
    >
      <div className="border-overlay flex h-[72px] items-center justify-between border-y px-8 py-5 text-sm font-medium">
        <Link
          href={link}
          className="hover:text-purple flex items-center gap-2 duration-100"
        >
          <span className="text-medium-gray">/</span>
          <h2>{title}</h2>
        </Link>
        <div className="hidden gap-2.5 sm:flex">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-2 text-[13px] leading-[14px] font-semibold tracking-tighter"
              style={{ backgroundColor: tag.color }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      <div onClick={handleClick} className="group relative cursor-pointer p-5">
        <Image
          className="rounded-xl transition-opacity duration-300 group-hover:opacity-90"
          src={image}
          height={1283}
          width={2048}
          alt={`${title} project`}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            View Project
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="border-overlay top-[73px] z-30 border-y" id="projects">
      <h2 className="bg-cream sticky top-[73px] z-50 w-full px-8 py-5.5 text-xl font-bold text-black uppercase">
        Projects
      </h2>

      {PROJECTS.map((project, index) => (
        <Project
          key={project.title}
          title={project.title}
          image={project.image}
          link={project.link}
          tags={project.tags}
          index={index}
        />
      ))}
    </section>
  );
}
