"use client";

import { useRef, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import Project from "@/components/project";
import { PROJECTS, CONTACT_LINKS } from "../constants/constants";
import { ImageSpotlightEffect } from "@/components/image-effect";
import Link from "next/link";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
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

  const handleLinkClick = (link: "Email" | string, label: string) => {
    if (label === "Email") {
      handleEmailCopy(link);
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <main className="border-overlay mx-auto max-w-3xl border-x">
      {/* Hero Section */}
      <section className="px-6 py-8 sm:px-8">
        <h1 className="border-overlay max-w-xl text-3xl font-black sm:text-4xl sm:leading-10 sm:font-semibold">
          <span className="text-purple">Frontend Engineer</span> specializing in
          modern web technologies and pixel-perfect user experiences.
        </h1>
        <div id="about" />
      </section>

      <div className="border-overlay pattern-1 h-[65px] border-y" />

      {/* About Section */}
      <section className="group">
        <h2 className="bg-cream border-overlay border-b px-8 py-5.5 text-xl font-bold text-black uppercase">
          About Me
        </h2>
        <img
          src="/hero.jpg"
          className="grayscale transition-all duration-300 group-hover:grayscale-0"
        />
        <div className="space-y-2 px-8 py-5.5">
          <p>
            I'm Yassine — a Frontend Engineer from Morocco passionate about
            building meaningful web experiences that combine technical expertise
            with creative innovation.
          </p>
          <p>
            I've worked with various tech companies, sharing knowledge through
            content creation and public speaking while exploring the
            intersection of code and design.
          </p>
          <p>
            When I'm not crafting user interfaces, you'll find me diving into
            UI/UX design, practicing Cardistry, or pursuing other creative
            endeavors that inspire my approach to web development.
          </p>
        </div>
      </section>

      <div className="border-overlay pattern-1 h-[59px] border-t" />

      {/* Projects Section */}
      <section
        ref={containerRef}
        className="border-overlay top-[73px] z-30 border-y"
        id="projects"
      >
        <h2 className="bg-cream sticky top-[73px] z-50 w-full px-8 py-5.5 text-xl font-bold text-black uppercase">
          Projects
        </h2>

        {PROJECTS.map((project, index) => (
          <Project
            key={project.title}
            title={project.title}
            image={project.image}
            link={project.link}
            tags={project.tags}
            index={index}
          />
        ))}
      </section>

      <div className="border-overlay pattern-1 h-24 border-b" id="contact" />

      {/* CTA Section */}
      <section className="p-8">
        <h1 className="text-3xl font-bold text-black sm:text-6xl">
          Think we'd work well together? I think so too
        </h1>
      </section>

      <div className="border-overlay pattern-1 h-24 border-t" />

      {/* Contact Section - Outside main container */}
      <section className="border-overlay max-w-3xl border-y">
        <h2 className="px-8 py-5.5 text-xl font-bold text-black uppercase">
          Contact
        </h2>
        <ImageSpotlightEffect src="/contact.jpg" alt="Contact" />
        <div className="grid grid-cols-3 gap-0">
          {CONTACT_LINKS.map((link, index) => {
            const isLastRow = index >= 3;
            const isLastColumn = (index + 1) % 3 === 0;
            const isEmail = link.label === "Email";
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={link.label}
                className={`flex justify-center gap-2 p-8 text-sm transition-all duration-200 sm:justify-normal ${
                  !isLastColumn ? "border-r" : ""
                } ${!isLastRow ? "border-b" : ""} border-gray-200 ${isEmail ? "cursor-copy" : "cursor-pointer"}`}
                style={{
                  backgroundColor: isHovered ? link.color : "",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleLinkClick(link.link, link.label)}
              >
                <span className="text-lg">
                  {isEmail && isHovered ? <MdContentCopy /> : link.icon()}
                </span>
                <span
                  className={isEmail && copiedEmail ? "text-green-600" : ""}
                >
                  {isEmail && copiedEmail ? (
                    "Copied!"
                  ) : (
                    <span className={"hidden sm:block"}>{link.label}</span>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <div className="border-overlay mx-auto h-52 max-w-3xl border-b">
        <div className="border-overlay mx-auto flex max-w-lg flex-col items-center gap-6 border-x p-8">
          <h1 className="text-2xl font-black text-black">
            Got 30 minutes? Let's talk!
          </h1>
          <Link
            href="https://cal.com/gitcoder/30min"
            target="_blank"
            className="bg-charcoal hover:bg-charcoal/90 w-[210px] px-3 py-2 text-center text-[15px] text-white duration-75"
          >
            Book a Call Now
          </Link>
        </div>
      </div>
    </main>
  );
}
