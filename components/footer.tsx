import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Links = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/letyassine/",
    icon: ({ className }: { className: string }) => (
      <BsLinkedin className={className} />
    ),
  },
  {
    name: "github",
    href: "https://github.com/letyassine/gitcoder.me",
    icon: ({ className }: { className: string }) => (
      <BsGithub className={className} />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="border-overlay mx-auto flex max-w-3xl items-center justify-between border-x border-b px-8 py-3">
      <ul className="flex gap-1 text-lg">
        {Links.map((link) => (
          <a
            href={link.href}
            key={link.name}
            target="_blank"
            className="group hover:text-fd-foreground relative grid h-8 w-8 place-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
              className="absolute -top-[0.5px] -right-0.25 z-10 opacity-20 duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            >
              <path d="M21 8V5a1 1 0 0 0-1-1h-3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
              className="absolute -bottom-[0.5px] -left-0.25 z-10 opacity-20 duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-100"
            >
              <path d="M3 16v3a1 1 0 0 0 1 1h3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
              className="absolute -right-0.25 -bottom-[0.5px] z-10 opacity-20 duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-100"
            >
              <path d="M16 21h3a1 1 0 0 0 1-1v-3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
              className="absolute -top-[0.5px] -left-0.25 z-10 opacity-20 duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            >
              <path d="M8 3H5a1 1 0 0 0-1 1v3" />
            </svg>
            <div className="bg-grid-lines absolute inset-0 ![background-position:-15px_-15px] opacity-0 duration-300 ease-out group-hover:opacity-50" />
            <link.icon className="h-4 w-4 fill-current duration-1000 backface-hidden perspective-distant transform-3d group-hover:rotate-x-180 group-hover:-rotate-y-180 group-hover:rotate-z-180" />
          </a>
        ))}
      </ul>
      <Link
        target="_blank"
        href="https://x.com/thegitcoder"
        className="group text-[11px] transition-all duration-300"
      >
        Built by <span className="group-hover:underline">Gitcoder</span>{" "}
        <span className="text-[13px]">⎯⎯⟡</span>
      </Link>
    </footer>
  );
};

export default Footer;
