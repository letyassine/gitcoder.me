"use client";

import { useState } from "react";
import Link from "next/link";
import CONTACT_LINKS from "@/data/contact-links";
import { MdContentCopy } from "react-icons/md";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className="border-overlay max-w-3xl border-t" id="contact">
      <h2 className="border-overlay border-b px-8 py-5.5 text-xl font-bold text-black uppercase">
        Contact
      </h2>
      <div className="grid grid-cols-3 gap-0">
        {CONTACT_LINKS.map((link, index) => {
          const isLastRow = index >= 6;
          const isLastColumn = (index + 1) % 3 === 0;
          const isEmail = link.label === "Email";
          const isHovered = hoveredIndex === index;

          if (isEmail) {
            return (
              <div
                key={link.label}
                className={cn(
                  "border-overlay flex cursor-copy justify-center gap-2 p-8 text-sm transition-all duration-200 sm:justify-normal",
                  !isLastColumn && "border-r",
                  !isLastRow && "border-b",
                )}
                style={{
                  backgroundColor: isHovered ? link.color : "",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleEmailCopy(link.link)}
              >
                <span className="text-lg">
                  {isHovered ? <MdContentCopy /> : link.icon()}
                </span>
                <span className={copiedEmail ? "text-green-600" : ""}>
                  {copiedEmail ? (
                    "Copied!"
                  ) : (
                    <span className={"hidden sm:block"}>{link.label}</span>
                  )}
                </span>
              </div>
            );
          }

          return (
            <Link
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "border-overlay flex cursor-pointer justify-center gap-2 p-8 text-sm transition-all duration-200 hover:no-underline sm:justify-normal",
                !isLastColumn && "border-r",
                !isLastRow && "border-b",
              )}
              style={{
                backgroundColor: isHovered ? link.color : "",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="text-lg">{link.icon()}</span>
              <span>
                <span className={"hidden sm:block"}>{link.label}</span>
              </span>
            </Link>
          );
        })}
      </div>
      <div className="border-overlay mx-auto h-52 max-w-3xl border-t">
        <div className="border-overlay mx-auto flex max-w-lg flex-col items-center gap-6 border-x p-8">
          <h1 className="text-2xl font-black text-black">
            Got 30 minutes? Let's talk!
          </h1>
          <Link
            href="https://cal.com/gitcoder/30min"
            target="_blank"
            className="bg-charcoal hover:bg-charcoal/90 w-[210px] px-3 py-2 text-center text-[15px] font-medium tracking-tighter text-white duration-75"
          >
            Book a Call Now
          </Link>
        </div>
      </div>
    </section>
  );
}
