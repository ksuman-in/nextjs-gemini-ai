import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Google Gemini AI Example",
  description:
    "An example Next.js project demonstrating integration with Google Gemini AI using the @ai-sdk/google SDK.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Link href="/" className="fixed top-4 left-4 text-blue-600">
          Back to Home
        </Link>
        {/*
          The children will be the specific UI component pages like Chat, Completion, etc.
        */}
        {children}
      </body>
    </html>
  );
}
