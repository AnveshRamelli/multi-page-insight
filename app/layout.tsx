import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multi-Page Insight",
  description:
    "A multi-page analytics-style Insight application that simulates a real-world metrics dashboard",
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
        <header className="px-6 py-3 bg-gray-100 border-b border-gray-200 mb-8">
          <p className="text-lg font-semibold">Multi-Page Insight</p>
        </header>
        <main className="max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
