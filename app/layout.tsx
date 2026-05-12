import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golvana",
  description: "E-commerce website Golvana made by GBC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col font-inter text-base font-normal bg-primary-bg text-primary-text">
        {children}
      </body>
    </html>
  );
}
