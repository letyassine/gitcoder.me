import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({
  title,
  description,
  demoLink,
  image,
}: {
  title: string;
  description: string;
  demoLink: string;
  image: string;
}) => {
  return (
    <Link
      href={demoLink}
      className="text-sm max-w-72 flex flex-col items-center justify-center text-center"
    >
      <Image
        className="rounded-lg"
        src={image}
        width={274}
        height={148}
        alt={title}
      />
      <div className="mt-4">
        <h1 className="font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Project;
