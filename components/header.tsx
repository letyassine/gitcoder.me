import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="border-overlay sticky top-0 z-[1000] mx-auto flex h-[73px] w-full max-w-3xl items-center justify-between border-x border-b bg-white/80 p-4 backdrop-blur-xl sm:p-6">
      <div className="flex items-center justify-center gap-2">
        <Link href="/" className="font-bold text-black">
          GITCODER
        </Link>
        <div className="hidden items-center gap-1.5 rounded-full bg-gray-100 py-0.5 pr-2 pl-1.5 sm:flex">
          <div className="relative">
            <div className="size-2 rounded-full bg-green-500" />
            <div className="absolute inset-0 size-2 animate-ping rounded-full bg-green-500/60 opacity-75" />
          </div>
          <span className="text-[12px] font-medium">Open to work</span>
        </div>
      </div>

      <ul className="flex gap-4 text-[13px] leading-[14px] font-semibold tracking-tighter">
        <li>
          <Link href="#about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://gitcoder.substack.com/"
            className="hover:underline"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://github.com/letyassine"
            className="hover:underline"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="bg-charcoal hover:bg-charcoal/90 px-3 py-2 text-white duration-75"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
