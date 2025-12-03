"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/theme-toggle";
import Button from "../ui/button";

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
        "border-overlay dark:border-charcoal-gray sticky top-0 z-[1000] mx-auto flex h-[73px] w-full max-w-3xl items-center justify-between border-x border-b p-4 backdrop-blur-xl sm:p-6",
        isScrolled ? "dark:bg-charcoal-black/80 bg-white/80" : "",
      )}
    >
      <div className="cursed bg-fd-background/40 absolute inset-0 -z-10 h-full w-full backdrop-blur-xs" />
      <div className="flex items-center justify-center gap-2 dark:text-white">
        <Link href="/" className="font-bold text-black dark:text-white">
          GITCODER
        </Link>
        <div className="hidden items-center gap-1.5 rounded-full bg-gray-100 py-0.5 pr-2 pl-1.5 sm:flex dark:bg-gray-200/20">
          <div className="relative">
            <div className="size-2 rounded-full bg-green-500" />
            <div className="absolute inset-0 size-2 animate-ping rounded-full bg-green-500/60 opacity-75" />
          </div>
          <span className="text-[12px] font-medium">Open to work</span>
        </div>
      </div>

      <ul className="flex items-center justify-center gap-4 text-[13px] leading-[14px] font-semibold tracking-tighter dark:text-white">
        <li className="leading-0 lg:hidden">
          <ThemeToggle />
        </li>
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
            href="https://drive.proton.me/urls/1Y3S29VG1M#AD4ndecOGlgQ"
            target="_blank"
            className="hover:underline"
          >
            Resume
          </Link>
        </li>
        <li>
          <Button asChild>
            <Link href="/#contact">Contact</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
