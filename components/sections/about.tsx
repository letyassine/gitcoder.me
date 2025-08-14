import LogoCloud from "../logo-cloud";

export default function About() {
  return (
    <section className="group">
      <h2 className="bg-cream border-overlay border-b px-8 py-5.5 text-xl font-bold text-black uppercase">
        About Me
      </h2>
      <img
        src="/hero.jpg"
        className="grayscale transition-all duration-300 group-hover:grayscale-0"
      />
      <div className="space-y-6 px-8 py-5.5">
        <p>
          I'm Yassine — a software engineer especially focused on frontend
          development, architecting React/Next.js solutions, and creating
          exceptional user experiences. I'm also passionate about content
          creation and public speaking in the tech community,
        </p>
        <p>Powered by a carefully curated tech stack.</p>
      </div>
      <LogoCloud />
    </section>
  );
}
