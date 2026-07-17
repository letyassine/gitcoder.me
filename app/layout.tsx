import type { Metadata } from "next";
import { Space_Grotesk, Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Providers } from "@/components/ui/providers";
import ThemeToggle from "@/components/ui/theme-toggle";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import LangToggle from "@/components/ui/lang-toggle";
import { initServerI18next, getT, getResources } from "next-i18next/server";
import { I18nProvider } from "next-i18next/client";
import i18nConfig from "./i18n/config";

initServerI18next(i18nConfig);

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
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
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { i18n, lng } = await getT();
  const resources = getResources(i18n);
  const fontClass = lng?.startsWith("ar")
    ? cairo.className
    : spaceGrotesk.className;
  return (
    <html lang={lng} className="antialiased" suppressHydrationWarning>
      <head>
        <Script
          data-website-id="dfid_YGNI8uZFcHa5Xr2SD36Le"
          data-domain="gitcoder.me"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${fontClass} bg-cream dark:bg-charcoal-black`}>
        <I18nProvider language={lng} resources={resources}>
          <Providers>
            <div className="fixed top-[19px] right-4 hidden lg:block">
              <ThemeToggle />
              <LangToggle />
            </div>
            <Header />
            {children}
            <SpeedInsights />
            <Footer />
          </Providers>
        </I18nProvider>
      </body>
    </html>
  );
}
