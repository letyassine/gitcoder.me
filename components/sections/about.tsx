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
      <div className="space-y-2 px-8 py-5.5">
        <p>
          I'm Yassine — a Frontend Engineer from Morocco passionate about
          building meaningful web experiences that combine technical expertise
          with creative innovation. Specializing in React and the Next.js
          ecosystem.
        </p>
        <p>
          I've worked with various tech companies, sharing knowledge through
          content creation and public speaking while exploring the intersection
          of code and design.
        </p>
        <p>
          When I'm not crafting user interfaces, you'll find me diving into
          UI/UX design, practicing Cardistry, or pursuing other creative
          endeavors that inspire my approach to web development.
        </p>
      </div>
    </section>
  );
}
