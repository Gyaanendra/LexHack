import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LexHack - The Ultimate Legal-Tech Hackathon",
  description:
    "Join the intersection of law and technology. Build innovative solutions, defend legal principles, and pitch your ideas to industry leaders.",
  generator: "v0.dev",
};

// Add smooth scroll styles
const smoothScrollStyles = `
  html {
    scroll-behavior: smooth;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <style>{smoothScrollStyles}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
