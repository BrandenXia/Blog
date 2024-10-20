import { Inter, JetBrains_Mono } from "next/font/google";

import Providers from "@/components/providers";
import config from "@data/config";
import { Analytics } from "@vercel/analytics/next";

import type { JSXWrapper } from "@/types/utils";

import "./globals.css";

const { metadata } = config;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const Layout: JSXWrapper = ({ children }) => (
  <html lang="en">
    <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
      <Providers>{children}</Providers>
      <Analytics />
    </body>
  </html>
);

export default Layout;
export { metadata };
