import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taylor Lee — Senior Software Engineer",
  description:
    "Senior Software Engineer with 8+ years of experience building scalable full-stack applications, cloud infrastructure, and AI-powered products. Based in Dallas, TX.",
  keywords: [
    "Senior Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Cloud Architecture",
    "React",
    "Next.js",
    "Python",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Taylor Lee" }],
  openGraph: {
    title: "Taylor Lee — Senior Software Engineer",
    description:
      "Building scalable products at the intersection of full-stack engineering and AI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor Lee — Senior Software Engineer",
    description:
      "Building scalable products at the intersection of full-stack engineering and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
