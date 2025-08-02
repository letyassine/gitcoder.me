"use client";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import PatternDivider from "@/components/pattern-divider";
import ConnectPrompt from "@/components/sections/connect-prompt";

export default function Home() {
  return (
    <main className="border-overlay mx-auto max-w-3xl border-x">
      <Hero />
      <PatternDivider />
      <About />
      <PatternDivider />
      <Experience />
      <PatternDivider height="h-[59px]" className="" />
      <Projects />
      <PatternDivider height="h-24" className="border-b" />
      <ConnectPrompt />
      <PatternDivider height="h-24" className="border-t" />
      <Contact />
    </main>
  );
}
