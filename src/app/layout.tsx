import type {Metadata, Viewport} from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "对...对吗？",
  description: "不准对我心爱的老师大放厥词！",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    {children}
    <Analytics />
    </body>
    </html>
  );
}
