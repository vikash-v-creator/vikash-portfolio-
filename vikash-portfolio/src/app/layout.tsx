import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrolling from "@/components/ui/SmoothScrolling";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vikash | Graphic Designer · Video Editor · Web Developer",
  description:
    "Vikash is a creative freelancer specializing in Graphic Design, Video Editing, and Modern Web Development. Building bold brands, engaging videos, and fast websites that convert.",
  keywords: ["graphic designer", "video editor", "web developer", "freelancer", "creative", "India"],
  openGraph: {
    title: "Vikash | Creative Freelancer",
    description: "Bold design, engaging videos, and modern websites that leave a lasting impression.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="antialiased">
        <CustomCursor />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
