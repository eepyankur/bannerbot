import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/app/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "BannerBot",
  description: "Free AI Banner Maker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jetBrainsMono.variable} overflow-y-hidden`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
