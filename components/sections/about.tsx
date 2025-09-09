import Image from "next/image";
import LogoCloud from "../ui/logo-cloud";

export default function About() {
  return (
    <section className="group scroll-mt-[73px]" id="about">
      <h2 className="bg-cream border-overlay border-b px-8 py-5.5 text-xl font-bold text-black uppercase">
        About Me
      </h2>
      <Image
        src="/hero.jpg"
        className="grayscale transition-all duration-300 group-hover:grayscale-0"
        alt="about"
        height={440}
        width={1536}
      />
      <div className="space-y-3 px-8 py-5.5">
        <p>
          I am a software engineer especially focused on frontend development,
          architecting React/Next.js solutions, and creating exceptional user
          experiences.
        </p>
        <p>
          My passion for frontend technologies continually drives me to advance
          my skill set and adopt the latest industry best practices, I'm also
          passionate about content creation and public speaking in the tech
          community.
        </p>
        <p>Powered by a carefully curated tech stack.</p>
      </div>
      <LogoCloud />
    </section>
  );
}
