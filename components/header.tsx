"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "border-overlay sticky top-0 z-[1000] mx-auto flex h-[73px] w-full max-w-3xl items-center justify-between border-x border-b p-4 backdrop-blur-xl sm:p-6",
        isScrolled ? "bg-white/80" : "",
      )}
    >
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
          <Link href="/#about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/#projects" className="hover:underline">
            Projects
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
