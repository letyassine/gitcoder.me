"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { JSX } from "react";
import BOOKS from "@/data/books";
import PatternDivider from "../ui/pattern-divider";

const animationStyle = "transition-all duration-500 ease will-change-auto";

export default function BookGallrey(): JSX.Element | null {
  const [focusedIndex, setFocusedIndex] = useState(2);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    if (isSafari || isMobile) {
      setShouldRender(false);
    }
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <section>
      <PatternDivider className="" />
      <h2 className="bg-cream border-overlay dark:bg-charcoal-black dark:border-charcoal-gray w-full border-y px-8 py-5.5 text-xl font-bold text-black uppercase dark:text-white">
        BOOKSHELF
      </h2>
      <div className="border-overlay overflow-hidden border-b p-8">
        <svg className="invisible absolute inset-0">
          <defs>
            <filter id="paper" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="8"
                result="noise"
              />
              <feDiffuseLighting
                in="noise"
                lightingColor="white"
                surfaceScale="1"
                result="diffLight"
              >
                <feDistantLight azimuth="45" elevation="35" />
              </feDiffuseLighting>
            </filter>
          </defs>
        </svg>
        <div role="list" className="flex flex-row justify-center space-x-4">
          {BOOKS.map((book, index) => (
            <button
              role="listitem"
              key={book.title}
              onClick={() => {
                if (index === focusedIndex) {
                  setFocusedIndex(-1);
                } else {
                  setFocusedIndex(index);
                }
              }}
              className={cn(
                "flex shrink-0 cursor-pointer flex-row items-center outline-none",
                focusedIndex !== index &&
                  "hover:-translate-y-4 focus-visible:-translate-y-4",
                focusedIndex === index ? "basis-60" : "basis-12",
                animationStyle,
              )}
              style={{ perspective: "1000px", WebkitPerspective: "1000px" }}
            >
              <div
                className={cn(
                  "z-50 h-full w-[44px] shrink-0 origin-right py-4 brightness-[0.80] contrast-[2.00]",
                  animationStyle,
                )}
                style={{
                  backgroundColor: book.spineBackgroundColor,
                  color: book.spineForegroundColor,
                  transformStyle: "preserve-3d",
                  transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                    focusedIndex === index ? "-60deg" : "0deg"
                  }) rotateZ(0deg) skew(0deg, 0deg)`,
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none fixed top-0 left-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
                />
                <h2
                  className="text-md m-auto font-medium"
                  style={{ writingMode: "vertical-lr" }}
                >
                  {book.title}
                </h2>
              </div>
              <div
                className={cn(
                  "relative z-10 h-72 shrink-0 origin-left overflow-hidden border-gray-900 brightness-[0.80] contrast-[2.00]",
                  animationStyle,
                )}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                    focusedIndex === index ? "30deg" : "90deg"
                  }) rotateZ(0deg) skew(0deg, 0deg)`,
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none fixed top-0 right-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-0 left-0 z-50 h-full w-full"
                  style={{
                    background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,
                  }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className={cn("h-full w-48 bg-cover", animationStyle)}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
