import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="border-overlay sticky top-0 z-[1000] mx-auto flex h-[73px] w-full max-w-3xl items-center justify-between border-x border-b bg-white/80 p-4 backdrop-blur-xl sm:p-6">
      <Link href="/" className="font-bold">
        GITCODER
      </Link>
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
          <Link href="#contact" className="bg-charcoal px-3 py-2 text-white">
            Hire Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
