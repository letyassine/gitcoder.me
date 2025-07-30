import Image from "next/image";
import { ProjectData } from "@/types/types";

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
      <div className="border-overlay flex items-center justify-between border-y px-8 py-5 text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="text-medium-gray">/</span>
          <h2>{title}</h2>
        </div>
        <div className="flex gap-2.5">
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

export default Project;
