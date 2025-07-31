import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "@/components/footer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-cream antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
