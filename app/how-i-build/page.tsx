import Contact from "@/components/sections/contact";

export default function HowIBuildPage() {
  return (
    <main className="border-overlay dark:border-charcoal-gray dark:text-light-gray mx-auto max-w-3xl border-x">
      <section className="px-6 py-12">
        <div className="border-overlay dark:border-charcoal-gray border-b pb-6">
          <h1 className="dark:text-light-gray text-2xl font-semibold text-black">
            How I build
          </h1>
          <p className="dark:text-silver-gray mt-1">
            How I build things and my experience.
          </p>
        </div>

        <p className="mt-6">
          I build modern, scalable web applications that are fast, maintainable,
          and production‑ready from day one.
        </p>
        <p className="mt-4">
          When you work with me, you don't just get features — you get clean
          architecture, thoughtful structure, and a codebase that won't slow you
          down six months later.
        </p>

        <h2 className="dark:text-light-gray mt-12 text-lg font-semibold text-black uppercase">
          My Stack
        </h2>
        <p className="mt-4">
          I use tools that reduce friction and speed up delivery:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            <span className="font-semibold dark:text-white">Next.js 16 —</span>{" "}
            Full‑stack React with server components and streaming
          </li>
          <li>
            <span className="font-semibold dark:text-white">
              tRPC + React Query —
            </span>{" "}
            End‑to‑end type safety and smart data caching
          </li>
          <li>
            <span className="font-semibold dark:text-white">
              Cloudflare R2 —
            </span>{" "}
            Secure, cost‑efficient file storage
          </li>
          <li>
            <span className="font-semibold dark:text-white">
              Tailwind CSS —
            </span>{" "}
            Fast, consistent UI development
          </li>
          <li>
            <span className="font-semibold dark:text-white">
              Zustand, Motion, date‑fns —
            </span>{" "}
            Clean state, smooth UX, reliable utilities
          </li>
          <li>
            <span className="font-semibold dark:text-white">Prettier —</span>{" "}
            Consistent, readable code
          </li>
        </ul>
        <p className="mt-4">
          This stack lets me move fast without sacrificing quality.
        </p>
        <h2 className="dark:text-light-gray mt-12 text-lg font-semibold text-black uppercase">
          Built to Scale
        </h2>
        <p className="mt-4">I focus on:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Performance</li>
          <li>Type safety</li>
          <li>Clear structure</li>
          <li>Fast iteration</li>
        </ul>
        <p className="mt-12">
          I also use AI to accelerate test writing and reduce boilerplate — so
          we ship with confidence, not guesswork.
        </p>
        <p className="mt-4">
          If you're building a SaaS, dashboard, or modern web platform, I can
          help you ship faster with a foundation that lasts.
        </p>
      </section>
      <Contact />
    </main>
  );
}
