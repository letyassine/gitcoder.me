import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import PatternDivider from "@/components/ui/pattern-divider";
import ConnectPrompt from "@/components/sections/connect-prompt";
import BookGallrey from "@/components/sections/book-gallery";
import Crafts from "@/components/sections/crafts";

export default function Home() {
  return (
    <main className="border-overlay dark:border-charcoal-gray mx-auto max-w-3xl border-x">
      <Hero />
      <PatternDivider />
      <About />
      <PatternDivider />
      <Experience />
      <PatternDivider className="" />
      <Projects />
      <PatternDivider className="border-b" />
      <Crafts />
      <BookGallrey />
      <PatternDivider height="h-24" className="border-b" />
      <ConnectPrompt />
      <PatternDivider height="h-24" className="border-t" />
      <Contact />
    </main>
  );
}
