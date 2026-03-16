import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I build — Frontend Engineer",
  description:
    "How I build modern, scalable web applications — my stack, architecture principles, and engineering approach.",
  openGraph: {
    images: "/how-i-build.jpg",
  },
};

export default function HowIBuildLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
