import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-overlay mx-auto flex max-w-3xl items-center justify-between border-x border-b px-8 py-5">
      <ul className="flex gap-2 text-lg">
        <li>
          <Link href="https://www.linkedin.com/in/letyassine/" target="_blank">
            <BsLinkedin />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/letyassine/gitcoder.me" target="_blank">
            <BsGithub />
          </Link>
        </li>
      </ul>
      <Link
        target="_blank"
        href="https://github.com/letyassine"
        className="group text-[11px]"
      >
        git commit -m{" "}
        <span className="group-hover:underline">'Built by Gitcoder'</span>
      </Link>
    </footer>
  );
};

export default Footer;
