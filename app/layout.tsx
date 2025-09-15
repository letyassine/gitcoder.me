import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Providers } from "@/components/ui/providers";
import ThemeToggle from "@/components/ui/theme-toggle";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yassine — Frontend Engineer",
  description:
    "I'm Yassine — a Frontend Engineer from Morocco passionate about building meaningful web experiences that combine technical expertise with creative innovation.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  keywords: [
    "gitcoder",
    "gitcoder.me",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "TypeScript developer",
    "HTML CSS expert",
    "responsive web design",
    "UI/UX developer",
    "frontend developer Morocco",
    "web developer Casablanca",
    "Morocco software engineer",
    "MENA region developer",
    "remote frontend developer",
    "web application development",
    "e-commerce developer",
    "SaaS frontend developer",
    "mobile-first development",
    "progressive web apps",
    "API integration",
    "performance optimization",
    "accessibility developer",
    "freelance frontend developer",
    "contract developer",
    "startup developer",
    "agile development",
    "modern web technologies",
    "creative web solutions",
    "Tailwind CSS",
    "SASS developer",
    "Webpack",
    "Vite",
    "GraphQL",
    "REST API",
    "Git version control",
    "user experience developer",
    "interface developer",
    "digital solutions",
    "web innovation",
    "frontend architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className} bg-cream dark:bg-charcoal-black`}
      >
        <Providers>
          <div className="fixed top-[19px] right-4 hidden lg:block">
            <ThemeToggle />
          </div>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
