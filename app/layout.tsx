import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshad Shinde | Python Full Stack Developer",
  description: "Portfolio of Harshad Shinde — Python Full Stack Developer focused on Django, Vue.js, PostgreSQL, AI and LLM integrations.",
  keywords: ["Harshad Shinde", "Python Developer", "Django", "Vue.js", "PostgreSQL", "AI", "LLM"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}